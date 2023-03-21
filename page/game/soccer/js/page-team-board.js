var loadTeamBoardHtml = function () {
    $(".class-div-content").hide();
    // $(".class-div-content-team-board").show();
    $(".class-div-content-other").show();
    var userTeam = getPageUserTeam();
    if(userTeam==undefined){
        loadUserTeam();
        return;
    }
    var mainHtml = "";
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr><td width='100px;'>排名规则 : </td><td>先计算积分，积分一致计算净胜球，净胜球一致再计算进球数，进球数一致再计算胜利场次，如果还一致就随机抽签排名</td></tr>";
    mainHtml += "<tr><td>当前级别: </td><td>" + teamInfo.level + "级联赛,联赛排名是:</td></tr>";
    mainHtml += "</table>";
    var currentTeams = userTeam.currentTeams;
    mainHtml += getScoreBoardHtml(currentTeams, 0);
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr><td width='100px;'>高1级别: </td><td>" + userTeam.upperTeams[0].teamInfo.level + "级联赛,联赛排名是:</td></tr>";
    mainHtml += "</table>";
    mainHtml += getScoreBoardHtml(userTeam.upperTeams, 1);
    if (userTeam.lowerTeams != undefined) {
        mainHtml += "<table class='class-table-100-percent-width'>";
        mainHtml += "<tr><td width='100px;'>低1级别: </td><td>" + userTeam.lowerTeams[0].teamInfo.level + "级联赛,联赛排名是:</td></tr>";
        mainHtml += "</table>";
        mainHtml += getScoreBoardHtml(userTeam.lowerTeams, 2);
    } else {
        mainHtml += "<div><span>目前没有更低级别的联赛</span></div>";
    }
    // $(".class-div-content-team-board").html(mainHtml);
    $(".class-div-content-other").html(mainHtml);
}

var getScoreBoardHtml = function (currentTeams, current) {
    if(currentTeams==undefined){
        return;
    }
    var mainHtml = "";
    var userTeam = getPageUserTeam();
    mainHtml += "<table class='class-table-100-percent-width'>" +
        "<tr>" +
        "<td>排名</td>" +
        "<td>名称</td>" +
        "<td>胜</td>" +
        "<td>平</td>" +
        "<td>负</td>" +
        "<td>进</td>" +
        "<td>失</td>" +
        "<td>净</td>" +
        "<td>罚分</td>" +
        "<td>积分</td>" +
        "<td>已赛</td>" +
        "<td>现金</td>" +
        "<td>债务</td>" +
        "<td>债务到期剩余周数</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td>城市</td>" +
        "<td>县</td>" +
        "</tr>";
    for (var i = 1; i <= TEAM_COUNT_DEFAULT_VALUE; i++) {
        for (var j = 0; j < currentTeams.length; j++) {
            var currentTeam = currentTeams[j];
            if (currentTeam != undefined) {
                var teamInfo = currentTeam.teamInfo;
                var bankInfo = currentTeam.bankInfo;
                if (teamInfo.rank == (i)) {
                    mainHtml += "<tr " +
                        "style='" +
                        (userTeam.config.teamId==teamInfo.id?"background-color:#FF0066":"") +
                        "'" +
                        "><td>" + (i) + "</td>" +
                        "<td class='class-td-button' onclick=\"showThisTeam(this,'" + teamInfo.id + "'," + current + ")\">" + teamInfo.name + "</td>" +
                        "<td>" + teamInfo.win + "</td><td>" +
                        teamInfo.draw + "</td>" +
                        "<td>" + teamInfo.lose + "</td>" +
                        "<td>" + teamInfo.scoreWin + "</td><td>" + teamInfo.scoreLose
                        + "</td>" +
                        "<td>" + teamInfo.scoreNet + "</td>" +
                        "<td>" + teamInfo.punishPoints + "</td>" +
                        "<td>" + (3 * (teamInfo.win) + teamInfo.draw - teamInfo.punishPoints) + "</td>" +
                        "<td>" + teamInfo.games + "</td>" +
                        "<td>" + getNumberRound(bankInfo.money) + "</td>" +
                        "<td>" + getNumberRound(bankInfo.moneyLoan) + "</td>" +
                        "<td>" + bankInfo.moneyLoanLeftGames + "</td>" +
                        "<td>" + currentTeam.cityInfo.country + "</td>" +
                        "<td>" + currentTeam.cityInfo.province + "</td>" +
                        "<td class='class-td-button' onclick=" +
                        "\"showMapQuery(" +
                        "'" +
                        ""+currentTeam.cityInfo.city+
                        " "+currentTeam.cityInfo.county+
                        "'" +
                        ")\"" +
                        ">" + currentTeam.cityInfo.city + "</td>" +
                        "<td>" + currentTeam.cityInfo.county + "</td>" +
                        "</tr>";
                }
            }
        }
    }
    mainHtml += "</table>";
    return mainHtml;
};

