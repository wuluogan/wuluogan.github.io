var loadBuyPlayerHtml = function () {
    $(".class-div-content").hide();
    // $(".class-div-content-buy-player").show();
    $(".class-div-content-other").show();
    var userTeam = getPageUserTeam();
    if(userTeam==undefined){
        loadUserTeam();
        return;
    }
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    var level = teamInfo.level;
    var mainHtml = "<div style='margin:16px 0px;'><span>目前是第"+(1+teamInfo.games)+"周, 转会市场开启时间是:第1周至第6周和第26周至第38周</span></div>";
    if(isInTransferWeeks(teamInfo)){
        mainHtml +="<table class='class-table-100-percent-width'><tr><td class='class-td-button' onclick='showBuyPlayerHtml(0)'>门将</td><td class='class-td-button' onclick='showBuyPlayerHtml(1)'>后卫</td>" +
            "<td class='class-td-button' onclick='showBuyPlayerHtml(2)'>中场</td><td" +
            " class='class-td-button' onclick='showBuyPlayerHtml(3)'>前锋</td></tr></table>";
        mainHtml += "<div class='class-div-buy-player-list' style='overflow-y: scroll;height:826px;'>";
        mainHtml += "</div>";
    }
    $(".class-div-content-other").html(mainHtml);
    if(isInTransferWeeks(teamInfo)) {
        showBuyPlayerHtml(0);
    }
    return;
}

var isInTransferWeeks = function (teamInfo) {
    return teamInfo.games+1<=6 || (teamInfo.games+1>=26 && teamInfo.games+1<=38);
}

var showBuyPlayerHtml = function (position) {
    var userTeam = getPageUserTeam();
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    var level = teamInfo.level;
    var transferTeamPlayers = getGamePositionBuyPlayers("buy_players_position_"+position);
    if(transferTeamPlayers==undefined){
        transferTeamPlayers=getTransferMarketTeamPlayers(position);
        setGamePositionBuyPlayers("buy_players_position_"+position,transferTeamPlayers);
    }
    var mainHtml = getBuyPlayerHtml(transferTeamPlayers,position);
    $(".class-div-buy-player-list").html(mainHtml);
    $(".class-td-buy-player-happy").click();
    return;
}

var showThisColumn = function (object, field) {
    if($(object).attr('hasClick')==undefined){
        $(object).attr('hasClick',1);
        $(".class-td-team-player-"+field).css("background-color",getRandomColor(13));
    }else{
        $(object).removeAttr('hasClick');
        $(".class-td-team-player-"+field).css("background-color","black");
    }
    return;
}

