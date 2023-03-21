var loadMeetSomeoneHtml = function () {
    $(".class-div-content").hide();
    // $(".class-div-content-buy-player").show();
    $(".class-div-content-other").show();
    var userTeam = getPageUserTeam();
    if (userTeam == undefined) {
        loadUserTeam();
        return;
    }
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    if (team.eventIndexes == undefined) {
        getRandomLocation(6, team);
    }
    var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
        (team.eventIndexes == undefined || team.eventIndexes.length > 0 ? "你想要去哪里？" : "下周再说吧") +
        "</div>";
    mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;" +
        "'>" +
        getExistEvents(team) +
        "<button class='class-button-user-team' onclick='classButtonUserTeamClick()'>回去球队</button>" +
        "</div>";
    var chairman = team.chairman;

    if (chairman.girlIndexes != undefined) {
        mainHtml += "<table class='class-table-100-percent-width class-table-bank-info'>";
        mainHtml += "<tr>" +
            "<td>序号</td>" +
            "<td>编号</td>" +
            "<td>图片</td>" +
            "<td>姓名</td>" +
            "<td>职业</td>" +
            "<td>年龄</td>" +
            "<td>期望结婚年龄</td>" +
            "<td>结婚几年</td>" +
            "<td>国家</td>" +
            "<td>省份</td>" +
            "<td>城市</td>" +
            "<td>地区或县</td>" +
            "<td>现金</td>" +
            "<td>购车</td>" +
            "<td>住房</td>" +
            "<td>已性爱次数</td>" +
            "<td>亲密值</td>" +
            "<td style='text-align: center'>操作</td>" +
            "</tr>";
        for (var i = chairman.girlIndexes.length - 1; i >= 0; i--) {
            var girlIndex = chairman.girlIndexes[i];
            var girl = userTeam.girls[girlIndex];
            var happy = getHappy(girl, chairman);
            mainHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + girl.id + "</td>" +
                "<td>" + getSmallGirlImageHtml(girl) + "</td>" +
                "<td>" + girl.name + "</td>" +
                "<td>" + MEET_EVENT_ACTIONS[girl.job].name + "</td>" +
                "<td>" + girl.age + "岁</td>" +
                "<td>" + girl.marriageAge + "岁</td>" +
                "<td>" + girl.marriageYears + "</td>" +
                "<td>" + girl.country + "</td>" +
                "<td>" + girl.province + "</td>" +
                "<td>" + girl.city + "</td>" +
                "<td>" + girl.county + "</td>" +
                "<td>" + getFormatNumberWithThousand(girl.money) + "</td>" +
                "<td>" + getAssetsHtml(girl.cars, "car") + "</td>" +
                "<td>" + getAssetsHtml(girl.houses, "house") + "</td>" +
                "<td>" + girl.sexMans.length + "</td>" +
                "<td>" + happy + "</td>" +
                "<td>" +
                "<button onclick='sendGift()'>送礼物</button>" +
                "<button onclick='sendCar()'>赠车</button>" +
                "<button onclick='sendHouse()'>赠房</button>" +
                "<button onclick='dateWithHer()'>约会</button>" +
                "<button onclick='marryWithHer()'>结婚</button>" +
                "<button onclick='introduceHerToTeamPlayer()'>介绍给球员</button>" +
                "</td>" +
                "</tr>";
        }
        mainHtml += "</table>";
    }
    $(".class-div-content-other").html(mainHtml);
    return;
}

var sendGift = function () {
    showAlertFrameGame("还没开发");
}
var sendCar = function () {
    showAlertFrameGame("还没开发");
}
var sendHouse = function () {
    showAlertFrameGame("还没开发");
}
var dateWithHer = function () {
    showAlertFrameGame("还没开发");
}
var marryWithHer = function () {
    showAlertFrameGame("还没开发");
}
var introduceHerToTeamPlayer = function () {
    showAlertFrameGame("还没开发");
}
var getAssetsHtml = function (assets, category) {
    var mainHtml = "";
    for (var i = 0; i < assets.length; i++) {
        var asset = assets[i];
        if (asset.picture != undefined) {
            asset = asset.picture;
        }
        mainHtml += (asset == undefined ? "" : getPersonAssetPicture(asset, category, "class-image-team-player-picture-small-in-list-30-20"));
    }
    return mainHtml;
}

