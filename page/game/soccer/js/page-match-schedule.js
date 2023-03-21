var loadTeamScheduleMatchHtml = function () {
    $(".class-div-content").hide();
    // $(".class-div-content-team-schedule").show();
    $(".class-div-content-other").show();
    var userTeam = getPageUserTeam();
    if (userTeam == undefined) {
        loadUserTeam();
        return;
    }
    var currentMatch = getCurrentMatch(userTeam);
    userTeam.currentMatch = currentMatch;
    if(currentMatch!=undefined){
        initializeAllLineUp(userTeam);
        // initializeGameOdds(currentMatch, userTeam);
        // initializePlayerBet(currentMatch.games, userTeam);
    }
    updateUserTeamInThisPage(userTeam);
    var mainHtml = "";
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    var level = teamInfo.level;
    mainHtml += "<table class='class-table-100-percent-width'><tr><td>" +
        // "<button isShow='0' onclick='showHideWithoutAsiaOdds(this)'>显示未开盘场次</button>" +
        "<button isShow='1' onclick='showHideWithHomeScore(this)'>隐藏已结束场次</button>" +
        "</td></tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:806px;'>";
    mainHtml += "<table class='class-table-100-percent-width'><tr><td>" + teamInfo.name + "所在联赛是" + level + "级联赛，联赛赛程如下所述</td></tr></table>";
    mainHtml += getTeamScheduleMatchHtml(userTeam.currentMatchSchedules, 0);
    mainHtml += "<table class='class-table-100-percent-width'><tr><td>高1级别联赛是" + (level + 1) + "级联赛，联赛赛程如下所述</td></tr></table>";
    mainHtml += getTeamScheduleMatchHtml(userTeam.upperMatchSchedules, 1);
    if (userTeam.lowerMatchSchedules != undefined) {
        mainHtml += "<table class='class-table-100-percent-width'><tr><td>低1级别联赛是" + (level - 1) + "级联赛，联赛赛程如下所述</td></tr></table>";
        mainHtml += getTeamScheduleMatchHtml(userTeam.lowerMatchSchedules, 2);
    } else {
        mainHtml += "<table class='class-table-100-percent-width'><tr><td>没有更低级别联赛了</td></tr></table>";
    }
    mainHtml+="</div>";
    // $(".class-div-content-team-schedule").html(mainHtml);
    $(".class-div-content-other").html(mainHtml);
    return;
}

var showHideWithoutAsiaOdds = function (obj) {
    if ($(obj).attr("isShow") == 0) {
        $(obj).html("隐藏未开盘场次");
        $(".class-tr-without-asia-odds").show();
        $(obj).attr("isShow", 1);
    } else {
        $(obj).html("显示未开盘场次");
        $(".class-tr-without-asia-odds").hide();
        $(obj).attr("isShow", 0);
    }
    return;
}

var showHideWithHomeScore = function (obj) {
    if ($(obj).attr("isShow") == 0) {
        $(obj).html("隐藏已结束场次");
        $(".class-tr-with-score").show();
        $(obj).attr("isShow", 1);
    } else {
        $(obj).html("显示已结束场次");
        $(".class-tr-with-score").hide();
        $(obj).attr("isShow", 0);
    }
    return;
}

var getTeamScheduleMatchHtml = function (currentMatchSchedules, isLowerUpperCurrent) {
    var mainHtml = "<table class='class-table-100-percent-width'><tr>" +
        "<td>级别</td>" +
        "<td>轮次</td>" +
        "<td>主队</td>" +
        "<td>主分</td>" +
        "<td>客分</td>" +
        "<td>客队</td>" +
        // "<td>亚盘主队水位</td>" +
        // "<td>亚盘盘口</td>" +
        // "<td>亚盘客队水位</td>" +
        // "<td>押主金额</td>" +
        // "<td>押客金额</td>" +
        "</tr>";
    for (var i = 0; i < currentMatchSchedules.length; i++) {
        var currentMatchSchedule = currentMatchSchedules[i];
        var matches = currentMatchSchedule.matches;
        for (var j = 0; j < matches.length; j++) {
            var match = matches[j];
            var classEvenBackground = Math.floor(match.games/2)*2==match.games?"class-tr-even":"";
            mainHtml += "<tr class='" +
                "" + (match.homeAsiaOdds >= 0 ? "class-tr-with-asia-odds" : "class-tr-without-asia-odds") + " " +
                "" + (match.homeScore >= 0 ? "class-tr-with-score" : "class-tr-without-score") + " " +
                classEvenBackground+
                "'" +
                "style='" +
                // "" + (match.homeAsiaOdds >= 0 ? "" : "display:none;") + "" +
                "' " +
                ">" +
                "<td >" + match.level + "</td>" +
                "<td >" + match.games + "</td>" +
                "<td class='class-td-button' onclick=\"showThisTeam(this, '" + match.homeTeamId + "', " + isLowerUpperCurrent + ")\">" + match.homeTeamName + "</td>" +
                "<td class='class-td-button' onclick=\"popoutMatchInfo('" + match.id + "')\">" + (match.homeScore >= 0 ? match.homeScore : "") + "</td>" +
                "<td class='class-td-button' onclick=\"popoutMatchInfo('" + match.id + "')\">" + (match.awayScore >= 0 ? match.awayScore : "") + "</td>" +
                "<td class='class-td-button' onclick=\"showThisTeam(this, '" + match.awayTeamId + "', " + isLowerUpperCurrent + ")\">" + match.awayTeamName + "</td>" +
                // "<td class='"+(match.homeScore==-1?((match.homeAsiaOdds>=0?"class-td-button":"")):"")+"' homeScore='"+match.homeScore+"' awayScore='"+match.awayScore+"' onclick='popoutBetFrame(this)' isLowerUpperCurrent='" + isLowerUpperCurrent + "' scheduleIndex='" + i + "' matchIndex='" + j + "' betWay='0'>" + (match.homeAsiaOdds >= 0 ? match.homeAsiaOdds : "") + "</td>" +
                // "<td >" + (match.handicapAsiaOdds >= 0 ? match.handicapAsiaOdds : "") + "</td>" +
                // "<td class='"+(match.awayScore==-1?((match.awayAsiaOdds>=0?"class-td-button":"")):"")+"' homeScore='"+match.homeScore+"' awayScore='"+match.awayScore+"'  onclick='popoutBetFrame(this)' isLowerUpperCurrent='" + isLowerUpperCurrent + "' scheduleIndex='" + i + "' matchIndex='" + j + "' betWay='1'>" + (match.awayAsiaOdds >= 0 ? match.awayAsiaOdds : "") + "</td>" +
                // "<td >" + (match.betHomeMoney == undefined ? "" : match.betHomeMoney) + "</td>" +
                // "<td >" + (match.betAwayMoney == undefined ? "" : match.betAwayMoney) + "</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    return mainHtml;
}

var initializeAllLineUp = function (userTeam) {
    initializeCurrentTeamLineUp(getCurrentTeams(userTeam,0));
    initializeCurrentTeamLineUp(getCurrentTeams(userTeam,1));
    initializeCurrentTeamLineUp(getCurrentTeams(userTeam,2));
    return;
}

var initializeCurrentTeamLineUp = function (currentTeams) {
    if(currentTeams==undefined){
        return;
    }
    var userTeam = getPageUserTeam();
    for (var i = 0; i < currentTeams.length; i++) {
        var currentTeam = currentTeams[i];
        if(currentTeam.teamInfo.id!=userTeam.config.teamId){
            adjustTeamLineUp(currentTeam);
        }
    }
    return;
}