var getBuyPlayerHtml = function (teamPlayers, position) {
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'><tr>" +
        "<td>序号</td>" +
        // "<td class='class-td-button' onclick=\"showThisColumn(this,'id')\">球员编号</td>" +
        "<td>图片</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'name')\" width='50px;'>名称</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'position')\">位置</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'offensive')\">无球跑动</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'shoot')\">射门</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'pass')\">传球</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'dribble')\">过人</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'attack')\">攻击</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'defensive')\">盯人</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'defence')\">防守</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'block')\">封堵射门</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'intercept')\">拦截传球</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'closingDown')\">逼抢</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'goalKeeping')\">守门</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'health')\">健康</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'stamina')\">耐力</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'happy')\">快乐</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'potential')\">潜力</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'age')\">年龄</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'peakAge')\">巅峰</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'retireAge')\">退休</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'salaryWeek')\">周薪</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'transferMoney')\">转会费</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'money')\">球员现金</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'country')\">国家</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'province')\">省份</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'city')\">城市</td>" +
        "<td class='class-td-button' onclick=\"showThisColumn(this,'county')\">县</td>" +
        "<td>操作</td>" +
        "</tr>";
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer != undefined) {
            mainHtml += "<tr class='class-tr-team-player'>" +
                "<td>" + (i + 1) + "</td>" +
                // "<td class='class-td-team-player-id'>" + teamPlayer.id + "</td>" +
                "<td>"+getPlayerPicture(teamPlayer, "class-image-team-player-picture-small-in-list")+"</td>"+
                "<td class='class-td-team-player-name'>" + teamPlayer.name + "</td>" +
                "<td class='class-td-team-player-position'>" + PLAYER_POSITIONS[teamPlayer.position] + "</td>" +
                "<td class='class-td-team-player-offensive'>" + getNumberRound(teamPlayer.offensive) + "</td>" +
                "<td class='class-td-team-player-shoot'>" + getNumberRound(teamPlayer.shoot) + "</td>" +
                "<td class='class-td-team-player-pass'>" + getNumberRound(teamPlayer.pass) + "</td>" +
                "<td class='class-td-team-player-dribble'>" + getNumberRound(teamPlayer.dribble) + "</td>" +
                "<td class='class-td-team-player-attack'>" + getNumberRound(teamPlayer.attack) + "</td>" +
                "<td class='class-td-team-player-defensive'>" + getNumberRound(teamPlayer.defensive) + "</td>" +
                "<td class='class-td-team-player-defence'>" + getNumberRound(teamPlayer.defence) + "</td>" +
                "<td class='class-td-team-player-block'>" + getNumberRound(teamPlayer.block) + "</td>" +
                "<td class='class-td-team-player-intercept'>" + getNumberRound(teamPlayer.intercept) + "</td>" +
                "<td class='class-td-team-player-closingDown'>" + getNumberRound(teamPlayer.closingDown) + "</td>" +
                "<td class='class-td-team-player-goalKeeping'>" + getNumberRound(teamPlayer.goalKeeping) + "</td>" +
                "<td class='class-td-team-player-health'>" + getNumberRound(teamPlayer.health) + "</td>" +
                "<td class='class-td-team-player-stamina'>" + getNumberRound(teamPlayer.stamina) + "</td>" +
                "<td class='class-td-team-player-happy'>" + getNumberRound(teamPlayer.happy) + "</td>" +
                "<td class='class-td-team-player-potential'>" + getNumberRound(teamPlayer.potential) + "</td>" +
                "<td class='class-td-team-player-age'>" + teamPlayer.age + "岁</td>" +
                "<td class='class-td-team-player-peakAge'>" + teamPlayer.peakAge + "岁</td>" +
                "<td class='class-td-team-player-retireAge'>" + teamPlayer.retireAge + "岁</td>" +
                "<td class='class-td-team-player-salaryWeek'>" + getNumberRound(teamPlayer.salaryWeek) + "</td>" +
                "<td class='class-td-team-player-transferMoney'>" + getNumberRound(teamPlayer.transferMoney) + "</td>" +
                "<td class='class-td-team-player-money'>" + getNumberRound(teamPlayer.money) + "</td>" +
                "<td class='class-td-team-player-country'>" + teamPlayer.country + "</td>" +
                "<td class='class-td-team-player-province'>" + teamPlayer.province + "</td>" +
                "<td class='class-td-team-player-city class-td-button' onclick=" +
                "\"showMapQuery(" +
                "'" +
                ""+teamPlayer.city+
                " "+teamPlayer.county+
                "'" +
                ")\"" +
                ">" + teamPlayer.city + "</td>" +
                "<td class='class-td-team-player-county'>" + teamPlayer.county + "</td>" +
                "<td class='class-td-button' onclick='buyThisPlayer(this,"+position+")' class='class-span-buy-player' property='" + JSON.stringify(teamPlayer) + "'>购买</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    return mainHtml;
};

var buyThisPlayer = function (obj,position) {
    var teamPlayerString = $(obj).attr("property");
    var teamPlayer = JSON.parse(teamPlayerString);
    var userTeam = getPageUserTeam();
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    var bankInfo = userTeam.currentTeams[userTeam.config.teamIndex].bankInfo;
    var teamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].teamPlayers;
    if (bankInfo.money > teamPlayer.transferMoney) {
        bankInfo.money -= teamPlayer.transferMoney;
        teamPlayers.push(teamPlayer);
        updateUserTeamInThisPage(userTeam);
        var teamPlayersList = getGamePositionBuyPlayers("buy_players_position_"+position);
        for(var i=0;i<teamPlayersList.length;i++){
            if(teamPlayersList[i].id==teamPlayer.id){
                teamPlayersList.splice(i,1);
                break;
            }
        }
        setGamePositionBuyPlayers("buy_players_position_"+position,teamPlayersList);
        $(obj).parent().remove();
    } else {
        showAlertFrameGame("你现金不够支付此球员");
    }
    return;
}