var increaseHappy = function (girl, chairman, points) {
    for (var j = 0; j < girl.friends.length; j++) {
        var friend = girl.friends[j];
        if (friend.personId == chairman.id) {
            friend.happy += points;
            break;
        }
    }
    return;
}

var getHappy = function (girl, chairman) {
    var happy = 0;
    for (var j = 0; j < girl.friends.length; j++) {
        var friend = girl.friends[j];
        if (friend.personId == chairman.id) {
            happy = friend.happy;
            break;
        }
    }
    return happy;
}

var getMaxHappy = function (girl) {
    var happy = 0;
    for (var j = 0; j < girl.friends.length; j++) {
        var friend = girl.friends[j];
        if (happy < friend.happy) {
            happy = friend.happy;
        }
    }
    return happy;
}

var getExistEvents = function (team) {
    var mainHtml = "";
    if (team.eventIndexes != undefined) {
        for (var i = 0; i < team.eventIndexes.length; i++) {
            mainHtml += "<button onclick='showGirl(this," + (team.eventIndexes[i]) + ")' level='" + team.teamInfo.level + "' teamId = '" + team.teamInfo.id + "'>" + MEET_EVENTS[team.eventIndexes[i]] + "</button>";
        }
    }
    return mainHtml;
}

var getRandomLocation = function (count, team) {
    var mainHtml = "";
    var events = [];
    for (var i = 0; i < count; i++) {
        var j = getRandomInteger(MEET_EVENTS.length);
        events.push(j);
    }
    team.eventIndexes = events;
    return mainHtml;
}

var showGirl = function (object, eventIndex) {
    var level = $(object).attr("level");
    var teamId = $(object).attr("teamId");
    var team = getTeamFromLevelAndId(level, teamId);
    for (var i = 0; i < team.eventIndexes.length; i++) {
        if (team.eventIndexes[i] == eventIndex) {
            team.eventIndexes.splice(i, 1);
            break;
        }
    }
    var eventAction = MEET_EVENT_ACTIONS[eventIndex];
    if (getRandomInteger(100) < eventAction.percent) {
        var girlIndex = getGirlIndex(eventIndex);
        var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "你来到" + MEET_EVENTS[eventIndex] + "你要做什么？"
        "</div>";

        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>";
        for (var i = 0; i < eventAction.actions.length; i++) {
            mainHtml += "<button onclick='loadGirlEventAction(" + i + "," + eventIndex + "," + girlIndex + ")'>" + eventAction.actions[i] + "</button>";
        }
        mainHtml += "<button onclick='loadMeetSomeoneHtml()'>返回</button>";
        mainHtml += "</div>";

        $(".class-div-content-other").html(mainHtml);
        return;
    } else {
        var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "你来到" + MEET_EVENTS[eventIndex] + "，你看见熙熙攘攘的人群，你期望的小姐姐没有出现。"
        "</div>";

        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
            "</div>";

        $(".class-div-content-other").html(mainHtml);
        return;
    }
}

var getGirlIndex = function (eventIndex) {
    var girlsRange = Math.floor(PICTURE_COUNT_WOMAN / (MEET_EVENTS.length));
    return girlsRange * eventIndex + getRandomInteger(girlsRange);
}

var loadGirlEventAction = function (actionIndex, eventIndex, girlIndex) {
    var eventAction = MEET_EVENT_ACTIONS[eventIndex];
    var userTeam = getPageUserTeam();
    var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
        getGirlImageHtml(userTeam.girls[girlIndex]) +
        "</div>";

    mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
        "你看见一位小姐姐对你甜甜的笑：<br/>" +
        eventAction.words[0] +
        "</div>";
    mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
        "<button onclick='" +
        "sayAnswer(" + actionIndex + ',' + eventIndex + ',' + girlIndex + ",1)" +
        "'>是</button>" + "<button onclick='" +
        "sayAnswer(" + actionIndex + ',' + eventIndex + ',' + girlIndex + ",0)" +
        "'>否</button>" + "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
        "</div>";

    $(".class-div-content-other").html(mainHtml);
}

var sayAnswer = function (actionIndex, eventIndex, girlIndex, yesOrNo) {
    var eventAction = MEET_EVENT_ACTIONS[eventIndex];
    var userTeam = getPageUserTeam();
    if (yesOrNo == 0) {
        var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            getPersonPicture(userTeam.girls[girlIndex], "woman", "") +
            "</div>";
        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "小姐姐对你甜甜的笑：<br/>那么再见了！" +
            "</div>";
        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
            "</div>";
        $(".class-div-content-other").html(mainHtml);
    } else if (yesOrNo == 1) {
        var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            getPersonPicture(userTeam.girls[girlIndex], "woman", "") +
            "</div>";
        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "小姐姐对你甜甜的笑：<br/>好的！" +
            "</div>";
        if (getRandomInteger(100) < eventAction.percent) {
            mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
                "小姐姐对你甜甜的说：<br/>" +
                eventAction.words[1] +
                "</div>";
            mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
                "<button onclick='" +
                "sayAnswerWechat(" + actionIndex + ',' + eventIndex + ',' + girlIndex + ",1)" +
                "'>好</button>" + "<button onclick='" +
                "sayAnswerWechat(" + actionIndex + ',' + eventIndex + ',' + girlIndex + ",0)" +
                "'>不好</button>" + "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
                "</div>";
        } else {
            mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
                "看着小姐姐的笑容，感觉自己错过了一次好机会" +
                "</div>";
        }
        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
            "</div>";
        $(".class-div-content-other").html(mainHtml);
    }
}

var sayAnswerWechat = function (actionIndex, eventIndex, girlIndex, yesOrNo) {
    var eventAction = MEET_EVENT_ACTIONS[eventIndex];
    var userTeam = getPageUserTeam();
    var userCurrentTeam = getUserCurrentTeam();
    if (yesOrNo == 0) {
        var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            getPersonPicture(userTeam.girls[girlIndex], "woman", "") +
            "</div>";
        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "小姐姐对你尴尬的笑笑：<br/>那么再见了！" +
            "</div>";
        mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
            "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
            "</div>";
        $(".class-div-content-other").html(mainHtml);
    } else {
        userTeam.girls[girlIndex].job = eventIndex;
        if (userTeam.girls[girlIndex].friends == undefined) {
            userTeam.girls[girlIndex].friends = [];
        }
        var isFriend = 0;
        for (var i = 0; i < userTeam.girls[girlIndex].friends.length; i++) {
            var friend = userTeam.girls[girlIndex].friends[i];
            if (friend.personId == userCurrentTeam.chairman.id) {
                isFriend = 1;
                friend.happy += 1;
            }
        }
        if (isFriend == 0) {
            var friend = {};
            friend.happy = 1;
            friend.personId = userCurrentTeam.chairman.id;
            friend.level = userCurrentTeam.teamInfo.level;
            friend.teamId = userCurrentTeam.teamInfo.id;
            friend.job = FRIEND_JOB_SOCCER_TEAM_CHAIRMAN;
            userTeam.girls[girlIndex].friends.push(friend);
            if (userCurrentTeam.chairman.girlIndexes == undefined) {
                userCurrentTeam.chairman.girlIndexes = [];
            }
            userCurrentTeam.chairman.girlIndexes.push(girlIndex);
            var mainHtml = "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
                getPersonPicture(userTeam.girls[girlIndex], "woman", "") +
                "</div>";
            mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
                "小姐姐对你欢快的笑着：<br/>那么我们是朋友了啊！" +
                "</div>";
            mainHtml += "<div class='class-div-transparent' style='background-color:#FFFFFF;margin:16px 0px;padding:12px;border-radius:12px;'>" +
                "<button onclick='loadMeetSomeoneHtml()'>返回</button>" +
                "</div>";
            $(".class-div-content-other").html(mainHtml);
        }
    }
}

//TODO 点击美女头像展示美女各种资料。
