var loadGamePlayHtml = function () {
    $(".class-div-content").hide();
    $(".class-div-content-other").show();
    closePopout();
    var userTeam = getPageUserTeam();
    if (userTeam == undefined) {
        loadUserTeam();
        return;
    }
    var mainHtml = "";
    var currentMatch = getCurrentMatch(userTeam);
    userTeam.currentMatch = currentMatch;
    if (currentMatch != undefined) {
        initializeAllLineUp(userTeam);
        // initializeGameOdds(currentMatch, userTeam);
        // initializePlayerBet(currentMatch.games, userTeam);
        initializeFansCount(currentMatch, userTeam);
    }
    updateUserTeamInThisPage(userTeam);
    if (currentMatch != undefined) {
        var match = userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex];
        var homeTeam = undefined;
        var awayTeam = undefined;
        for (var j = 0; j < userTeam.currentTeams.length; j++) {
            if (userTeam.currentTeams[j].teamInfo.id == match.homeTeamId) {
                homeTeam = userTeam.currentTeams[j];
            }
            if (userTeam.currentTeams[j].teamInfo.id == match.awayTeamId) {
                awayTeam = userTeam.currentTeams[j];
            }
        }
        mainHtml += "<table class='class-table-100-percent-width'>";
        mainHtml += "<tr>" +
            "<td>" + userTeam.config.season + "赛季</td>" +
            "<td>" + match.level + "级联赛</td>" +
            "<td>第" + match.games + "轮比赛</td>" +
            "<td" +
            " onclick=\"showThisTeam(this, '" + match.homeTeamId + "'," +
            (match.level > userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 1 : (match.level < userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 2 : 0)) +
            ")\"" +
            " class='class-td-button'>[" + match.homeTeamName + "]</td>" +
            "<td> [" + homeTeam.teamInfo.rank + "]</td>" +
            "<td> vs </td>" +
            "<td> [" + awayTeam.teamInfo.rank + "]</td>" +
            "<td class='class-td-button' " +
            " onclick=\"showThisTeam(this, '" + match.awayTeamId + "'," +
            (match.level > userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 1 : (match.level < userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 2 : 0)) +
            ")\"" +
            ">[" + match.awayTeamName + "]</td>" +
            // "<td>亚洲盘口是</td>" +
            // "<td>" + match.homeAsiaOdds + "</td>" +
            // "<td>" + match.handicapAsiaOdds + "</td>" +
            // "<td>" + match.awayAsiaOdds + "</td>" +
            "<td class='class-td-button class-td-button-start-this-match' onclick='startThisMatch();'>开始这场比赛</td>" +
            "</tr>";
        //最终比分要展示
        mainHtml += "<tr>" +
            "<td class='class-td-button' onclick='loadHappyFrame();'>快乐情报</td>" +
            "<td class='class-td-button' onclick='loadFakeFrame();'>假赛情报</td>" +
            "<td class='class-td-button' onclick='loadCorrectLineUp();'>自动设置阵型</td>" +
            "<td >比分牌</td>" +
            "<td class='home-score-match-id-" + match.id + "' style='text-align:center;'></td>" +
            "<td style='text-align:center;'> - </td>" +
            "<td class='away-score-match-id-" + match.id + "' style='text-align:center;'></td>" +
            "<td></td>" +
            // "<td>投注量是</td>" +
            // "<td>" + match.betHomeMoney + "</td>" +
            // "<td></td>" +
            // "<td>" + match.betAwayMoney + "</td>" +
            "<td></td>" +
            "</tr>";
        mainHtml += "</table>";
        mainHtml += getStadiumHtml(homeTeam);
        var teamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].teamPlayers;
        var userCurrentTeam = userTeam.currentTeams[userTeam.config.teamIndex];
        if (match.homeTeamId == userTeam.config.teamId) {
            mainHtml += getHomeOrAwayTeamLineUpHtml(userCurrentTeam, "主");
            var currentTeams = userTeam.currentTeams;
            for (var i = 0; i < currentTeams.length; i++) {
                var currentTeam = currentTeams[i];
                if (currentTeam.teamInfo.id == match.awayTeamId) {
                    mainHtml += getHomeOrAwayTeamLineUpHtml(currentTeam, "客");
                    break;
                }
            }
        } else {
            var currentTeams = userTeam.currentTeams;
            for (var i = 0; i < currentTeams.length; i++) {
                var currentTeam = currentTeams[i];
                if (currentTeam.teamInfo.id == match.homeTeamId) {
                    mainHtml += getHomeOrAwayTeamLineUpHtml(currentTeam, "主");
                    break;
                }
            }
            mainHtml += getHomeOrAwayTeamLineUpHtml(userCurrentTeam, "客");
        }
        mainHtml = "<table class='class-table-team-lineup' style='float:left;width:50%;height:950px;'><tr><td>" + mainHtml + "</td></tr></table>";
        mainHtml +=
            "<table class='class-table-team-play-content class-table-50-percent-width' style='float:left;height:950px;'><tr><td><div class='class-div-match-speak' style='height:100%;overflow-y: scroll;'></div></td></tr></table>";
    } else {
        mainHtml = "<table class='class-table-100-percent-width'><tr><td class='class-td-button class-td-button-goto-next-seasson' onclick='gotoNextSeason();' >进入下一个赛季</td></tr></table>";
    }
    // $(".class-div-content-play-game").html(mainHtml);
    $(".class-div-content-other").html(mainHtml);
    //设置其他球队激励
    setOtherTeamEncourageMoney();
    //设置所有球队假赛要求
    setTeamsFakeForAll();
    return;
}

var setHonor = function (teams) {
    if (teams == undefined) {
        return;
    }
    var userTeam = getPageUserTeam();
    for (var i = 0; i < teams.length; i++) {
        var team = teams[i];
        if (team.teamInfo.rank <= 2) {
            var honor = {};
            honor.id = "HON" + getId();
            honor.season = userTeam.config.season;
            honor.level = team.teamInfo.level;
            honor.rank = team.teamInfo.rank;
            honor.picture = getRandomInteger(PICTURE_COUNT_CUP);
            team.honors.push(honor);
        }
    }
}

var gotoNextSeason = function () {
    var userTeam = getPageUserTeam();
    //设置球队荣誉
    setHonor(userTeam.currentTeams);
    setHonor(userTeam.upperTeams);
    setHonor(userTeam.lowerTeams);
    //升级降级
    toUpperOrLowerLevel(userTeam);
    //升级降级完成后，重新找着我的球队，并初始化
    var currentTeams = getCurrentTeams(userTeam, 0);
    var upperTeams = getCurrentTeams(userTeam, 1);
    var lowerTeams = getCurrentTeams(userTeam, 2);
    //先找高一层teams
    var isFound = 0;
    for (var i = 0; i < upperTeams.length; i++) {
        var upperTeam = upperTeams[i];
        if (upperTeam.teamInfo.id == userTeam.config.teamId) {
            isFound = 1;
            //如果是上一层级。那么就把下一级舍弃掉。
            userTeam.lowerTeams = userTeam.currentTeams;
            userTeam.currentTeams = userTeam.upperTeams;
            userTeam.upperTeams = userTeam.upper2Teams;
            for (var j = 0; j < TEAM_COUNT_DEFAULT_VALUE - 2; j++) {
                userTeam.upperTeams.push(getInitializeSingleTeam(userTeam.upperTeams[0].teamInfo.level, j + 3, j + 3));
            }
            userTeam.upper2Teams = undefined;
            userTeam.lower2Teams = undefined;
            userTeam.config.teamIndex = i;
            break;
        }
    }
    //没找着就继续找目前的层级
    if (isFound == 0) {
        for (var i = 0; i < currentTeams.length; i++) {
            var currentTeam = currentTeams[i];
            if (currentTeam.teamInfo.id == userTeam.config.teamId) {
                isFound = 1;
                //啥也不做，直接初始化即可
                userTeam.config.teamIndex = i;
                break;
            }
        }
    }
    //没找着就继续找低一层的层级
    if (isFound == 0) {
        for (var i = 0; i < lowerTeams.length; i++) {
            var lowerTeam = lowerTeams[i];
            if (lowerTeam.teamInfo.id == userTeam.config.teamId) {
                isFound = 1;
                //如果是下一层级。那么就把上一级舍弃掉。
                userTeam.upperTeams = userTeam.currentTeams;
                userTeam.currentTeams = userTeam.lowerTeams;
                userTeam.lowerTeams = userTeam.lower2Teams;
                for (var j = 0; j < TEAM_COUNT_DEFAULT_VALUE - 2; j++) {
                    userTeam.lowerTeams.push(getInitializeSingleTeam(userTeam.lowerTeams[0].teamInfo.level, j + 3, j + 3));
                }
                userTeam.upper2Teams = undefined;
                userTeam.lower2Teams = undefined;
                userTeam.config.teamIndex = i;
                break;
            }
        }
    }
    //初始化当前赛季数据。
    userTeam.bets = [];
    userTeam.fakes = [];
    userTeam.currentMatch = undefined;
    clearSeason(userTeam.upperTeams);
    clearSeason(userTeam.currentTeams);
    clearSeason(userTeam.lowerTeams);
    increasePlayerAgeAndRetire(userTeam.upperTeams);
    increasePlayerAgeAndRetire(userTeam.currentTeams);
    increasePlayerAgeAndRetire(userTeam.lowerTeams);
    increaseTransferPlayerAgeAndRetire(userTeam.transferMarket.position0);
    increaseTransferPlayerAgeAndRetire(userTeam.transferMarket.position1);
    increaseTransferPlayerAgeAndRetire(userTeam.transferMarket.position2);
    increaseTransferPlayerAgeAndRetire(userTeam.transferMarket.position3);
    initializeTeamScheduleForGotToNextSeason(userTeam);
    userTeam.config.season += 1;
    updateUserTeamInThisPage(userTeam);
    //跳转页面
    $(".class-div-content-other").html("<span class='td'>祝贺你进入了第" + userTeam.config.season + "个赛季</span>");
    // loadGamePlayHtml();
    return;
}

var increaseTransferPlayerAgeAndRetire = function (teamPlayers) {
    if (teamPlayers == undefined) {
        return;
    }
    for (j = 0; j < teamPlayers.length; j++) {
        var teamPlayer = teamPlayers[j];
        teamPlayer.age += 1;
        increaseTeamPlayerRandomAbility(teamPlayer, 0, 6, 6);
        if (teamPlayer.age >= teamPlayer.retireAge) {
            sendMailToTeam("转会市场 中的" + teamPlayer.age + "岁的老" + PLAYER_POSITIONS[teamPlayer.position] + " [" + teamPlayer.name + "] 宣布退休了!", "如题");
            teamPlayers.splice(j, 1);
        }
    }
}

var increaseTeamPlayerRandomAbility = function (teamPlayer, base, minus, plus) {
    teamPlayer.offensive += getRandomBaseMinusPlusValue(base, minus, plus);//参与进攻欲望，每次攻击时，越高，越会参与进攻
    teamPlayer.defensive += getRandomBaseMinusPlusValue(base, minus, plus);//参与防守欲望，每次防守时，越高，越会参与进攻
    teamPlayer.shoot += getRandomBaseMinusPlusValue(base, minus, plus);//射门
    teamPlayer.pass += getRandomBaseMinusPlusValue(base, minus, plus);//传球
    teamPlayer.dribble += getRandomBaseMinusPlusValue(base, minus, plus);//过人
    teamPlayer.attack += getRandomBaseMinusPlusValue(base, minus, plus);//攻击
    teamPlayer.defence += getRandomBaseMinusPlusValue(base, minus, plus);//防守
    teamPlayer.block += getRandomBaseMinusPlusValue(base, minus, plus);//封堵射门
    teamPlayer.intercept += getRandomBaseMinusPlusValue(base, minus, plus);//拦截
    teamPlayer.closingDown += getRandomBaseMinusPlusValue(base, minus, plus);//逼抢
    teamPlayer.goalKeeping += getRandomBaseMinusPlusValue(base, minus, plus);//守门
    teamPlayer.health += getRandomBaseMinusPlusValue(base, minus, plus);//健康，每踢一场比赛，耐力耗尽会暂时损耗健康值，健康值耗尽时会有比例会受伤。
    teamPlayer.stamina += getRandomBaseMinusPlusValue(base, minus, plus);//耐力
}

var getRandomBaseMinusPlusValue = function (base, minus, plus) {
    return base - getRandomInteger(minus * 100) / 100 + getRandomInteger(plus * 100) / 100;
}

var increasePlayerAgeAndRetire = function (currentTeams) {
    var userTeam = getPageUserTeam();
    if (currentTeams != undefined) {
        for (var i = 0; i < currentTeams.length; i++) {
            var currentTeam = currentTeams[i];
            var teamPlayers = currentTeam.teamPlayers;
            for (j = 0; j < teamPlayers.length; j++) {
                var teamPlayer = teamPlayers[j];
                teamPlayer.age += 1;
                //球员的潜力在巅峰之前是每年-1，在巅峰之后是每年-5
                if (teamPlayer.age <= teamPlayer.peakAge) {
                    teamPlayer.potential -= 1;
                } else {
                    teamPlayer.potential -= 5;
                }
                if (teamPlayer.potential < 1) {
                    teamPlayer.potential = 1;
                }
            }
            for (j = 0; j < teamPlayers.length; j++) {
                var k = teamPlayers.length - j - 1;
                var teamPlayer = teamPlayers[k];
                if (teamPlayer.age >= teamPlayer.retireAge) {
                    sendMailToTeam(currentTeam.teamInfo.level + "级联赛球队 [" + currentTeam.teamInfo.name + "] 中的" + teamPlayer.age + "岁的老" + PLAYER_POSITIONS[teamPlayer.position] + " [" + teamPlayer.name + "] 宣布退休了!", "如题");
                    teamPlayers.splice(k, 1);
                }
            }
            //青年球员满19岁会离开。
            var youngTeamPlayers = currentTeam.youngTeamPlayers;
            for (j = 0; j < youngTeamPlayers.length; j++) {
                var youngTeamPlayer = youngTeamPlayers[j];
                youngTeamPlayer.age += 1;
                //球员的潜力在巅峰之前是每年-1，在巅峰之后是每年-5
                if (youngTeamPlayer.age <= youngTeamPlayer.peakAge) {
                    youngTeamPlayer.potential -= 1;
                } else {
                    youngTeamPlayer.potential -= 5;
                }
                if (youngTeamPlayer.potential < 1) {
                    youngTeamPlayer.potential = 1;
                }
            }
            for (j = 0; j < youngTeamPlayers.length; j++) {
                var k = youngTeamPlayers.length - j - 1;
                var teamPlayer = youngTeamPlayers[k];
                if (teamPlayer.age > 18) {
                    sendMailToTeam(currentTeam.teamInfo.level + "级联赛球队 [" + currentTeam.teamInfo.name + "] 中的青年球员的" + teamPlayer.age + "岁的" + PLAYER_POSITIONS[teamPlayer.position] + " [" + teamPlayer.name + "] 宣布离队了!", "如题");
                    //超过18岁的年轻球员加入转会市场。
                    if (teamPlayer.position == 0) {
                        userTeam.transferMarket.position0.push(teamPlayer);
                    }
                    if (teamPlayer.position == 1) {
                        userTeam.transferMarket.position1.push(teamPlayer);
                    }
                    if (teamPlayer.position == 2) {
                        userTeam.transferMarket.position2.push(teamPlayer);
                    }
                    if (teamPlayer.position == 3) {
                        userTeam.transferMarket.position3.push(teamPlayer);
                    }
                    youngTeamPlayers.splice(k, 1);
                }
            }
            //每赛季增加青年球员
            if (youngTeamPlayers.length < YOUNG_PLAYER_YEAR_BASE_COUNT * 2) {
                var count = 36 + getRandomInteger(36);
                if (YOUNG_PLAYER_YEAR_BASE_COUNT * 2 - youngTeamPlayers.length < count) {
                    count = YOUNG_PLAYER_YEAR_BASE_COUNT * 2 - youngTeamPlayers.length;
                }
                for (var i = 0; i < count; i++) {
                    youngTeamPlayers.push(getRandomYoungPlayerWithLevel(currentTeam.teamInfo.level));
                }
            }
            //会计满退休年龄会退休。会计退休。
            var accountant = currentTeam.accountant;
            accountant.age += 1;
            if (accountant.age > accountant.retireAge) {
                sendMailToTeam(currentTeam.teamInfo.level + "级联赛球队 [" + currentTeam.teamInfo.name + "] 的" + teamPlayer.age + "岁的老会计 [" + accountant.name + "] 宣布退休了!", "" +
                    "" +
                    getAccountInfoHtml(accountant) +
                    "");
                //雇佣新会计
                currentTeam.accountant = getAccountant();
                sendMailToTeam(currentTeam.teamInfo.level + "级联赛球队 [" + currentTeam.teamInfo.name + "] 雇佣了一名新会计!", "" +
                    "" +
                    getAccountInfoHtml(accountant) +
                    "");
            }
        }
    }
    return;
}

var clearSeason = function (currentTeams) {
    if (currentTeams != undefined) {
        for (var i = 0; i < currentTeams.length; i++) {
            var currentTeam = currentTeams[i];
            currentTeam.teamInfo.win = 0;
            currentTeam.teamInfo.draw = 0;
            currentTeam.teamInfo.lose = 0;
            currentTeam.teamInfo.scoreWin = 0;
            currentTeam.teamInfo.scoreLose = 0;
            currentTeam.teamInfo.scoreNet = 0;
            currentTeam.teamInfo.games = 0;
            currentTeam.teamInfo.points = 0;
            currentTeam.teamInfo.rank = i + 1;
            //赛季惩罚分数清零。
            currentTeam.teamInfo.punishPoints = 0;
            currentTeam.fakes = [];
            currentTeam.sponsors = [];
            currentTeam.currentEncourages = [];
            currentTeam.encourages = [];
            currentTeam.sponsors = [];
            currentTeam.sponsors = [];
        }
    }
    return;
}

var startThisMatch = function () {
    $(".class-td-button-start-this-match").css("width", "90px").html("").unbind("click").removeClass("class-td-button");
    var userTeam = getPageUserTeam();
    //有伤病禁止开始比赛
    var teamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].teamPlayers;
    if (getLineUpCount(teamPlayers, 1, 0) != 1) {
        showAlertFrameGame("你的缺少首发门将！");
        return;
    }
    if (getLineUpCount(teamPlayers, 1) != 11) {
        showAlertFrameGame("你的首发人数有误，请调整成11人！注意检查是否缺少首发门将！");
        return;
    }
    if (getLineUpCount(teamPlayers, 2) != 5) {
        showAlertFrameGame("你的替补人数有误，请调整成5人！注意检查是否缺少替补门将！");
        return;
    }
    //如果现金是负，禁止进入下一轮比赛。
    if (userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money < 0) {
        showAlertFrameGame("很抱歉，请确保你的现金大于0！");
        return;
    }
    var chairmanHome = getHomeChairman();
    var currentMatch = userTeam.currentMatch;
    logMatchMessage = "";
    logMatch("欢迎来观看这场" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].level + "联赛第" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].games + "轮的比赛 : " + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeTeamName + " vs " + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayTeamName + "！<br/>");
    var homeTeam = {};
    var awayTeam = {};
    for (var i = 0; userTeam.currentTeams.length; i++) {
        var currentTeam = userTeam.currentTeams[i];
        if (currentTeam.teamInfo.id == userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeTeamId) {
            homeTeam = currentTeam;
            break;
        }
    }
    for (var i = 0; userTeam.currentTeams.length; i++) {
        var currentTeam = userTeam.currentTeams[i];
        if (currentTeam.teamInfo.id == userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayTeamId) {
            awayTeam = currentTeam;
            break;
        }
    }
    logMatch("比赛开始了<br/>");
    if (getRandomInteger(100) >= 50) {
        logMatch("00:00' 主队开球<br/>");
    } else {
        logMatch("00:00' 客队开球<br/>");
    }
    var homeTeamPlayers = homeTeam.teamPlayers;
    var homeLineUpTeamPlayers = [];
    var homeLineUpBackupTeamPlayers = [];
    var homeTeamGk = {};
    for (var i = 0; i < homeTeamPlayers.length; i++) {
        var teamPlayer = homeTeamPlayers[i];
        if (teamPlayer.lineUp == 1) {
            if (teamPlayer.position == 0) {
                homeTeamGk = teamPlayer;
            } else {
                homeLineUpTeamPlayers.push(teamPlayer);
            }
        }
        if (teamPlayer.lineUp == 2) {
            homeLineUpBackupTeamPlayers.push(teamPlayer);
        }
    }
    var awayTeamPlayers = awayTeam.teamPlayers;
    var awayLineUpTeamPlayers = [];
    var awayLineUpBackupTeamPlayers = [];
    var awayTeamGk = {};
    for (var i = 0; i < awayTeamPlayers.length; i++) {
        var teamPlayer = awayTeamPlayers[i];
        if (teamPlayer.lineUp == 1) {
            if (teamPlayer.position == 0) {
                awayTeamGk = teamPlayer;
            } else {
                awayLineUpTeamPlayers.push(teamPlayer);
            }
        }
        if (teamPlayer.lineUp == 2) {
            awayLineUpBackupTeamPlayers.push(teamPlayer);
        }
    }
    userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore = userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore < 0 ? 0 : userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore;
    userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore = userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore < 0 ? 0 : userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore;
    var eclipseSeconds = 0;
    var halfTimeSeconds = 2700;
    while (halfTimeSeconds > eclipseSeconds) {
        eclipseSeconds += 30 + getRandomInteger(300);
        if (getTeamPowerInPlay(homeTeamPlayers) * getRandomInteger(100) / getTeamPowerInPlay(awayTeamPlayers) > 50) {
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 主队发起进攻<br/>");
            if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == homeTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, 0, userTeam, (1 + parseFloat(chairmanHome.exp) / 100), 1);
            } else if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == awayTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, 0, userTeam, 1, (1 + parseFloat(chairmanHome.exp) / 100));
            } else {
                teamAttack(eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, 0, userTeam, 1, 1);
            }
        } else {
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 客队发起进攻<br/>");
            if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == homeTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, currentMatch, 1, userTeam, 1, (1 + parseFloat(chairmanHome.exp) / 100));
            } else if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == awayTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, currentMatch, 1, userTeam, (1 + parseFloat(chairmanHome.exp) / 100), 1);
            } else {
                teamAttack(eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, currentMatch, 1, userTeam, 1, 1);
            }
        }
    }
    logMatch("上半场结束<br/>");
    $(".home-score-match-id-" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].id).html(
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore
    );
    $(".away-score-match-id-" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].id).html(
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore
    );
    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 半场比分是" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore + "-" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore + "<br/>");
    logMatch("中场休息会，下半场再战<br/>");
    logMatch("下半场易边再战<br/>");
    var halfTimeSeconds = 5400;
    while (halfTimeSeconds > eclipseSeconds) {
        eclipseSeconds += 30 + getRandomInteger(150);
        if (getTeamPowerInPlay(homeTeamPlayers) * getRandomInteger(100) / getTeamPowerInPlay(awayTeamPlayers) > 50) {
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 主队发起进攻<br/>");
            if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == homeTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, 0, userTeam, (1 + parseFloat(chairmanHome.exp) / 100), 1);
            } else if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == awayTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, 0, userTeam, 1, (1 + parseFloat(chairmanHome.exp) / 100));
            } else {
                teamAttack(eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, 0, userTeam, 1, 1);
            }
        } else {
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 客队发起进攻<br/>");
            if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == homeTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, currentMatch, 1, userTeam, 1, (1 + parseFloat(chairmanHome.exp) / 100));
            } else if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.id == awayTeam.teamInfo.id) {
                teamAttack(eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, currentMatch, 1, userTeam, (1 + parseFloat(chairmanHome.exp) / 100), 1);
            } else {
                teamAttack(eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, currentMatch, 1, userTeam, 1, 1);
            }
        }
    }
    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 主裁判一声哨响<br/>");
    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class=\"class-span-match-description-score\">比赛结束最终比分是" +
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore + "-" +
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore + "</span><br/>");
    $(".class-div-match-speak").prepend(logMatchMessage);
    $(".home-score-match-id-" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].id).html(
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore
    );
    $(".away-score-match-id-" + userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].id).html(
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore
    );
    //writeThisMatchToBodyHtml(userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].id);
    setTeamInfoWinDrawLosePointsScoreWinScoreLoseScoreNetGames(userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex], homeTeam, awayTeam);
    //发放奖金
    setTeamWinPrizeAndPlayerMoneyAndPlayerHappy(userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex], homeTeam, awayTeam);
    //结算假赛
    setCurrentFakeResult(userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex], homeTeam, awayTeam);
    policeCheck(homeTeam);
    policeCheck(awayTeam);
    updateOtherInformation(userTeam);
    clearCurrentMatch(userTeam);
    updateUserTeamInThisPage(userTeam);
    classButtonSaveGameClick();
    return;
}

var clearCurrentMatch = function (userTeam) {
    userTeam.currentMatch == undefined;
}

var clearBuyPlayerCache = function () {
    removeGamePositionBuyPlayers("buy_players_position_0");
    removeGamePositionBuyPlayers("buy_players_position_1");
    removeGamePositionBuyPlayers("buy_players_position_2");
    removeGamePositionBuyPlayers("buy_players_position_3");
}

var updateOtherInformation = function (userTeam) {
    getOtherMatchResult(userTeam);
    payPlayerSalary(userTeam);
    setFansPay(userTeam);
    buyTeamStadiumCapacityTrainHospitalTrainPlayerHospitalPlayerChangeBankInfo(userTeam);
    sortTeamRank(userTeam);
    return;
}

var teamAttack = function (eclipseSeconds, attackTeamGk, defenceTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, currentMatch, attackWay, userTeam, homeIncreasePercent, awayIncreasePercent) {
    if (userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore == -1) {
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore = 0;
    }
    if (userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore == -1) {
        userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore = 0;
    }
    var match = userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex];
    var startAttackPlayer = homeLineUpTeamPlayers[getRandomInteger(homeLineUpTeamPlayers.length)];
    if (startAttackPlayer != undefined) {
        eclipseSeconds += 1;
        logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 这次进攻由" +
            "" +
            getHomeOrAway(attackWay, 0) +
            " <span class='class-span-play-game-attack-player' " +
            "playerId='" + startAttackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
            " onclick='showThisMatchPlayer(this)'" +
            " >[" + startAttackPlayer.name + "]</span>" +
            " 发起<br/>");
        var offensive = getRandomInteger(startAttackPlayer.offensive);
        var attackPlayers = [];
        for (var i = 0; i < homeLineUpTeamPlayers.length; i++) {
            var homeLineUpTeamPlayer = homeLineUpTeamPlayers[i];
            if (getRandomInteger(homeLineUpTeamPlayer.offensive) * homeIncreasePercent > offensive) {
                if (startAttackPlayer.id != homeLineUpTeamPlayer.id) {
                    if (homeLineUpTeamPlayer.recoverInjure == 0) {
                        attackPlayers.push(homeLineUpTeamPlayer);
                    }
                }
            }
        }
        if (attackPlayers.length == 0) {
            eclipseSeconds += 1;
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 没有" +
                getHomeOrAway(attackWay, 0) +
                "队友来参与进攻！<br/>");
        } else {
            var playerNames = "";
            for (var i = 0; i < attackPlayers.length; i++) {
                playerNames += playerNames == "" ?
                    " <span class='class-span-play-game-attack-player' " +
                    "playerId='" + attackPlayers[i].id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    " onclick='showThisMatchPlayer(this)' >[" + attackPlayers[i].name + "]</span>"
                    :
                    ", " +
                    " <span class='class-span-play-game-attack-player'" +
                    "playerId='" + attackPlayers[i].id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    "onclick='showThisMatchPlayer(this)' >[" + attackPlayers[i].name + "]</span>"
            }
            eclipseSeconds += 1;
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " " + playerNames + "参与了这次" +
                getHomeOrAway(attackWay, 0) +
                "进攻！<br/>");
        }
        attackPlayers.push(startAttackPlayer);
        var startDefencePlayer = awayLineUpTeamPlayers[getRandomInteger(awayLineUpTeamPlayers.length)];
        var defencePlayers = [];
        if (startDefencePlayer != undefined) {
            var defensive = getRandomInteger(startDefencePlayer.defensive);
            for (var i = 0; i < awayLineUpTeamPlayers.length; i++) {
                var awayLineUpTeamPlayer = awayLineUpTeamPlayers[i];
                if (getRandomInteger(awayLineUpTeamPlayer.defensive) * awayIncreasePercent > defensive) {
                    if (startDefencePlayer.id != awayLineUpTeamPlayer.id) {
                        if (awayLineUpTeamPlayer.recoverInjure == 0) {
                            defencePlayers.push(awayLineUpTeamPlayer);
                        }
                    }
                }
            }
            defencePlayers.push(startDefencePlayer);
            var keepAttackPlayer = undefined;
            while (attackPlayers.length > 0 && defencePlayers.length > 0) {
                var attackPlayer = undefined
                if (keepAttackPlayer == undefined) {
                    var number = getRandomInteger(attackPlayers.length);
                    attackPlayer = attackPlayers[number];
                    attackPlayers.splice(number, 1);
                } else {
                    attackPlayer = keepAttackPlayer;
                }
                eclipseSeconds += 1;
                logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                    "" +
                    getHomeOrAway(attackWay, 0) +
                    " <span class='class-span-play-game-attack-player' " +
                    "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    " onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 接到了传球！<br/>");
                spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                var defenceNumber = getRandomInteger(defencePlayers.length);
                var defencePlayer = defencePlayers[defenceNumber];
                defencePlayers.splice(defenceNumber, 1);
                eclipseSeconds += 1;
                logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                    "" +
                    getHomeOrAway(attackWay, 1) +
                    " <span class='class-span-play-game-defence-player' " +
                    "playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    " onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span> 在防守他！<br/>");
                eclipseSeconds += 1;
                logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' " +
                    "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    " onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                    "]</span> 试图带球突破 " +
                    getHomeOrAway(attackWay, 1) +
                    "<span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                    "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span>！<br/>");
                //过人VS逼抢
                if (getRandomInteger(attackPlayer.dribble) * homeIncreasePercent + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match) >= getRandomInteger(defencePlayer.closingDown) * awayIncreasePercent) {
                    eclipseSeconds += 1;
                    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                        "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                        "]</span> 带球突破了" +
                        getHomeOrAway(attackWay, 1) +
                        " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span>！<br/>");
                    keepAttackPlayer = attackPlayer;
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                } else {
                    keepAttackPlayer = undefined;
                    eclipseSeconds += 1;
                    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                        "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                        "]</span> 突破失败了！<br/>");
                    //进攻VS防守
                    if (getRandomInteger(attackPlayer.attack) * homeIncreasePercent + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match) >= getRandomInteger(defencePlayer.defence) * awayIncreasePercent) {
                        eclipseSeconds += 1;
                        logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                            "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 还好还没有失去控制！<br/>");
                        eclipseSeconds += 1;
                        logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                            "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 试图传球！<br/>");
                        //传球VS拦截
                        if (getRandomInteger(attackPlayer.pass) * homeIncreasePercent + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match) >= getRandomInteger(defencePlayer.intercept) * awayIncreasePercent) {
                            eclipseSeconds += 1;
                            logMatch(
                                getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                                "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                                "]</span> 传球了！<br/>");
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                        } else {
                            eclipseSeconds += 1;
                            logMatch(
                                getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                                "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                                "]</span> 球被" +
                                getHomeOrAway(attackWay, 1) +
                                " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span> 抢断了！<br/>");
                            attackPlayers = [];
                            defencePlayers.push(defencePlayer);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                        }
                    } else {
                        eclipseSeconds += 1;
                        logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                            "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 球被" +
                            getHomeOrAway(attackWay, 1) +
                            " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span> 抢断了！<br/>");
                        attackPlayers = [];
                        defencePlayers.push(defencePlayer);
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                    }
                }
            }
        }
        if (attackPlayers.length == 0 && keepAttackPlayer == undefined) {
            eclipseSeconds += 1;
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 本次进攻失败！<br/>");
        } else if (defencePlayers.length == 0) {
            eclipseSeconds += 1;
            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 面前没有一个防守球员了！<br/>");
            var attackPlayer = keepAttackPlayer;
            if (attackPlayer == undefined) {
            } else {
                attackPlayers.push(attackPlayer);
                var maxShoot = 0;
                var maxIndex = 0;
                var currentIndex = 0;
                for (var i = 0; i < attackPlayers.length; i++) {
                    if (attackPlayers[i].shoot > maxShoot) {
                        maxShoot = attackPlayers[i].shoot;
                        maxIndex = i;
                    }
                    if (attackPlayer.id == attackPlayers[i].id) {
                        currentIndex = i;
                    }
                }
                if (getRandomInteger(100) > 50) {
                    attackPlayer = attackPlayers[maxIndex];
                    attackPlayers.splice(maxIndex, 1);
                    eclipseSeconds += 1;
                    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " 把球传给了" +
                        getHomeOrAway(attackWay, 0) +
                        "进攻球员中射门最好的 " +
                        "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >" +
                        "[" + attackPlayer.name + "]" +
                        "</span>" +
                        " ！<br/>");
                } else {
                    attackPlayers.splice(currentIndex, 1);
                    eclipseSeconds += 1;
                    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                        getHomeOrAway(attackWay, 0) +
                        "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >" +
                        "[" + attackPlayer.name + "]" +
                        "</span>" +
                        "决定自己射门 ！<br/>");
                }
                while (attackPlayer != undefined) {
                    eclipseSeconds += 1;
                    logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                        "<span class='class-span-match-description-face'>" + getHomeOrAway(attackWay, 0) + "" +
                        "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >" +
                        "[" + attackPlayer.name + "]</span> 面对" +
                        getHomeOrAway(attackWay, 1) +
                        "门将 " +
                        "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >" +
                        "[" + defenceTeamGk.name + "]" +
                        "</span>" +
                        " 了！</span><br/>");
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                    //射门VS封堵
                    if ((getRandomInteger(attackPlayer.shoot) * homeIncreasePercent + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match)) > getRandomInteger(defenceTeamGk.block) * awayIncreasePercent) {
                        eclipseSeconds += 1;
                        logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "<span class='class-span-play-game-attack-player' " +
                            "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 漂亮的射门！</span><br/>");
                        //射门VS守门
                        if ((getRandomInteger(attackPlayer.shoot) + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match)) > getRandomInteger(defenceTeamGk.goalKeeping)) {
                            eclipseSeconds += 1;
                            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "<span class='class-span-play-game-attack-player' " +
                                "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                                "]</span> 的射门冲破了" +
                                getHomeOrAway(attackWay, 1) +
                                "门将 " +
                                "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >" +
                                "[" + defenceTeamGk.name + "]" +
                                "</span>" +
                                " 的五指关，球进了！" +
                                "</span><br/>");
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                            if (attackWay == 0) {
                                userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore += 1;
                            } else {
                                userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore += 1;
                            }
                            eclipseSeconds += 1;
                            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-score'>场上比分是 " +
                                userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].homeScore + " - " +
                                userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches[userTeam.currentMatch.matchIndex].awayScore + "！</span><br/>");
                            return;
                        } else {
                            eclipseSeconds += 1;
                            logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "<span class='class-span-play-game-attack-player' " +
                                "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                                "]</span> 的射门被" +
                                getHomeOrAway(attackWay, 1) +
                                "门将 " +
                                "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >" +
                                "[" + defenceTeamGk.name + "]" +
                                "</span>" +
                                " 扑了出去，有补射的机会吗？" +
                                "</span><br/>");
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                            if (attackPlayers.length > 0) {
                                var number = getRandomInteger(attackPlayers.length);
                                attackPlayer = attackPlayers[number];
                                attackPlayers.splice(number, 1);
                                eclipseSeconds += 1;
                                logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "<span class='class-span-play-game-attack-player' " +
                                    "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" +
                                    attackPlayer.name +
                                    "]</span> 拿到了补射的机会了！</span><br/>");
                                spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            } else {
                                eclipseSeconds += 1;
                                logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-face'>没有机会了，" +
                                    getHomeOrAway(attackWay, 1) +
                                    "防守球员拿到了球</span><br/>");
                                attackPlayer = undefined;
                                attackPlayers = [];
                                spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                            }
                        }
                    } else {
                        eclipseSeconds += 1;
                        logMatch(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-match-description-face'>" + getHomeOrAway(attackWay, 0) + "<span class='class-span-play-game-attack-player' " +
                            "playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 射门，被" +
                            getHomeOrAway(attackWay, 1) +
                            "门将 " +
                            "" +
                            "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >" +
                            "[" + defenceTeamGk.name + "]" +
                            "</span>" +
                            " 扑倒了皮球， 把球紧紧抱在了怀里！</span><br/>");
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                        attackPlayer = undefined;
                        attackPlayers = [];
                    }
                }
            }
        }
    }
    return;
}

var getEclipseMinutesAndSeconds = function (eclipseSeconds) {
    var eclipseMinutes = Math.floor(eclipseSeconds / 60);
    var eclipseSecondsOnly = eclipseSeconds - eclipseMinutes * 60;
    return (eclipseMinutes < 10 ? "0" + eclipseMinutes : eclipseMinutes) + ":" + (eclipseSecondsOnly < 10 ? "0" + eclipseSecondsOnly : eclipseSecondsOnly) + "'";
}

var getHomeOrAway = function (attackWay, isHome) {
    return (attackWay == isHome ? "主" : "客") + "队的";
}

var getSpendStamina = function (player) {
    return (player.recoverStamina == undefined ? 0 : player.recoverStamina)
}

var plusHappyPointsInMatchAttack = function (attackPlayer, defendPlayer, match) {
    var totalStaminaHealth =
        attackPlayer.stamina + attackPlayer.health * 2 - getSpendStamina(attackPlayer) +
        (defendPlayer == undefined ? 0 : defendPlayer.stamina + defendPlayer.health * 2 - getSpendStamina(defendPlayer));
    var happyAttack =
        attackPlayer.happy * 2 * (attackPlayer.stamina + attackPlayer.health * 2 - getSpendStamina(attackPlayer)) / totalStaminaHealth;
    var happyDefend = defendPlayer == undefined ? 0 :
        defendPlayer.happy * 2 * (defendPlayer.stamina + defendPlayer.health * 2 - getSpendStamina(defendPlayer)) / totalStaminaHealth;
    var level = match.level;
    var result = getRandomInteger((happyAttack - happyDefend) * level);
    if (result > 1) {
        result = 1;
    }
    if (result < -1) {
        result = -1;
    }
    return result;
}

var spendStamina = function (homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match) {
    if (attackPlayer == undefined) {
        var cc = 1;
        return 0;
    }
    if (attackPlayer.recoverStamina == undefined) {
        attackPlayer.recoverStamina = 0;
    }
    attackPlayer.recoverStamina += match.level / 2.5;
    if (attackPlayer.recoverInjure == 0) {
        if (attackPlayer.recoverStamina > attackPlayer.stamina + attackPlayer.health) {
            attackPlayer.recoverInjure = 1 + getRandomInteger(TEAM_COUNT_DEFAULT_VALUE * 2 - 2);
            logMatch(
                getHomeOrAway(attackWay, 0) + "球员 " +
                "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                "' onclick='showThisMatchPlayer(this)' >" +
                "[" + attackPlayer.name + "]" +
                "</span> 受伤了，需要治疗" +
                attackPlayer.recoverInjure + "周<br/>");
            //赛中球员受伤，要自动更换球员。
            //受伤了不参加进攻
            if (attackWay == 0) {
                var becomeLineUpTeamPlayer = undefined;
                if (match.homeChangeCount == undefined || match.homeChangeCount < 3) {
                    var i = 0;
                    for (var i = 0; i < homeLineUpBackupTeamPlayers.length; i++) {
                        var homeLineUpBackupTeamPlayer = homeLineUpBackupTeamPlayers[i];
                        if (homeLineUpBackupTeamPlayer.becomeLineup != 1) {
                            if (homeLineUpBackupTeamPlayer.position == attackPlayer.position) {
                                homeLineUpBackupTeamPlayer.becomeLineup = 1;
                                becomeLineUpTeamPlayer = homeLineUpBackupTeamPlayer;
                                break;
                            }
                        }
                    }
                    if (becomeLineUpTeamPlayer == undefined) {
                        for (var i = 0; i < homeLineUpBackupTeamPlayers.length; i++) {
                            var homeLineUpBackupTeamPlayer = homeLineUpBackupTeamPlayers[i];
                            if (homeLineUpBackupTeamPlayer.becomeLineup != 1) {
                                if (homeLineUpBackupTeamPlayer.position != 0) {
                                    homeLineUpBackupTeamPlayer.becomeLineup = 1;
                                    becomeLineUpTeamPlayer = homeLineUpBackupTeamPlayer;
                                    break;
                                }
                            }
                        }
                    }
                    if (becomeLineUpTeamPlayer != undefined) {
                        becomeLineUpTeamPlayer.becomeLineup = undefined;
                        homeLineUpTeamPlayers.push(becomeLineUpTeamPlayer);
                        logMatch(
                            getHomeOrAway(attackWay, 0) + "主教练用" + PLAYER_POSITIONS[becomeLineUpTeamPlayer.position] +
                            "<span class='class-span-play-game-attack-player' playerId='" + becomeLineUpTeamPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >" +
                            "[" + becomeLineUpTeamPlayer.name + "]" +
                            "</span>换下了受伤的" + PLAYER_POSITIONS[attackPlayer.position] +
                            "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >" +
                            "[" + attackPlayer.name + "]</span>" +
                            "<br/>");
                        //删除原有受伤的球员
                        for (var i = 0; i < homeLineUpTeamPlayers.length; i++) {
                            if (attackPlayer.id == homeLineUpTeamPlayers[i].id) {
                                homeLineUpTeamPlayers.splice(i, 1);
                                break;
                            }
                        }
                        match.homeChangeCount == (match.homeChangeCount == undefined ? 1 : match.homeChangeCount + 1);
                    }
                }
            } else if (attackWay == 1) {
                var becomeLineUpTeamPlayer = undefined;
                if (match.awayChangeCount == undefined || match.awayChangeCount < 3) {
                    for (var i = 0; i < awayLineUpBackupTeamPlayers.length; i++) {
                        var awayLineUpBackupTeamPlayer = awayLineUpBackupTeamPlayers[i];
                        if (awayLineUpBackupTeamPlayer.becomeLineup != 1) {
                            if (awayLineUpBackupTeamPlayer.position == attackPlayer.position) {
                                awayLineUpBackupTeamPlayer.becomeLineup = 1;
                                becomeLineUpTeamPlayer = awayLineUpBackupTeamPlayer;
                                break;
                            }
                        }
                    }
                    if (becomeLineUpTeamPlayer == undefined) {
                        for (var i = 0; i < awayLineUpBackupTeamPlayers.length; i++) {
                            var awayLineUpBackupTeamPlayer = awayLineUpBackupTeamPlayers[i];
                            if (awayLineUpBackupTeamPlayer.becomeLineup != 1) {
                                if (awayLineUpBackupTeamPlayer.position != 0) {
                                    awayLineUpBackupTeamPlayer.becomeLineup = 1;
                                    becomeLineUpTeamPlayer = awayLineUpBackupTeamPlayer;
                                    break;
                                }
                            }
                        }
                    }
                    if (becomeLineUpTeamPlayer != undefined) {
                        becomeLineUpTeamPlayer.becomeLineup = undefined;
                        awayLineUpTeamPlayers.push(becomeLineUpTeamPlayer);
                        logMatch(
                            getHomeOrAway(attackWay, 0) + "主教练用" + PLAYER_POSITIONS[becomeLineUpTeamPlayer.position] +
                            "<span class='class-span-play-game-attack-player' playerId='" + becomeLineUpTeamPlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >" +
                            "[" + becomeLineUpTeamPlayer.name + "]" +
                            "</span>换下了受伤的" + PLAYER_POSITIONS[attackPlayer.position] +
                            "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >" +
                            "[" + attackPlayer.name + "]</span>" +
                            "<br/>");
                        //删除原有受伤的球员
                        for (var i = 0; i < awayLineUpTeamPlayers.length; i++) {
                            if (attackPlayer.id == awayLineUpTeamPlayers[i].id) {
                                awayLineUpTeamPlayers.splice(i, 1);
                                break;
                            }
                        }
                        match.awayChangeCount == (match.awayChangeCount == undefined ? 1 : match.awayChangeCount + 1);
                    }
                }
            }
        }
    }
    return;
}

var logMatchMessage = "";

var logMatch = function (message) {
    logMatchMessage += message;
    return;
}

var getHomeOrAwayTeamLineUpHtml = function (matchTeam, teamIsHomeOrAway) {
    var teamPlayers = matchTeam.teamPlayers;
    var userTeam = getPageUserTeam();
    var mainHtml = "";
    var gk = [];
    var cb = [];
    var mf = [];
    var fw = [];
    var backup = [];
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.lineUp == 1) {
            if (teamPlayer.position == 0) {
                gk.push(teamPlayer);
            }
            if (teamPlayer.position == 1) {
                cb.push(teamPlayer);
            }
            if (teamPlayer.position == 2) {
                mf.push(teamPlayer);
            }
            if (teamPlayer.position == 3) {
                fw.push(teamPlayer);
            }
        } else if (teamPlayer.lineUp == 2) {
            backup.push(teamPlayer);
        }
    }
    mainHtml += "<table class='class-table-100-percent-width class-table-line-up-count'>";
    mainHtml += "<tr><td>" + teamIsHomeOrAway + "队出场人数 : " + getLineUpCount(teamPlayers, 1) + "/11，替补人数 : " + getLineUpCount(teamPlayers, 2) + "/5" + "</td></tr>";
    mainHtml += "</table>";
    mainHtml += "<table class='class-table-100-percent-width  class-table-line-up-" +
        "" + (teamIsHomeOrAway == "客" ? "away" : "home") +
        "'>";
    mainHtml += "<tr><td>阵型</td><td>" + cb.length + "-" + mf.length + "-" + fw.length + "</td></tr>";
    if (teamIsHomeOrAway == "客") {
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>前锋</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(fw, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>中场</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(mf, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>后卫</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(cb, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>门将</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(gk, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td>替补</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(backup, matchTeam) + "</td></tr>";
    } else {
        mainHtml += "<tr><td>替补</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(backup, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>门将</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(gk, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>后卫</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(cb, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>中场</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(mf, matchTeam) + "</td></tr>";
        mainHtml += "<tr><td class='" + (userTeam.config.teamId == matchTeam.teamInfo.id ? "class-td-button' onclick='classButtonUserTeamClick();" : "") + "'>前锋</td><td class='class-td-lineup'>" + getPlayerLineUpHtml(fw, matchTeam) + "</td></tr>";
    }
    mainHtml += "</table>";
    return mainHtml;
}

var getOtherMatchResult = function (userTeam) {
    getOtherMatchResultCurrentUpperLower(userTeam.currentTeams, userTeam.currentMatchSchedules[userTeam.currentMatch.scheduleIndex].matches);
    getOtherMatchResultCurrentUpperLower(userTeam.upperTeams, userTeam.upperMatchSchedules[userTeam.currentMatch.scheduleIndex].matches);
    if (userTeam.lowerTeams != undefined) {
        getOtherMatchResultCurrentUpperLower(userTeam.lowerTeams, userTeam.lowerMatchSchedules[userTeam.currentMatch.scheduleIndex].matches);
    }
    return;
}

var getOtherMatchResultCurrentUpperLower = function (currentTeams, matches) {
    if (currentTeams == undefined) {
        return;
    }
    for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        var homeTeamId = match.homeTeamId;
        var homeTeam = getTeamFromId(currentTeams, homeTeamId);
        var awayTeamId = match.awayTeamId;
        var awayTeam = getTeamFromId(currentTeams, awayTeamId);
        startOtherMatch(homeTeam, awayTeam, match);
        //结算假赛
        setCurrentFakeResult(match, homeTeam, awayTeam);
    }
    return;
}

var startOtherMatch = function (homeTeam, awayTeam, match) {
    //如果有比分，说明已经比赛过了。
    if (match.homeScore > -1) {
        return;
    } else {
        match.homeScore = 0;
        match.awayScore = 0;
    }
    var logOtherMatch = [];
    // logOtherMatch.push("00:00' 欢迎来观看这场" + match.level + "联赛第" + match.games + "轮的比赛 : " + match.homeTeamName + " vs " + match.awayTeamName + "！<br/>");
    // logOtherMatch.push("00:00' 比赛开始了<br/>");
    // if (getRandomInteger(100) >= 50) {
    //     logOtherMatch.push("00:00' 主队开球<br/>");
    // } else {
    //     logOtherMatch.push("00:00' 客队开球<br/>");
    // }
    // var homeTeamPlayers = homeTeam.teamPlayers;
    // var homeLineUpTeamPlayers = [];
    // var homeLineUpBackupTeamPlayers = [];
    // var homeTeamGk = {};
    // for (var i = 0; i < homeTeamPlayers.length; i++) {
    //     var teamPlayer = homeTeamPlayers[i];
    //     if (teamPlayer.lineUp == 1) {
    //         if (teamPlayer.position == 0) {
    //             homeTeamGk = teamPlayer;
    //         } else {
    //             homeLineUpTeamPlayers.push(teamPlayer);
    //         }
    //     }
    //     if (teamPlayer.lineUp == 2) {
    //         homeLineUpBackupTeamPlayers.push(teamPlayer);
    //     }
    // }
    // var awayTeamPlayers = awayTeam.teamPlayers;
    // var awayLineUpTeamPlayers = [];
    // var awayLineUpBackupTeamPlayers = [];
    // var awayTeamGk = {};
    // for (var i = 0; i < awayTeamPlayers.length; i++) {
    //     var teamPlayer = awayTeamPlayers[i];
    //     if (teamPlayer.lineUp == 1) {
    //         if (teamPlayer.position == 0) {
    //             awayTeamGk = teamPlayer;
    //         } else {
    //             awayLineUpTeamPlayers.push(teamPlayer);
    //         }
    //     }
    //     if (teamPlayer.lineUp == 2) {
    //         awayLineUpBackupTeamPlayers.push(teamPlayer);
    //     }
    // }
    var eclipseSeconds = 0;
    var halfTimeSeconds = 2700;
    // while (halfTimeSeconds > eclipseSeconds) {
    //     eclipseSeconds += 31 + getRandomInteger(30);
    //     if (getTeamPowerInPlay(homeTeamPlayers) * getRandomInteger(100) / getTeamPowerInPlay(awayTeamPlayers) > 50) {
    //         logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 主队发起进攻<br/>");
    //         otherTeamAttack(logOtherMatch, eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, match, 0);
    //     } else {
    //         logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 客队发起进攻<br/>");
    //         otherTeamAttack(logOtherMatch, eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, match, 1);
    //     }
    // }
    // logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " + "上半场结束<br/>");
    // logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 半场比分是" + match.homeScore + "-" + match.awayScore + "<br/>");
    // logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " + "中场休息会，下半场再战<br/>");
    // logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " + "下半场易边再战<br/>");
    var halfTimeSeconds = 5400;
    // eclipseSeconds = 2700;
    // while (halfTimeSeconds > eclipseSeconds) {
    //     eclipseSeconds += 31 + getRandomInteger(60);
    //     if (getTeamPowerInPlay(homeTeamPlayers) * getRandomInteger(100) / getTeamPowerInPlay(awayTeamPlayers) > 50) {
    //         logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 主队发起进攻<br/>");
    //         otherTeamAttack(logOtherMatch, eclipseSeconds, homeTeamGk, awayTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, match, 0);
    //     } else {
    //         logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 客队发起进攻<br/>");
    //         otherTeamAttack(logOtherMatch, eclipseSeconds, awayTeamGk, homeTeamGk, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, match, 1);
    //     }
    // }
    // logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 主裁判一声哨响<br/>");
    // logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class=\"class-span-match-description-score\">比赛结束最终比分是" + match.homeScore + "-" + match.awayScore + "</span><br/>");
    // writeBodyHtml(match, homeTeam, awayTeam, logOtherMatch);
    //精简其他的比赛结果
    setRandomMatchResultAccordingToPower(match, homeTeam, awayTeam);
    setTeamWinPrizeAndPlayerMoneyAndPlayerHappy(match, homeTeam, awayTeam);
    setTeamInfoWinDrawLosePointsScoreWinScoreLoseScoreNetGames(match, homeTeam, awayTeam);
    return;
}

//精简其他的比赛结果
var setRandomMatchResultAccordingToPower = function (match, homeTeam, awayTeam) {
    var homeTeamPlayers = homeTeam.teamPlayers;
    var attackPointsHome = 0;
    var attackPointsAway = 0;
    var defencePointsHome = 0;
    var defencePointsAway = 0;
    for (var i = 0; i < homeTeamPlayers.length; i++) {
        var teamPlayer = homeTeamPlayers[i];
        if (teamPlayer.lineUp == 1) {
            attackPointsHome += teamPlayer.offensive + teamPlayer.shoot + teamPlayer.pass + teamPlayer.dribble + teamPlayer.attack;
            defencePointsHome += teamPlayer.defensive + teamPlayer.defence + teamPlayer.block + teamPlayer.intercept + teamPlayer.closingDown + teamPlayer.goalKeeping;
            teamPlayer.recoverStamina += getRandomInteger(36);
            if (teamPlayer.recoverStamina > teamPlayer.stamina + teamPlayer.health) {
                teamPlayer.recoverInjure = 1 + getRandomInteger(TEAM_COUNT_DEFAULT_VALUE * 2 - 2);
            }
        }
        if (teamPlayer.lineUp == 2) {
            attackPointsHome += teamPlayer.offensive + teamPlayer.shoot + teamPlayer.pass + teamPlayer.dribble + teamPlayer.attack;
            defencePointsHome += teamPlayer.defensive + teamPlayer.defence + teamPlayer.block + teamPlayer.intercept + teamPlayer.closingDown + teamPlayer.goalKeeping;
        }
    }
    var awayTeamPlayers = awayTeam.teamPlayers;
    for (var i = 0; i < awayTeamPlayers.length; i++) {
        var teamPlayer = awayTeamPlayers[i];
        if (teamPlayer.lineUp == 1) {
            attackPointsAway += teamPlayer.offensive + teamPlayer.shoot + teamPlayer.pass + teamPlayer.dribble + teamPlayer.attack;
            defencePointsAway += teamPlayer.defensive + teamPlayer.defence + teamPlayer.block + teamPlayer.intercept + teamPlayer.closingDown + teamPlayer.goalKeeping;
            teamPlayer.recoverStamina += getRandomInteger(36);
            if (teamPlayer.recoverStamina > teamPlayer.stamina + teamPlayer.health) {
                teamPlayer.recoverInjure = 1 + getRandomInteger(TEAM_COUNT_DEFAULT_VALUE * 2 - 2);
            }
        }
        if (teamPlayer.lineUp == 2) {
            attackPointsAway += teamPlayer.offensive + teamPlayer.shoot + teamPlayer.pass + teamPlayer.dribble + teamPlayer.attack;
            defencePointsAway += teamPlayer.defensive + teamPlayer.defence + teamPlayer.block + teamPlayer.intercept + teamPlayer.closingDown + teamPlayer.goalKeeping;
        }
    }
    var homeScore = getRandomInteger(getRandomInteger(9) + attackPointsHome / defencePointsAway);
    var awayScore = getRandomInteger(getRandomInteger(9) + attackPointsAway / defencePointsHome);
    match.homeScore = homeScore;
    match.awayScore = awayScore;
}

var setTeamWinPrizeAndPlayerMoneyAndPlayerHappy = function (match, homeTeam, awayTeam) {
    if (match.homeScore > match.awayScore) {
        if (homeTeam.currentEncourages != undefined) {
            for (var i = 0; i < homeTeam.currentEncourages.length; i++) {
                var encourage = homeTeam.currentEncourages[i];
                //主队赢了，发赢球奖金，增加快乐。
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_WIN_PRIZE) {
                    homeTeam.bankInfo.money -= encourage.money;
                    for (var j = 0; j < homeTeam.teamPlayers.length; j++) {
                        homeTeam.teamPlayers[j].money += getNumberRound(encourage.money / (homeTeam.teamPlayers.length));
                        homeTeam.teamPlayers[j].happy += getWinMatchHappy();
                    }
                }
                //主队赢了，发净胜球奖金
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_NET_SCORE_PRIZE) {
                    homeTeam.bankInfo.money -= encourage.money * (match.homeScore - match.awayScore);
                    for (var j = 0; j < homeTeam.teamPlayers.length; j++) {
                        homeTeam.teamPlayers[j].money += getNumberRound(encourage.money / (homeTeam.teamPlayers.length));
                        homeTeam.teamPlayers[j].happy += getWinMatchHappy();
                    }
                }
            }
        }
        //客队输了，减少快乐
        for (var j = 0; j < awayTeam.teamPlayers.length; j++) {
            awayTeam.teamPlayers[j].happy -= getLoseMatchHappy();
            if (awayTeam.teamPlayers[j].happy < 0) {
                awayTeam.teamPlayers[j].happy = 0;
            }
        }
    } else if (match.homeScore < match.awayScore) {
        if (awayTeam.currentEncourages != undefined) {
            for (var i = 0; i < awayTeam.currentEncourages.length; i++) {
                var encourage = awayTeam.currentEncourages[i];
                //客队赢了，发赢球奖金。增加快乐
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_WIN_PRIZE) {
                    awayTeam.bankInfo.money -= encourage.money;
                    for (var j = 0; j < awayTeam.teamPlayers.length; j++) {
                        awayTeam.teamPlayers[j].money += getNumberRound(encourage.money / (awayTeam.teamPlayers.length));
                        awayTeam.teamPlayers[j].happy += getWinMatchHappy();
                    }
                }
                //客队赢了，发净胜球奖金。
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_NET_SCORE_PRIZE) {
                    awayTeam.bankInfo.money -= encourage.money * (match.awayScore - match.homeScore);
                    for (var j = 0; j < awayTeam.teamPlayers.length; j++) {
                        awayTeam.teamPlayers[j].money += getNumberRound(encourage.money / (awayTeam.teamPlayers.length));
                        awayTeam.teamPlayers[j].happy += getWinMatchHappy();
                    }
                }
            }
        }
        //主队输了，减少快乐
        for (var j = 0; j < homeTeam.teamPlayers.length; j++) {
            homeTeam.teamPlayers[j].happy -= getLoseMatchHappy();
            if (homeTeam.teamPlayers[j].happy < 0) {
                homeTeam.teamPlayers[j].happy = 0;
            }
        }
    } else {
        if (homeTeam.currentEncourages != undefined) {
            for (var i = 0; i < homeTeam.currentEncourages.length; i++) {
                var encourage = homeTeam.currentEncourages[i];
                //主队打平了，发赢球奖金。
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_DRAW_PRIZE) {
                    homeTeam.bankInfo.money += encourage.money;
                    for (var j = 0; j < homeTeam.teamPlayers.length; j++) {
                        homeTeam.teamPlayers[j].money -= getNumberRound(encourage.money / (homeTeam.teamPlayers.length));
                    }
                }
            }
        }
        if (awayTeam.currentEncourages != undefined) {
            for (var i = 0; i < awayTeam.currentEncourages.length; i++) {
                var encourage = awayTeam.currentEncourages[i];
                //客队打平了，发赢球奖金。
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_DRAW_PRIZE) {
                    awayTeam.bankInfo.money -= encourage.money;
                    for (var j = 0; j < awayTeam.teamPlayers.length; j++) {
                        awayTeam.teamPlayers[j].money += getNumberRound(encourage.money / (awayTeam.teamPlayers.length));
                    }
                }
            }
        }
    }
    if (match.homeScore == 0) {
        //发客队零封奖金
        if (awayTeam.currentEncourages != undefined) {
            for (var i = 0; i < awayTeam.currentEncourages.length; i++) {
                var encourage = awayTeam.currentEncourages[i];
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_OPPOSITE_SCORE_ZERO_PRIZE) {
                    awayTeam.bankInfo.money -= encourage.money;
                    for (var j = 0; j < awayTeam.teamPlayers.length; j++) {
                        awayTeam.teamPlayers[j].money += getNumberRound(encourage.money / (awayTeam.teamPlayers.length));
                    }
                }
            }
        }
    }
    if (match.awayScore == 0) {
        //发主队零封奖金
        if (homeTeam.currentEncourages != undefined) {
            for (var i = 0; i < homeTeam.currentEncourages.length; i++) {
                var encourage = homeTeam.currentEncourages[i];
                if (encourage.type == ENCOURAGE_TYPE_BEFORE_MATCH_OPPOSITE_SCORE_ZERO_PRIZE) {
                    homeTeam.bankInfo.money -= encourage.money;
                    for (var j = 0; j < homeTeam.teamPlayers.length; j++) {
                        homeTeam.teamPlayers[j].money += getNumberRound(encourage.money / (homeTeam.teamPlayers.length));
                    }
                }
            }
        }
    }
}

var writeThisMatchToBodyHtml = function (matchId) {
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-match class-div-popout-match-id-" + matchId + "' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:75px;display:none;width:1236px;height:756px;overflow: hidden;background-color:#000000;border-radius:6px;' >";
    mainHtml += "<table class='class-table-100-percent-width' onclick='closePopoutMatch()'>";
    mainHtml += "<tr><td></td>" +
        "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<table class='class-table-team-lineup' style='float:left;width:50%;height:716px;'>" + $(".class-table-team-lineup").html() + "</table>";
    mainHtml += "<table class='class-table-team-play-content class-table-50-percent-width' style='float:left;height:716px;'>" +
        $(".class-table-team-play-content").html()
    "</table>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var writeBodyHtml = function (match, homeTeam, awayTeam, logOtherMatch) {
    var offset = $(".class-div-main").offset();
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-match class-div-popout-match-id-" + match.id + "' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:75px;display:none;width:1236px;height:756px;overflow: hidden;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table class='class-table-100-percent-width' onclick='closePopoutMatch()'>";
    mainHtml += "<tr><td></td>" +
        "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr><td style='width:50%;vertical-align: top;'>"
    mainHtml += "<table class='class-table-100-percent-width'>";
    var userTeam = getPageUserTeam();
    mainHtml += "<tr>" +
        "<td>" + userTeam.config.season + "赛季 </td>" +
        "<td>" + match.level + "级联赛</td>" +
        "<td>第" + match.games + "轮比赛</td>" +
        "<td" +
        " onclick=\"showThisTeam(this, '" + match.homeTeamId + "'," +
        (match.level > userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 1 : (match.level < userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 2 : 0)) +
        ")\"" +
        ">[" + match.homeTeamName + "]</td>" +
        "<td> vs </td>" +
        "<td" +
        " onclick=\"showThisTeam(this, '" + match.awayTeamId + "'," +
        (match.level > userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 1 : (match.level < userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level ? 2 : 0)) +
        ")\"" +
        ">[" + match.awayTeamName + "]</td>" +
        // "<td>亚洲盘口是</td>" +
        // "<td>" + match.homeAsiaOdds + "</td>" +
        // "<td>" + match.handicapAsiaOdds + "</td>" +
        // "<td>" + match.awayAsiaOdds + "</td>" +
        "<td class=' class-td-button-start-this-match'></td>" +
        "</tr>";
    //最终比分要展示
    mainHtml += "<tr>" +
        "<td ></td>" +
        "<td ></td>" +
        "<td >比分牌</td>" +
        "<td style='text-align:center;' class='home-score-match-id-" + match.id + "'>" + match.homeScore + "</td>" +
        "<td style='text-align:center;'> - </td>" +
        "<td style='text-align:center;' class='away-score-match-id-" + match.id + "'>" + match.awayScore + "</td>" +
        // "<td>投注量是</td>" +
        // "<td>" + match.betHomeMoney + "</td>" +
        // "<td></td>" +
        // "<td>" + match.betAwayMoney + "</td>" +
        "<td></td>" +
        "</tr>";
    mainHtml += "</table>";
    mainHtml += getStadiumHtml(homeTeam);
    mainHtml += getHomeOrAwayTeamLineUpHtml(homeTeam, "主");
    mainHtml += getHomeOrAwayTeamLineUpHtml(awayTeam, "客");
    mainHtml += "</td><td style='width:50%;vertical-align: top;'>" +
        "<div style='height:656px;width:100%;overflow: scroll;border-radius:6px;'>"
    mainHtml += "<table class='class-table-100-percent-width'>";
    for (var i = 0; i < logOtherMatch.length; i++) {
        mainHtml += "<tr><td>" + logOtherMatch[i] + "</td></tr>";
    }
    mainHtml += "</table></div>";
    mainHtml += "</td></tr>";
    mainHtml += "</table>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var otherTeamAttack = function (logOtherMatch, eclipseSeconds, attackTeamGk, defenceTeamGk, homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, match, attackWay) {
    var startAttackPlayer = homeLineUpTeamPlayers[getRandomInteger(homeLineUpTeamPlayers.length)];
    if (startAttackPlayer != undefined) {
        eclipseSeconds += 1;
        logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 这次进攻由" +
            "" +
            getHomeOrAway(attackWay, 0) +
            " <span class='class-span-play-game-attack-player' " +
            "playerId='" + startAttackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
            " onclick='showThisMatchPlayer(this)' >[" + startAttackPlayer.name + "]</span>" +
            " 发起<br/>");
        var offensive = getRandomInteger(startAttackPlayer.offensive);
        var attackPlayers = [];
        for (var i = 0; i < homeLineUpTeamPlayers.length; i++) {
            var homeLineUpTeamPlayer = homeLineUpTeamPlayers[i];
            if (getRandomInteger(homeLineUpTeamPlayer.offensive) > offensive) {
                if (startAttackPlayer.id != homeLineUpTeamPlayer.id) {
                    if (homeLineUpTeamPlayer.recoverInjure == 0) {
                        attackPlayers.push(homeLineUpTeamPlayer);
                    }
                }
            }
        }
        if (attackPlayers.length == 0) {
            eclipseSeconds += 1;
            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 没有" +
                getHomeOrAway(attackWay, 0) +
                "队友来参与进攻！<br/>");
        } else {
            var playerNames = "";
            for (var i = 0; i < attackPlayers.length; i++) {
                playerNames += playerNames == "" ?
                    " <span class='class-span-play-game-attack-player' " +
                    "playerId='" + attackPlayers[i].id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    " onclick='showThisMatchPlayer(this)' >[" + attackPlayers[i].name + "]</span>"
                    :
                    ", " +
                    " <span class='class-span-play-game-attack-player' " +
                    "playerId='" + attackPlayers[i].id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level + "'" +
                    " onclick='showThisMatchPlayer(this)' >[" + attackPlayers[i].name + "]</span>"
                ;
            }
            eclipseSeconds += 1;
            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " + playerNames + "参与了这次" +
                getHomeOrAway(attackWay, 0) +
                "进攻！<br/>");
        }
        attackPlayers.push(startAttackPlayer);
        var startDefencePlayer = awayLineUpTeamPlayers[getRandomInteger(awayLineUpTeamPlayers.length)];
        var defencePlayers = [];
        if (startDefencePlayer != undefined) {
            var defensive = getRandomInteger(startDefencePlayer.defensive);
            for (var i = 0; i < awayLineUpTeamPlayers.length; i++) {
                var awayLineUpTeamPlayer = awayLineUpTeamPlayers[i];
                if (getRandomInteger(awayLineUpTeamPlayer.defensive) > defensive) {
                    if (startDefencePlayer.id != awayLineUpTeamPlayer.id) {
                        if (awayLineUpTeamPlayer.recoverInjure == 0) {
                            defencePlayers.push(awayLineUpTeamPlayer);
                        }
                    }
                }
            }
            defencePlayers.push(startDefencePlayer);
            var keepAttackPlayer = undefined;
            while (attackPlayers.length > 0 && defencePlayers.length > 0) {
                var attackPlayer = undefined
                if (keepAttackPlayer == undefined) {
                    var number = getRandomInteger(attackPlayers.length);
                    attackPlayer = attackPlayers[number];
                    attackPlayers.splice(number, 1);
                } else {
                    attackPlayer = keepAttackPlayer;
                }
                eclipseSeconds += 1;
                logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                    "" +
                    getHomeOrAway(attackWay, 0) +
                    " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                    "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 接到了传球！<br/>");
                spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                var defenceNumber = getRandomInteger(defencePlayers.length);
                var defencePlayer = defencePlayers[defenceNumber];
                defencePlayers.splice(defenceNumber, 1);
                eclipseSeconds += 1;
                logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                    "" +
                    getHomeOrAway(attackWay, 1) +
                    " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                    "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span> 在防守他！<br/>");
                eclipseSeconds += 1;
                logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                    "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                    "]</span> 试图带球突破 " +
                    getHomeOrAway(attackWay, 1) +
                    "<span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                    "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span>！<br/>");
                if (getRandomInteger(attackPlayer.dribble) + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match) >= getRandomInteger(defencePlayer.defence)) {
                    eclipseSeconds += 1;
                    logOtherMatch.push(
                        getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                        "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                        "]</span> 带球突破了" +
                        getHomeOrAway(attackWay, 1) +
                        " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span>！<br/>");
                    keepAttackPlayer = attackPlayer;
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                } else {
                    keepAttackPlayer = undefined;
                    eclipseSeconds += 1;
                    logOtherMatch.push(
                        getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                        "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                        "]</span> 突破失败了！<br/>");
                    if (getRandomInteger(attackPlayer.attack) + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match) >= getRandomInteger(defencePlayer.defence)) {
                        eclipseSeconds += 1;
                        logOtherMatch.push(
                            getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                            "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 还好还没有失去控制！<br/>");
                        eclipseSeconds += 1;
                        logOtherMatch.push(
                            getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                            "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 试图传球！<br/>");
                        if (getRandomInteger(attackPlayer.pass) + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match) >= getRandomInteger(defencePlayer.defence)) {
                            eclipseSeconds += 1;
                            logOtherMatch.push(
                                getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                                "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                                "]</span> 传球了！<br/>");
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                        } else {
                            eclipseSeconds += 1;
                            logOtherMatch.push(
                                getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                                "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                                "]</span> 球被" +
                                getHomeOrAway(attackWay, 1) +
                                " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span> 抢断了！<br/>");
                            attackPlayers = [];
                            defencePlayers.push(defencePlayer);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                        }
                    } else {
                        eclipseSeconds += 1;
                        logOtherMatch.push(
                            getEclipseMinutesAndSeconds(eclipseSeconds) + " <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) +
                            "' teamLevel='" + match.level + "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name +
                            "]</span> 球被" +
                            getHomeOrAway(attackWay, 1) +
                            " <span class='class-span-play-game-defence-player' playerId='" + defencePlayer.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >[" + defencePlayer.name + "]</span> 抢断了！<br/>");
                        attackPlayers = [];
                        defencePlayers.push(defencePlayer);
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defencePlayer, match);
                    }
                }
            }
        }
        if (attackPlayers.length == 0 && keepAttackPlayer == undefined) {
            eclipseSeconds += 1;
            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 本次进攻失败！<br/>");
        } else if (defencePlayers.length == 0) {
            eclipseSeconds += 1;
            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 面前没有一个防守球员了！<br/>");
            var attackPlayer = keepAttackPlayer;
            if (attackPlayer == undefined) {
            } else {
                attackPlayers.push(attackPlayer);
                var maxShoot = 0;
                var maxIndex = 0;
                var currentIndex = 0;
                for (var i = 0; i < attackPlayers.length; i++) {
                    if (attackPlayers[i].shoot > maxShoot) {
                        maxShoot = attackPlayers[i].shoot;
                        maxIndex = i;
                    }
                    if (attackPlayer.id == attackPlayers[i].id) {
                        currentIndex = i;
                    }
                }
                if (getRandomInteger(100) > 50) {
                    attackPlayer = attackPlayers[maxIndex];
                    attackPlayers.splice(maxIndex, 1);
                    eclipseSeconds += 1;
                    logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " 把球传给了" +
                        getHomeOrAway(attackWay, 0) +
                        "进攻球员中射门最好的 <span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> ！<br/>");
                } else {
                    attackPlayers.splice(currentIndex, 1);
                    eclipseSeconds += 1;
                    logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                        getHomeOrAway(attackWay, 0) +
                        "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >" +
                        "[" + attackPlayer.name + "]" +
                        "</span>决定自己射门" +
                        " ！<br/>");
                }
                while (attackPlayer != undefined) {
                    eclipseSeconds += 1;
                    logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                        "" +
                        "<span class='class-span-match-description-face'>" + getHomeOrAway(attackWay, 0) + "" +
                        "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 面对" +
                        getHomeOrAway(attackWay, 1) +
                        "门将 " +
                        "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                        "' onclick='showThisMatchPlayer(this)' >" +
                        "[" + defenceTeamGk.name + "] 了！" +
                        "</span>" +
                        "</span><br/>");
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                    spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                    if ((getRandomInteger(attackPlayer.shoot) + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match)) > getRandomInteger(defenceTeamGk.defence)) {
                        eclipseSeconds += 1;
                        logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                            "" +
                            "<span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "" +
                            "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 漂亮的射门！</span><br/>");
                        if ((getRandomInteger(attackPlayer.shoot) + plusHappyPointsInMatchAttack(attackPlayer, defencePlayer, match)) > getRandomInteger(defenceTeamGk.goalKeeping)) {
                            eclipseSeconds += 1;
                            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                                "" +
                                "<span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "" +
                                "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 的射门冲破了" +
                                getHomeOrAway(attackWay, 1) +
                                "门将 " +
                                "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >" +
                                "[" + defenceTeamGk.name + "]" +
                                "</span>" +
                                " 的五指关，球进了！</span><br/>");
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                            if (attackWay == 0) {
                                increaseHomeScore(match);
                            } else {
                                increaseAwayScore(match);
                            }
                            eclipseSeconds += 1;
                            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                                "" +
                                "<span class='class-span-match-description-score'>" + getHomeOrAway(attackWay, 0) + "" +
                                "场上比分是 " + match.homeScore + " - " + match.awayScore + "！</span><br/>");
                            return;
                        } else {
                            eclipseSeconds += 1;
                            logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                                "" +
                                "<span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "" +
                                "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 的射门被" +
                                getHomeOrAway(attackWay, 1) +
                                "门将 " +
                                "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                "' onclick='showThisMatchPlayer(this)' >" +
                                "[" + defenceTeamGk.name + "]" +
                                "</span>" +
                                " 扑了出去，有补射的机会吗？</span><br/>");
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                            if (attackPlayers.length > 0) {
                                var number = getRandomInteger(attackPlayers.length);
                                attackPlayer = attackPlayers[number];
                                attackPlayers.splice(number, 1);
                                eclipseSeconds += 1;
                                logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                                    "" +
                                    "<span class='class-span-match-description-shoot'>" + getHomeOrAway(attackWay, 0) + "" +
                                    "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                                    "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 拿到了补射的机会了！</span><br/>");
                                spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                            } else {
                                eclipseSeconds += 1;
                                logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                                    "" +
                                    "<span class='class-span-match-description-face'>" + getHomeOrAway(attackWay, 0) + "" +
                                    "没有机会了，" +
                                    getHomeOrAway(attackWay, 1) +
                                    "防守球员拿到了球</span><br/>");
                                attackPlayer = undefined;
                                attackPlayers = [];
                                spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                            }
                        }
                    } else {
                        eclipseSeconds += 1;
                        logOtherMatch.push(getEclipseMinutesAndSeconds(eclipseSeconds) + " " +
                            "" +
                            "<span class='class-span-match-description-face'>" + getHomeOrAway(attackWay, 0) + "" +
                            "<span class='class-span-play-game-attack-player' playerId='" + attackPlayer.id + "' teamId='" + (attackWay == 0 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >[" + attackPlayer.name + "]</span> 射门，被" +
                            getHomeOrAway(attackWay, 1) +
                            "门将 " +
                            "<span class='class-span-play-game-attack-player' playerId='" + defenceTeamGk.id + "' teamId='" + (attackWay == 1 ? match.homeTeamId : match.awayTeamId) + "' teamLevel='" + match.level +
                            "' onclick='showThisMatchPlayer(this)' >" +
                            "[" + defenceTeamGk.name + "]" +
                            "</span>" +
                            " 扑倒了皮球， [" + defenceTeamGk.name + "] 把球紧紧抱在了怀里！</span><br/>");
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, attackPlayer, match);
                        spendStamina(homeLineUpTeamPlayers, homeLineUpBackupTeamPlayers, awayLineUpTeamPlayers, awayLineUpBackupTeamPlayers, attackWay, defenceTeamGk, match);
                        attackPlayer = undefined;
                        attackPlayers = [];
                    }
                }
            }
        }
    }
    return;
}

var increaseHomeScore = function (match) {
    match.homeScore += 1;
    $(".home-score-match-id-" + match.id).html(match.homeScore);
    return;
}

var increaseAwayScore = function (match) {
    match.awayScore += 1;
    $(".away-score-match-id-" + match.id).html(match.awayScore);
    return;
}

var closePopoutMatch = function () {
    $(".class-div-popout-match").hide();
    return;
}

var popoutMatchInfo = function (matchId) {
    closePopoutMatch();
    $(".class-div-popout-match-id-" + matchId).show();
    return;
}

// var calcBetResult = function (userTeam) {
//     var placeBets = userTeam.placeBets;
//     for (var i = 0; i < placeBets.length; i++) {
//         var placeBet = placeBets[i];
//         var match = undefined;
//         var teamPlayer = undefined;
//         if (placeBet.isLowerUpperCurrent == 0) {
//             match = userTeam.currentMatchSchedules[placeBet.scheduleIndex].matches[placeBet.matchIndex];
//             if (placeBet.playerIndex != -1) {
//                 teamPlayer = userTeam.currentTeams[placeBet.teamIndex].teamPlayers[placeBet.playerIndex];
//             }
//         }
//         if (placeBet.isLowerUpperCurrent == 1) {
//             match = userTeam.upperMatchSchedules[placeBet.scheduleIndex].matches[placeBet.matchIndex];
//             if (placeBet.playerIndex != -1) {
//                 teamPlayer = userTeam.upperTeams[placeBet.teamIndex].teamPlayers[placeBet.playerIndex];
//             }
//         }
//         if (placeBet.isLowerUpperCurrent == 2) {
//             match = userTeam.lowerMatchSchedules[placeBet.scheduleIndex].matches[placeBet.matchIndex];
//             if (placeBet.playerIndex != -1) {
//                 teamPlayer = userTeam.lowerTeams[placeBet.teamIndex].teamPlayers[placeBet.playerIndex];
//             }
//         }
//         if(teamPlayer==undefined){
//             return;
//         }else{
//             if(teamPlayer.id!=placeBet.playerId){
//                 //如果不一致，系统就吞了这笔投注
//                 return;
//             }
//         }
//         if (placeBet.betWay == 0) {
//             if (match.homeScore - match.awayScore > match.handicapAsiaOdds) {
//                 //赢了
//                 var winMoney = placeBet.betMoney * (1 + match.homeAsiaOdds);
//                 if (placeBet.playerIndex != -1) {
//                     teamPlayer.money += winMoney;
//                     teamPlayer.moneyWin += winMoney - placeBet.betMoney;
//                 } else {
//                     userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money += parseFloat(winMoney);
//                 }
//                 setPlayerHappy(match, teamPlayer, winMoney, placeBet);
//             } else if (match.homeScore - match.awayScore == match.handicapAsiaOdds) {
//                 //走盘
//                 var winMoney = placeBet.betMoney;
//                 if (placeBet.playerIndex != -1) {
//                     teamPlayer.money += winMoney;
//                 } else {
//                     userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money += parseFloat(winMoney);
//                 }
//                 setPlayerHappy(match, teamPlayer, 0, placeBet);
//             } else {
//                 //输了
//                 setPlayerHappy(match, teamPlayer, 0 - placeBet.betMoney, placeBet);
//                 teamPlayer.moneyWin += 0 - placeBet.betMoney;
//             }
//         } else {
//             if (match.homeScore - match.awayScore < match.handicapAsiaOdds) {
//                 //赢了
//                 var winMoney = placeBet.betMoney * (1 + match.awayAsiaOdds);
//                 if (placeBet.playerIndex != -1) {
//                     teamPlayer.money += winMoney;
//                     teamPlayer.moneyWin += winMoney - placeBet.betMoney;
//                 } else {
//                     userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money += parseFloat(winMoney);
//                 }
//                 setPlayerHappy(match, teamPlayer, winMoney - placeBet.betMoney, placeBet);
//             } else if (match.homeScore - match.awayScore == match.handicapAsiaOdds) {
//                 //走盘
//                 var winMoney = placeBet.betMoney;
//                 if (placeBet.playerIndex != -1) {
//                     teamPlayer.money += winMoney;
//                 } else {
//                     userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money += parseFloat(winMoney);
//                 }
//                 setPlayerHappy(match, teamPlayer, 0, placeBet);
//             } else {
//                 //输了
//                 setPlayerHappy(match, teamPlayer, 0 - placeBet.betMoney, placeBet);
//                 teamPlayer.moneyWin += 0 - placeBet.betMoney;
//             }
//         }
//     }
//     userTeam.placeBets = [];
//     return;
// }

var payPlayerSalary = function (userTeam) {
    paySalary(userTeam.currentTeams);
    paySalary(userTeam.upperTeams);
    paySalary(userTeam.lowerTeams);
    return;
}

var paySalary = function (currentTeams) {
    if (currentTeams == undefined) {
        return;
    }
    //发工资,发球员工资
    for (var i = 0; i < currentTeams.length; i++) {
        var currentTeam = currentTeams[i];
        var bankInfo = currentTeam.bankInfo;
        var teamPlayers = currentTeam.teamPlayers;
        for (var j = 0; j < teamPlayers.length; j++) {
            var teamPlayer = teamPlayers[j];
            teamPlayer.money += teamPlayer.salaryWeek;
            bankInfo.money -= teamPlayer.salaryWeek;
            setTeamPlayerNumber(teamPlayer);
        }
    }
    //发工资,发会计工资
    bankInfo.money -= currentTeam.accountant.salaryWeek;
    return;
}

var setTeamPlayerNumber = function (teamPlayer) {
    teamPlayer.money = Math.floor(teamPlayer.money);
    // teamPlayer.moneyBet = Math.floor(teamPlayer.moneyBet);
    // teamPlayer.moneyWin = Math.floor(teamPlayer.moneyWin);
    teamPlayer.happy = getNumberRound(teamPlayer.happy);
    teamPlayer.recoverStamina = getNumberRound(teamPlayer.recoverStamina);
    return;
}

var setTeamInfoWinDrawLosePointsScoreWinScoreLoseScoreNetGames = function (match, homeTeam, awayTeam) {
    homeTeam.teamInfo.scoreWin += match.homeScore;
    homeTeam.teamInfo.scoreLose += match.awayScore;
    homeTeam.teamInfo.scoreNet = homeTeam.teamInfo.scoreWin - homeTeam.teamInfo.scoreLose;

    awayTeam.teamInfo.scoreWin += match.awayScore;
    awayTeam.teamInfo.scoreLose += match.homeScore;
    awayTeam.teamInfo.scoreNet = awayTeam.teamInfo.scoreWin - awayTeam.teamInfo.scoreLose;
    if (match.homeScore > match.awayScore) {
        homeTeam.teamInfo.win += 1;
        awayTeam.teamInfo.lose += 1;
    } else if (match.homeScore == match.awayScore) {
        homeTeam.teamInfo.draw += 1;
        awayTeam.teamInfo.draw += 1;
    } else {
        homeTeam.teamInfo.lose += 1;
        awayTeam.teamInfo.win += 1;
    }
    homeTeam.teamInfo.games += 1;
    awayTeam.teamInfo.games += 1;
    homeTeam.teamInfo.points =
        (homeTeam.teamInfo.win * 3) + homeTeam.teamInfo.draw + (homeTeam.teamInfo.scoreNet / 1000) + (homeTeam.teamInfo.scoreWin / 1000000) + (homeTeam.teamInfo.win / 100000000) - homeTeam.teamInfo.punishPoints;
    awayTeam.teamInfo.points =
        (awayTeam.teamInfo.win * 3) + awayTeam.teamInfo.draw + (awayTeam.teamInfo.scoreNet / 1000) + (awayTeam.teamInfo.scoreWin / 1000000) + (awayTeam.teamInfo.win / 100000000) - awayTeam.teamInfo.punishPoints;
    return;
}

var sortTeamRank = function (userTeam) {
    sortTeamRankCurrentUpperLower(userTeam.currentTeams);
    sortTeamRankCurrentUpperLower(userTeam.upperTeams);
    sortTeamRankCurrentUpperLower(userTeam.lowerTeams);
    return;
}

var getPlayerLineUpHtml = function (players, matchTeam) {
    var mainHtml = "";
    var userTeam = getPageUserTeam();
    for (var i = 0; i < players.length; i++) {
        var teamPlayer = players[i];
        if (matchTeam != undefined) {
            if (matchTeam.teamInfo.id == userTeam.config.teamId) {
                mainHtml +=
                    "<button property='" + JSON.stringify(teamPlayer) + "' onclick='showThisPlayer(this,1)' class='class-button-team-player-line-up'>" +
                    getPlayerFramePicture(teamPlayer, "class-image-team-player-line-up") +
                    "<span style='color:black;margin:12px 0px 0px 12px;'>" + teamPlayer.name +
                    "</span>" +
                    "</button>";
            } else {
                mainHtml +=
                    "<button property='" + JSON.stringify(teamPlayer) + "' onclick='showThisPlayer(this)' class='class-button-team-player-line-up'>" +
                    getPlayerFramePicture(teamPlayer, "class-image-team-player-line-up") +
                    "<span style='color:black;margin:12px 0px 0px 12px;'>" + teamPlayer.name +
                    "</span>" +
                    "</button>";
            }
        } else {
            mainHtml +=
                "<button property='" + JSON.stringify(teamPlayer) + "' onclick='showThisPlayer(this)' class='class-button-team-player-line-up'>" +
                getPlayerFramePicture(teamPlayer, "class-image-team-player-line-up") +
                "<span style='color:black;margin:12px 0px 0px 12px;'>" + teamPlayer.name +
                "</span>" +
                "</button>";
        }
    }
    return mainHtml;
}

var sortTeamRankCurrentUpperLower = function (currentTeams) {
    if (currentTeams == undefined) {
        return;
    }
    var ranks = [];
    for (var i = 0; i < currentTeams.length; i++) {
        var rank = {};
        rank.index = i;
        rank.points = currentTeams[i].teamInfo.points;
        ranks.push(rank);
    }
    for (var i = 0; i < ranks.length; i++) {
        for (var j = 0; j < ranks.length - 1; j++) {
            //冒泡排序
            if (ranks[j].points < ranks[j + 1].points) {
                var temp = ranks[j];
                ranks[j] = ranks[j + 1];
                ranks[j + 1] = temp
            }
        }
    }
    for (var i = 0; i < ranks.length; i++) {
        currentTeams[ranks[i].index].teamInfo.rank = i + 1;
    }
    return;
}

/*写入买票的球迷数量*/
var initializeFansCount = function (currentMatch, userTeam) {
    writeFansCount(userTeam.currentMatchSchedules, currentMatch, userTeam.currentTeams);
    writeFansCount(userTeam.upperMatchSchedules, currentMatch, userTeam.upperTeams);
    writeFansCount(userTeam.lowerMatchSchedules, currentMatch, userTeam.lowerTeams);
    return;
}

var writeFansCount = function (currentMatchSchedules, currentMatch, currentTeams) {
    if (currentMatchSchedules == undefined) {
        return;
    }
    if (currentMatch.scheduleIndex == undefined) {
        return;
    }
    if (currentTeams == undefined) {
        return;
    }
    var currentMatchSchedule = currentMatchSchedules[currentMatch.scheduleIndex];
    for (var i = 0; i < currentMatchSchedule.matches.length; i++) {
        var match = currentMatchSchedule.matches[i];
        if (match.homeFansCount == 0 && match.awayFansCount == 0) {
            var homeTeam = undefined;
            var awayTeam = undefined;
            for (var j = 0; j < currentTeams.length; j++) {
                if (currentTeams[j].teamInfo.id == match.homeTeamId) {
                    homeTeam = currentTeams[j];
                }
                if (currentTeams[j].teamInfo.id == match.awayTeamId) {
                    awayTeam = currentTeams[j];
                }
            }
            if (homeTeam != undefined && awayTeam != undefined) {
                if (homeTeam.teamStadium.ticketPrice == 0) {
                    homeTeam.teamStadium.ticketPrice = 1;
                }
                if (awayTeam.teamStadium.ticketPrice == 0) {
                    awayTeam.teamStadium.ticketPrice = 1;
                }
                var homeFansCount = (homeTeam.teamStadium.fansCount + 100) * 0.5 * (20 * homeTeam.teamInfo.level) / homeTeam.teamStadium.ticketPrice +
                    getRandomInteger((20 * homeTeam.teamInfo.level) * 0.25 * homeTeam.teamStadium.fansCount / homeTeam.teamStadium.ticketPrice);
                var awayFansCount = getRandomInteger((20 * awayTeam.teamInfo.level) * 0.5 * (awayTeam.teamStadium.fansCount + 100) / homeTeam.teamStadium.ticketPrice);
                var fansCount = homeFansCount + awayFansCount;
                if (homeTeam.teamStadium.capacity < fansCount) {
                    /*按比例换算球迷数量*/
                    match.homeFansCount = Math.floor(homeTeam.teamStadium.capacity * homeFansCount / fansCount);
                    match.awayFansCount = Math.floor(homeTeam.teamStadium.capacity * awayFansCount / fansCount);
                } else {
                    match.homeFansCount = Math.floor(homeFansCount);
                    match.awayFansCount = Math.floor(awayFansCount);
                }
            }
        }
    }
    return;
}

var setFansPay = function (userTeam) {
    var currentMatch = userTeam.currentMatch;
    writeFansPay(userTeam.currentMatchSchedules, currentMatch, userTeam.currentTeams, userTeam);
    writeFansPay(userTeam.upperMatchSchedules, currentMatch, userTeam.upperTeams, userTeam);
    writeFansPay(userTeam.lowerMatchSchedules, currentMatch, userTeam.lowerTeams, userTeam);
    return;
}

var writeFansPay = function (currentMatchSchedules, currentMatch, currentTeams, userTeam) {
    if (currentMatchSchedules == undefined) {
        return;
    }
    var myTeam = userTeam.currentTeams[userTeam.config.teamIndex];
    if (currentMatch.scheduleIndex == undefined) {
        return;
    }
    if (currentTeams == undefined) {
        return;
    }
    var currentMatchSchedule = currentMatchSchedules[currentMatch.scheduleIndex];
    for (var i = 0; i < currentMatchSchedule.matches.length; i++) {
        var match = currentMatchSchedule.matches[i];
        if (match.homeFansCount != undefined) {
            var homeTeam = undefined
            var awayTeam = undefined;
            for (var j = 0; j < currentTeams.length; j++) {
                if (currentTeams[j].teamInfo.id == match.homeTeamId) {
                    homeTeam = currentTeams[j];
                }
                if (currentTeams[j].teamInfo.id == match.awayTeamId) {
                    awayTeam = currentTeams[j];
                }
            }
            if (homeTeam != undefined && awayTeam != undefined) {
                homeTeam.bankInfo.money += parseFloat(match.homeFansCount) * parseFloat(homeTeam.teamStadium.ticketPrice);
                awayTeam.bankInfo.money += parseFloat(match.awayFansCount) * parseFloat(homeTeam.teamStadium.ticketPrice);
                //增加球迷数量
                var increaseHomeFansCount = 100 + getRandomInteger(awayTeam.teamStadium.fansCount < 500 ? 500 : awayTeam.teamStadium.fansCount);//增加球迷数量
                var increaseAwayFansCount = 100 + getRandomInteger(homeTeam.teamStadium.fansCount < 500 ? 500 : homeTeam.teamStadium.fansCount);
                if (match.homeScore > match.awayScore) {
                    homeTeam.teamStadium.fansCount += increaseHomeFansCount;
                    if (awayTeam.teamStadium.fansCount > 1000) {
                        awayTeam.teamStadium.fansCount -= 1.5 * increaseAwayFansCount;
                        if (awayTeam.teamStadium.fansCount < 1000) {
                            awayTeam.teamStadium.fansCount = 1000;
                        }
                    }
                } else if (match.homeScore < match.awayScore) {
                    awayTeam.teamStadium.fansCount += increaseAwayFansCount;
                    if (homeTeam.teamStadium.fansCount > 1000) {
                        homeTeam.teamStadium.fansCount -= 1.5 * increaseHomeFansCount;
                        if (homeTeam.teamStadium.fansCount < 1000) {
                            homeTeam.teamStadium.fansCount = 1000;
                        }
                    }
                } else if (match.homeScore == match.awayScore) {
                    if (homeTeam.teamStadium.fansCount > 1000) {
                        homeTeam.teamStadium.fansCount -= Math.floor(0.5 * increaseHomeFansCount);
                        if (homeTeam.teamStadium.fansCount < 1000) {
                            homeTeam.teamStadium.fansCount = 1000;
                        }
                    }
                    if (awayTeam.teamStadium.fansCount > 1000) {
                        awayTeam.teamStadium.fansCount -= Math.floor(0.5 * increaseAwayFansCount);
                        if (awayTeam.teamStadium.fansCount < 1000) {
                            awayTeam.teamStadium.fansCount = 1000;
                        }
                    }
                }
                if (myTeam.teamInfo.id == homeTeam.teamInfo.id) {
                    // if (increaseHomeFansCount > 0) {
                    //     sendMailToTeam("球队比赛胜利，球迷数量变化是:" + increaseHomeFansCount, "如题");
                    // }
                    sendMailToTeam("球迷买票费用入账了", "<table>" +
                        "<tr><td>比赛轮次</td><td>第" + match.games + "轮</td></tr>" +
                        "<tr><td>比赛对战</td><td>" + match.homeTeamName + " vs " + match.awayTeamName + "</td></tr>" +
                        "<tr><td>比赛结果</td><td>" + match.homeScore + "-" + match.awayScore + "</td></tr>" +
                        "<tr><td>主队球场容量</td><td>" + homeTeam.teamStadium.capacity + "</td></tr>" +
                        "<tr><td>主队球迷买票人数</td><td>" + match.homeFansCount + "</td></tr>" +
                        "<tr><td>客队球迷买票人数</td><td>" + match.awayFansCount + "</td></tr>" +
                        "<tr><td>票面价格</td><td>" + homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "<tr><td>买票收入总额</td><td>" + (match.homeFansCount + match.awayFansCount) * homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "<tr><td>买票收入分成</td><td>" + match.homeFansCount * homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "<tr><td>实际入账金额</td><td>" + match.homeFansCount * homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "</table>");
                } else if (myTeam.teamInfo.id == awayTeam.teamInfo.id) {
                    // if (increaseAwayFansCount > 0) {
                    //     sendMailToTeam("球队比赛胜利，球迷数量增加了" + increaseAwayFansCount, "如题");
                    // }
                    sendMailToTeam("球迷买票费用入账了", "<table>" +
                        "<tr><td>比赛轮次</td><td>第" + match.games + "轮</td></tr>" +
                        "<tr><td>比赛对战</td><td>" + match.homeTeamName + " vs " + match.awayTeamName + "</td></tr>" +
                        "<tr><td>比赛结果</td><td>" + match.homeScore + "-" + match.awayScore + "</td></tr>" +
                        "<tr><td>主队球场容量</td><td>" + homeTeam.teamStadium.capacity + "</td></tr>" +
                        "<tr><td>主队球迷买票人数</td><td>" + match.homeFansCount + "</td></tr>" +
                        "<tr><td>客队球迷买票人数</td><td>" + match.awayFansCount + "</td></tr>" +
                        "<tr><td>票面价格</td><td>" + homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "<tr><td>买票收入总额</td><td>" + (match.homeFansCount + match.awayFansCount) * homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "<tr><td>买票收入分成</td><td>" + match.awayFansCount * homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "<tr><td>实际入账金额</td><td>" + match.awayFansCount * homeTeam.teamStadium.ticketPrice + "</td></tr>" +
                        "</table>");
                }
            }
        }
    }
    return;
}

var toUpperOrLowerLevel = function (userTeam) {
    if (userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.games != TEAM_COUNT_DEFAULT_VALUE * 2 - 2) {
        return;
    }
    //升级和降级
    var currentTeams = getCurrentTeams(userTeam, 0);
    var upperTeams = getCurrentTeams(userTeam, 1);
    var lowerTeams = getCurrentTeams(userTeam, 2);
    if (userTeam.upper2Teams == undefined) {
        userTeam.upper2Teams = [];
    }
    if (currentTeams[userTeam.config.teamIndex].teamInfo.rank == 1) {
        sendMailToTeam("祝贺你! 你的球队 [" + currentTeams[userTeam.config.teamIndex].teamInfo.name + "] 获得了冠军！下赛季将征战更高1级联赛！", "如题");
        sendMailToTeam("祝贺你! 你获得了联赛委员会发放的" + Math.floor(currentTeams[userTeam.config.teamIndex].teamInfo.level * 1000000) + "的冠军奖金！", "如题");
    } else if (currentTeams[userTeam.config.teamIndex].teamInfo.rank == 2) {
        sendMailToTeam("恭喜你! 你的球队 [" + currentTeams[userTeam.config.teamIndex].teamInfo.name + "] 获得了亚军!下赛季将征战更高1级联赛！", "如题");
        sendMailToTeam("祝贺你! 你获得了联赛委员会发放的" + Math.floor(currentTeams[userTeam.config.teamIndex].teamInfo.level * 200000) + "的亚军奖金！", "如题");
    } else if (currentTeams[userTeam.config.teamIndex].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE - 1) {
        sendMailToTeam("很抱歉! 你的球队 [" + currentTeams[userTeam.config.teamIndex].teamInfo.name + "] 降级了！请下个赛季努力升级！", "如题");
    } else if (currentTeams[userTeam.config.teamIndex].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE) {
        sendMailToTeam("很抱歉! 你的球队 [" + currentTeams[userTeam.config.teamIndex].teamInfo.name + "] 降级了！请下个赛季努力升级！", "如题");
    } else {
        sendMailToTeam("你的球队 [" + currentTeams[userTeam.config.teamIndex].teamInfo.name + "] 最终排名是第" + currentTeams[userTeam.config.teamIndex].teamInfo.rank + "！请下个赛季努力升级！", "如题");
    }
    //高1级的升级
    for (var i = 0; i < upperTeams.length; i++) {
        if (upperTeams[i].teamInfo.rank == 1) {
            sendMailToTeam("高1级联赛排行第" + upperTeams[i].teamInfo.rank + "的球队 [" + upperTeams[i].teamInfo.name + "] 已升级至高2级联赛", "如题");
            upperTeams[i].teamInfo.level += 1;
            adjustFansCountAndWinPrizeMoney(upperTeams[i]);
            upperTeams[i].teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 5;
            userTeam.upper2Teams.push(upperTeams[i]);
            upperTeams.splice(i, 1);
            break;
        }
    }
    for (var i = 0; i < upperTeams.length; i++) {
        if (upperTeams[i].teamInfo.rank == 2) {
            sendMailToTeam("高1级联赛排行第" + upperTeams[i].teamInfo.rank + "的球队 [" + upperTeams[i].teamInfo.name + "] 已升级至高2级联赛", "如题");
            upperTeams[i].teamInfo.level += 1;
            adjustFansCountAndWinPrizeMoney(upperTeams[i]);
            upperTeams[i].teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 6;
            userTeam.upper2Teams.push(upperTeams[i]);
            upperTeams.splice(i, 1);
            break;
        }
    }
    //高2级的降级
    var upper2TeamPushLast1 = getInitializeSingleTeam(upperTeams[0].teamInfo.level + 1, TEAM_COUNT_DEFAULT_VALUE - 1, getRandomInteger(TEAM_COUNT_DEFAULT_VALUE));
    sendMailToTeam("高2级联赛排行第" + upper2TeamPushLast1.teamInfo.rank + "的球队 [" + upper2TeamPushLast1.teamInfo.name + "] 已降级至高1级联赛", "如题");
    var upper2TeamPushLast2 = getInitializeSingleTeam(upperTeams[0].teamInfo.level + 1, TEAM_COUNT_DEFAULT_VALUE, getRandomInteger(TEAM_COUNT_DEFAULT_VALUE));
    sendMailToTeam("高2级联赛排行第" + upper2TeamPushLast2.teamInfo.rank + "的球队 [" + upper2TeamPushLast2.teamInfo.name + "] 已降级至高1级联赛", "如题");
    upper2TeamPushLast1.teamInfo.level -= 1;
    upper2TeamPushLast2.teamInfo.level -= 1;
    upper2TeamPushLast2.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 1;
    upper2TeamPushLast1.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 2;
    upperTeams.push(upper2TeamPushLast1);
    upperTeams.push(upper2TeamPushLast2);
    //高1级的降级
    var upperTeamLast2 = undefined;
    var upperTeamLast1 = undefined;
    for (var i = 0; i < upperTeams.length; i++) {
        if (upperTeams[i].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE - 1) {
            sendMailToTeam("高1级联赛排行第" + upperTeams[i].teamInfo.rank + "的球队 [" + upperTeams[i].teamInfo.name + "] 已降级至同级联赛", "如题");
            adjustFansCountAndWinPrizeMoney(upperTeams[i]);
            upperTeamLast2 = upperTeams[i];
            upperTeamLast2.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 1;
        }
        if (upperTeams[i].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE) {
            sendMailToTeam("高1级联赛排行第" + upperTeams[i].teamInfo.rank + "的球队 [" + upperTeams[i].teamInfo.name + "] 已降级至同级联赛", "如题");
            adjustFansCountAndWinPrizeMoney(upperTeams[i]);
            upperTeamLast1 = upperTeams[i];
            upperTeamLast1.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 2;
        }
    }
    upperTeamLast1.teamInfo.level -= 1;
    upperTeamLast2.teamInfo.level -= 1;
    currentTeams.push(upperTeamLast1);
    currentTeams.push(upperTeamLast2);
    //从高1层联赛中删除
    for (var i = 0; i < upperTeams.length; i++) {
        if (upperTeams[i].teamInfo.id == upperTeamLast1.teamInfo.id) {
            upperTeams.splice(i, 1);
            break;
        }
    }
    for (var i = 0; i < upperTeams.length; i++) {
        if (upperTeams[i].teamInfo.id == upperTeamLast2.teamInfo.id) {
            upperTeams.splice(i, 1);
            break;
        }
    }
    //当前级别的升级
    var currentTeamFirst2 = undefined;
    var currentTeamFirst1 = undefined;
    for (var i = 0; i < currentTeams.length; i++) {
        if (currentTeams[i].teamInfo.rank == 1) {
            sendMailToTeam("同级联赛排行第" + currentTeams[i].teamInfo.rank + "的球队 [" + currentTeams[i].teamInfo.name + "] 已升级至高1级联赛", "如题");
            currentTeamFirst1 = currentTeams[i];
            adjustFansCountAndWinPrizeMoney(currentTeams[i]);
            currentTeamFirst1.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 5;
        }
        if (currentTeams[i].teamInfo.rank == 2) {
            sendMailToTeam("同级联赛排行第" + currentTeams[i].teamInfo.rank + "的球队 [" + currentTeams[i].teamInfo.name + "] 已升级至高1级联赛", "如题");
            currentTeamFirst2 = currentTeams[i];
            adjustFansCountAndWinPrizeMoney(currentTeams[i]);
            currentTeamFirst2.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 6;
        }
    }
    currentTeamFirst1.teamInfo.level += 1;
    currentTeamFirst2.teamInfo.level += 1;
    upperTeams.push(currentTeamFirst2);
    upperTeams.push(currentTeamFirst1);
    for (var i = 0; i < currentTeams.length; i++) {
        if (currentTeams[i].teamInfo.id == currentTeamFirst1.teamInfo.id) {
            currentTeams.splice(i, 1);
            break;
        }
    }
    for (var i = 0; i < currentTeams.length; i++) {
        if (currentTeams[i].teamInfo.id == currentTeamFirst2.teamInfo.id) {
            currentTeams.splice(i, 1);
            break;
        }
    }
    if (lowerTeams != undefined) {
        //当前级别的降级
        var currentTeamLast2 = undefined;
        var currentTeamLast1 = undefined;
        for (var i = 0; i < currentTeams.length; i++) {
            if (currentTeams[i].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE - 1) {
                sendMailToTeam("同级联赛排行第" + currentTeams[i].teamInfo.rank + "的球队 [" + currentTeams[i].teamInfo.name + "] 已降级至低1级联赛", "如题");
                currentTeamLast2 = currentTeams[i];
                adjustFansCountAndWinPrizeMoney(currentTeams[i]);
                currentTeamLast2.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 1;
            }
            if (currentTeams[i].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE) {
                sendMailToTeam("同级联赛排行第" + currentTeams[i].teamInfo.rank + "的球队 [" + currentTeams[i].teamInfo.name + "] 已降级至低1级联赛", "如题");
                currentTeamLast1 = currentTeams[i];
                adjustFansCountAndWinPrizeMoney(currentTeams[i]);
                currentTeamLast1.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 2;
            }
        }
        currentTeamLast1.teamInfo.level -= 1;
        currentTeamLast2.teamInfo.level -= 1;
        lowerTeams.push(currentTeamLast1);
        lowerTeams.push(currentTeamLast2);
        for (var i = 0; i < currentTeams.length; i++) {
            if (currentTeams[i].teamInfo.id == currentTeamLast2.teamInfo.id) {
                currentTeams.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < currentTeams.length; i++) {
            if (currentTeams[i].teamInfo.id == currentTeamLast1.teamInfo.id) {
                currentTeams.splice(i, 1);
                break;
            }
        }
        //低1级别的升级
        var lowerTeamFirst2 = undefined;
        var lowerTeamFirst1 = undefined;
        for (var i = 0; i < lowerTeams.length; i++) {
            if (lowerTeams[i].teamInfo.rank == 1) {
                sendMailToTeam("低1级联赛排行第" + lowerTeams[i].teamInfo.rank + "的球队 [" + lowerTeams[i].teamInfo.name + "] 已升级至同级联赛", "如题");
                adjustFansCountAndWinPrizeMoney(lowerTeams[i]);
                lowerTeamFirst1 = lowerTeams[i];
                lowerTeamFirst1.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 5;
            }
            if (lowerTeams[i].teamInfo.rank == 2) {
                sendMailToTeam("低1级联赛排行第" + lowerTeams[i].teamInfo.rank + "的球队 [" + lowerTeams[i].teamInfo.name + "] 已升级至同级联赛", "如题");
                adjustFansCountAndWinPrizeMoney(lowerTeams[i]);
                lowerTeamFirst2 = lowerTeams[i];
                lowerTeamFirst2.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 6;
            }
        }
        lowerTeamFirst1.teamInfo.level += 1;
        lowerTeamFirst2.teamInfo.level += 1;
        currentTeams.push(lowerTeamFirst2);
        currentTeams.push(lowerTeamFirst1);
        for (var i = 0; i < lowerTeams.length; i++) {
            if (lowerTeams[i].teamInfo.id == lowerTeamFirst1.teamInfo.id) {
                lowerTeams.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < lowerTeams.length; i++) {
            if (lowerTeams[i].teamInfo.id == lowerTeamFirst2.teamInfo.id) {
                lowerTeams.splice(i, 1);
                break;
            }
        }
        if (lowerTeams[0].teamInfo.level >= 2) {
            if (userTeam.lower2Teams = undefined) {
                userTeam.lower2Teams = [];
            }
            //低一级别的降级
            for (var i = 0; i < upperTeams.length; i++) {
                if (upperTeams[i].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE - 1) {
                    sendMailToTeam("低1级联赛排行第" + lowerTeams[i].teamInfo.rank + "的球队 [" + upperTeams[i].teamInfo.name + "] 已降级至低2级联赛", "如题");
                    adjustFansCountAndWinPrizeMoney(lowerTeams[i]);
                    lowerTeams[i].teamInfo.level -= 1;
                    lowerTeams[i].teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 1;
                    userTeam.lower2Teams.push(lowerTeams[i]);
                    upperTeams.splice(i, 1);
                    break;
                }
            }
            for (var i = 0; i < upperTeams.length; i++) {
                if (upperTeams[i].teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE) {
                    sendMailToTeam("低1级联赛排行第" + lowerTeams[i].teamInfo.rank + "的球队 [" + upperTeams[i].teamInfo.name + "] 已降级至低2级联赛", "如题");
                    adjustFansCountAndWinPrizeMoney(lowerTeams[i]);
                    lowerTeams[i].teamInfo.level -= 1;
                    lowerTeams[i].teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 2;
                    userTeam.lower2Teams.push(lowerTeams[i]);
                    upperTeams.splice(i, 1);
                    break;
                }
            }
            //低2级的升级
            var lower2TeamPushFirst1 = getInitializeSingleTeam(lowerTeams[0].teamInfo.level - 1, 1, getRandomInteger(TEAM_COUNT_DEFAULT_VALUE));
            sendMailToTeam("低2级联赛排行第" + lower2TeamPushFirst1.teamInfo.rank + "的球队 [" + lower2TeamPushFirst1.teamInfo.name + "] 已升级至低1级联赛", "如题");
            var lower2TeamPushFirst2 = getInitializeSingleTeam(lowerTeams[0].teamInfo.level - 1, 2, getRandomInteger(TEAM_COUNT_DEFAULT_VALUE));
            sendMailToTeam("低2级联赛排行第" + lower2TeamPushFirst2.teamInfo.rank + "的球队 [" + lower2TeamPushFirst2.teamInfo.name + "] 已升级至低1级联赛", "如题");
            lower2TeamPushFirst1.teamInfo.rank = 1;
            lower2TeamPushFirst2.teamInfo.rank = 2;
            adjustFansCountAndWinPrizeMoney(lower2TeamPushFirst1);
            adjustFansCountAndWinPrizeMoney(lower2TeamPushFirst2);
            lower2TeamPushFirst1.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 5;
            lower2TeamPushFirst2.teamInfo.rank = TEAM_COUNT_DEFAULT_VALUE + 6;
            lower2TeamPushFirst1.teamInfo.level += 1;
            lower2TeamPushFirst2.teamInfo.level += 1;
            lowerTeams.push(lower2TeamPushFirst1);
            lowerTeams.push(lower2TeamPushFirst2);
        }
    }
    clearSeason(userTeam.upperTeams);
    clearSeason(userTeam.currentTeams);
    clearSeason(userTeam.lowerTeams);
    return;
}

var adjustFansCountAndWinPrizeMoney = function (currentTeam) {
    if (currentTeam.teamInfo.games = TEAM_COUNT_DEFAULT_VALUE * 2 - 2) {
        if (currentTeam.teamInfo.rank == 1) {
            currentTeam.bankInfo.money += Math.floor(currentTeam.teamInfo.level * 1000000);
            currentTeam.teamStadium.fansCount += currentTeam.teamInfo.level * 2000;
        }
        if (currentTeam.teamInfo.rank == 2) {
            currentTeam.bankInfo.money += Math.floor(currentTeam.teamInfo.level * 200000);
            currentTeam.teamStadium.fansCount += currentTeam.teamInfo.level * 1000;
        }
        if (currentTeam.teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE - 1) {
            currentTeam.teamStadium.fansCount -= currentTeam.teamInfo.level * 1000;
            if (currentTeam.teamStadium.fansCount <= 1000) {
                currentTeam.teamStadium.fansCount = 1000;
            }
        }
        if (currentTeam.teamInfo.rank == TEAM_COUNT_DEFAULT_VALUE) {
            currentTeam.teamStadium.fansCount -= currentTeam.teamInfo.level * 1000;
            if (currentTeam.teamStadium.fansCount <= 1000) {
                currentTeam.teamStadium.fansCount = 1000;
            }
        }
    }
    return;
}

var buyTeamStadiumCapacityTrainHospitalTrainPlayerHospitalPlayerChangeBankInfo = function (userTeam) {
    //动态升级体育馆
    buyTeamStadiumCapacityTrainHospitalTrainPlayerHospitalPlayerChangeBankInfoWithCurrentTeams(getCurrentTeams(userTeam, 0), userTeam);
    buyTeamStadiumCapacityTrainHospitalTrainPlayerHospitalPlayerChangeBankInfoWithCurrentTeams(getCurrentTeams(userTeam, 1), userTeam);
    buyTeamStadiumCapacityTrainHospitalTrainPlayerHospitalPlayerChangeBankInfoWithCurrentTeams(getCurrentTeams(userTeam, 2), userTeam);
    return;
}

var buyTeamStadiumCapacityTrainHospitalTrainPlayerHospitalPlayerChangeBankInfoWithCurrentTeams = function (currentTeams) {
    if (currentTeams == undefined) {
        return;
    }
    var userTeam = getPageUserTeam();
    // var maxTrainPoints = 0;
    // var maxPersonCount = 0;
    // var maxHappy = 0;
    for (var i = 0; i < currentTeams.length; i++) {
        var currentTeam = currentTeams[i];
        //TODO每周处理球队事务在这里处理
        //清理球队事件
        currentTeam.eventIndexes = undefined;
        if (currentTeam.bankInfo.moneyLoanLeftGames >= 1) {
            currentTeam.bankInfo.moneyLoanLeftGames -= 1;
        }
        //设置球迷人数
        if (currentTeam.teamStadium.fansCount < 1000) {
            currentTeam.teamStadium.fansCount = 1000;
        }
        if (currentTeam.teamInfo.id != userTeam.config.teamId) {
            var teamValue = getTeamValue(currentTeam);
            //优化票价
            currentTeam.teamStadium.ticketPrice = getDefaultTicketPrice(currentTeam.teamStadium);
            //升级容量
            var increasePointsCapacity = getRandomInteger(1000);
            currentTeam.teamStadium.capacity += increasePointsCapacity;
            currentTeam.bankInfo.money -= increasePointsCapacity * TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE;
            buyTeamStadiumTrain(currentTeam);
            buyTeamStadiumHospital(currentTeam);
            trainPlayer(currentTeam);
            hospitalPlayer(currentTeam);
            adjustTeamInjure(currentTeam);
            sellPlayer(currentTeam);
            sellPlayer(currentTeam);
            adjustTeamLineUp(currentTeam);
            buyPlayer(currentTeam);
            adjustTeamLineUp(currentTeam);
            adjustBankInfo(currentTeam);
            payBankInfoMoneyLoan(currentTeam);
            sponsorTeam(currentTeam);
            trainYoungPlayer(currentTeam);
        } else {
            trainPlayer(currentTeam);
            hospitalPlayer(currentTeam);
            payBankInfoMoneyLoanUserTeam(currentTeam);
            sponsorTeam(currentTeam);
        }
    }
    return;
}

var sponsorTeam = function (currentTeam) {
    var continueSponsorCount = 0;
    if (currentTeam.sponsors == undefined) {
        currentTeam.sponsors = [];
    }
    for (var i = currentTeam.sponsors.length - 1; i >= 0; i--) {
        var sponsor = currentTeam.sponsors[i];
        if (sponsor.times > 1) {
            continueSponsorCount += 1;
        }
    }
    if (currentTeam.sponsors.length - continueSponsorCount <= 30) {
        var sponsor = {};
        sponsor.id = "SPO" + getId();
        sponsor.name = getSingleRandomFirstName() + getSingleRandomFirstName() + "有限公司";
        sponsor.leftGames = 51;
        sponsor.money = getSponsorMoney(currentTeam.teamInfo.rank, currentTeam.teamInfo.level);
        sponsor.item = getRandomInteger(SPONSOR_ITEMS.length);
        sponsor.times = 1;
        sponsor.picture = getRandomInteger(PICTURE_COUNT_MANAGER);
        //增加赞助商关系。
        if (currentTeam.teamInfo.rank <= 2 || getRandomInteger(100) + currentTeam.teamInfo.sponsorRelation > 90) {
            currentTeam.sponsors.push(sponsor);
            increaseBankInfoMoney(currentTeam, sponsor);
            sendMailToTeam("新赞助商[" + sponsor.name + "]决定赞助" + currentTeam.teamInfo.level + "级联赛目前排名第[" + currentTeam.teamInfo.rank + "]的球队[" + currentTeam.teamInfo.name + "]" + "，赞助金额是" + sponsor.money + "，赞助合同周数是" + 50 + "周", "如题");
        }
    }
    for (var i = currentTeam.sponsors.length - 1; i >= 0; i--) {
        var sponsor = currentTeam.sponsors[i];
        sponsor.leftGames -= 1;
        if (sponsor.leftGames <= 0) {
            if (currentTeam.teamInfo.rank <= 2) {
                sponsor.leftGames = 50;
                sponsor.times += 1;
                sponsor.money = getSponsorMoney(currentTeam.teamInfo.rank, currentTeam.teamInfo.level);
                increaseBankInfoMoney(currentTeam, sponsor);
                sendMailToTeam("因为球队良好的表现，老赞助商[" + sponsor.name + "]决定继续赞助" + currentTeam.teamInfo.level + "级联赛目前排名第[" + currentTeam.teamInfo.rank + "]的球队[" + currentTeam.teamInfo.name + "]" + "，赞助金额是" + sponsor.money + "，赞助合同周数是" + 50 + "周", "如题");
            } else {
                sendMailToTeam("老赞助商[" + sponsor.name + "]赞助" + "" + currentTeam.teamInfo.level + "级联赛目前排名第[" + currentTeam.teamInfo.rank + "]的球队[" + currentTeam.teamInfo.name + "]" + "合同已经到期，决定不再继续赞助了", "如题");
                currentTeam.sponsors.splice(i, 1);
            }
        }
    }
    return;
}

var increaseBankInfoMoney = function (currentTeam, sponsor) {
    currentTeam.bankInfo.money = parseFloat(currentTeam.bankInfo.money) + sponsor.money;
    return;
}

var getSponsorMoney = function (rank, level) {
    return getNumberRound(1000000 * level / rank);
}

var buyTeamStadiumTrain = function (currentTeam) {
    //动态升级体育馆训练设施
    var attackIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var defenceIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var blockIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var interceptIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var closingDownIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var defensiveIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var dribbleIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var goalKeepingIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var healthIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var offensiveIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var passIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    // var personCountIncreasePoints = currentTeam.teamInfo.level*currentTeam.teamInfo.level*getRandomInteger(9) + 1;
    var shootIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    var staminaIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(9) + 1;
    currentTeam.teamStadium.train.attack += attackIncreasePoints;
    currentTeam.teamStadium.train.defence += defenceIncreasePoints;
    currentTeam.teamStadium.train.intercept += interceptIncreasePoints;
    currentTeam.teamStadium.train.closingDown += closingDownIncreasePoints;
    currentTeam.teamStadium.train.defence += defenceIncreasePoints;
    currentTeam.teamStadium.train.defensive += defensiveIncreasePoints;
    currentTeam.teamStadium.train.dribble += dribbleIncreasePoints;
    currentTeam.teamStadium.train.goalKeeping += goalKeepingIncreasePoints;
    currentTeam.teamStadium.train.health += healthIncreasePoints;
    currentTeam.teamStadium.train.offensive += offensiveIncreasePoints;
    currentTeam.teamStadium.train.pass += passIncreasePoints;
    // if (currentTeam.teamStadium.train.personCount > currentTeam.teamPlayers.length) {
    //     personCountIncreasePoints = 0;
    // }
    // currentTeam.teamStadium.train.personCount += personCountIncreasePoints;
    currentTeam.teamStadium.train.shoot += shootIncreasePoints;
    currentTeam.teamStadium.train.stamina += staminaIncreasePoints;
    currentTeam.bankInfo.money -= TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE *
        (attackIncreasePoints + defenceIncreasePoints + defensiveIncreasePoints + dribbleIncreasePoints + goalKeepingIncreasePoints + healthIncreasePoints + offensiveIncreasePoints + passIncreasePoints +
            // personCountIncreasePoints +
            shootIncreasePoints + staminaIncreasePoints);
    return;
}

var buyTeamStadiumHospital = function (currentTeam) {
    //自动升级其他体育馆医院设施
    var recoverInjureIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(36) + 1;
    var recoverStaminaIncreasePoints = currentTeam.teamInfo.level * currentTeam.teamInfo.level * getRandomInteger(36) + 1;
    if (currentTeam.teamStadium.hospital.recoverInjure < 1000) {
        currentTeam.teamStadium.hospital.recoverInjure += recoverInjureIncreasePoints;
        currentTeam.bankInfo.money -= TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE *
            (recoverInjureIncreasePoints);
    }
    if (currentTeam.teamStadium.hospital.recoverStamina < 1000) {
        currentTeam.teamStadium.hospital.recoverStamina += recoverStaminaIncreasePoints;
        currentTeam.bankInfo.money -= TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE *
            (recoverStaminaIncreasePoints);
    }
    return;
}

var trainYoungPlayer = function (currentTeam) {
    //青年球员能力值增加，包括玩家
    var youngTeamPlayers = currentTeam.youngTeamPlayers;
    var teamPlayers = currentTeam.teamPlayers;
    var teamStadium = currentTeam.teamStadium;
    for (var i = 0; i < youngTeamPlayers.length; i++) {
        var youngTeamPlayer = youngTeamPlayers[i];
        increasePlayerAbility(youngTeamPlayer, getIncreasePoints(youngTeamPlayer, teamStadium, teamPlayers.length + youngTeamPlayers.length, currentTeam), 1, currentTeam);
    }
    return;
}

var trainPlayer = function (currentTeam) {
    //训练所有正式球员，包括玩家
    var teamPlayers = currentTeam.teamPlayers;
    var youngTeamPlayers = currentTeam.youngTeamPlayers;
    var teamStadium = currentTeam.teamStadium;
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        //清除上场状态
        teamPlayer.becomeLineup = undefined;
        increasePlayerAbility(teamPlayer, getIncreasePoints(teamPlayer, teamStadium, teamPlayers.length + youngTeamPlayers.length, currentTeam), undefined, currentTeam);
        //满50场，转会会能赚钱。
        if (teamPlayer.playGames != undefined) {
            teamPlayer.playGames += 1;
            if (teamPlayer.playGames >= 50) {
                teamPlayer.transferMoney = getTransferMoney(teamPlayer, currentTeam.teamInfo.level);
            }
        }
        //球员结识美女的需求
        //一个球员只能认识一个美女。
        //然后展开最猛烈的追求。
        var userTeam = getPageUserTeam();
        if (getRandomInteger(100) > 90) {
            if (teamPlayer.girlIndex == undefined) {
                teamPlayer.girlIndex = userTeam.singleGirlIndexes[getRandomInteger(userTeam.singleGirlIndexes.length)];
                var friend = {};
                friend.happy = 1;
                friend.personId = teamPlayer.id;
                friend.level = currentTeam.teamInfo.level;
                friend.teamId = currentTeam.teamInfo.id;
                friend.job = FRIEND_JOB_SOCCER_PLAYER;
                userTeam.girls[teamPlayer.girlIndex].friends.push(friend);
            }
        }
        if (teamPlayer.girlIndex != undefined) {
            var girl = undefined;
            //10万送礼物
            if (teamPlayer.money > 100000) {
                var money = 10000 + getRandomInteger(10000);
                var giftIndex = getRandomInteger(PICTURE_COUNT_GIFT);
                userTeam.shop.products[giftIndex].stock -= 1;
                teamPlayer.money -= money;
                userTeam.girls[teamPlayer.girlIndex].money += money;
                increaseHappy(userTeam.girls[teamPlayer.girlIndex], teamPlayer, userTeam.shop.products[giftIndex].happy);
            }
            //200万送车
            if (teamPlayer.money > 2000000) {
                var carIndex = PICTURE_COUNT_GIFT + getRandomInteger(PICTURE_COUNT_CAR);
                userTeam.shop.products[carIndex].stock -= 1;
                var money = userTeam.shop.products[carIndex].money;
                teamPlayer.money -= money;
                girl = userTeam.girls[teamPlayer.girlIndex];
                increaseHappy(userTeam.girls[teamPlayer.girlIndex], teamPlayer, money / 20000);
                girl.cars.push(carIndex);
            }
            //1000万送房子
            if (teamPlayer.money > 10000000) {
                var houseIndex = PICTURE_COUNT_GIFT + PICTURE_COUNT_CAR + getRandomInteger(PICTURE_COUNT_HOUSE);
                houseIndex = houseIndex > userTeam.shop.products.lengh ? userTeam.shop.products.lengh - 1 : houseIndex;
                userTeam.shop.products[houseIndex].stock -= 1;
                var money = userTeam.shop.products[houseIndex].money;
                teamPlayer.money -= money;
                girl = userTeam.girls[teamPlayer.girlIndex];
                increaseHappy(userTeam.girls[teamPlayer.girlIndex], teamPlayer, money / 20000);
                girl.houses.push(houseIndex);
            }
            if (girl != undefined) {
                var girlHappy = getHappy(girl, teamPlayer);
                var girlMaxHappy = getMaxHappy(girl);
                if (girlHappy > girl.dateHappy) {
                    //增加约会概率。
                    if (getRandomInteger(100) < 100) {
                        //约炮
                        var teamPlayerInfo = {};
                        teamPlayerInfo.id = teamPlayer.id;
                        teamPlayerInfo.picture = teamPlayer.picture;
                        girl.sexMans.push(teamPlayerInfo);
                        teamPlayer.happy += getDateHappy();
                    }
                }
                if (girl.husbandIndex == undefined) {
                    if (girlHappy >= girl.marriageHappy && girlHappy == girlMaxHappy) {
                        girl.marriageYears = 1;
                        girl.husbandIndex = teamPlayer.id;
                        teamPlayer.marriageYears = 1;
                        teamPlayer.happy += getMarriageHappy();
                        //拒绝其他球员。伤害其他球员。
                        for (var j = 0; j < girl.friends.length; j++) {
                            var friend = girl.friends[j];
                            if (friend.personId != teamPlayer.id) {
                                var otherTeamPlayer = getTeamPlayerFormLevelAndTeamIdAndPlayerId(friend.level, friend.teamId, friend.personId);
                                if (otherTeamPlayer != undefined) {
                                    otherTeamPlayer.girlIndex = undefined;
                                    //降低快乐
                                    otherTeamPlayer.happy -= getLoseLoveHappy(otherTeamPlayer);
                                }
                            }
                        }
                        girl.friends = [];
                        teamPlayer.wife = girl;
                        //从单身女性中剔除。
                        for (var i = 0; i < userTeam.singleGirlIndexes.length; i++) {
                            if (userTeam.singleGirlIndexes[i] == teamPlayer.girlIndex) {
                                userTeam.singleGirlIndexes.splice(i, 1);
                                break;
                            }
                        }
                        //然后增加一位女性
                        userTeam.girls.push(getGirl(getRandomInteger(PICTURE_COUNT_WOMAN)));
                        //单身里面也增加这个索引
                        userTeam.singleGirlIndexes.push(userTeam.girls.length - 1);
                        sendMailToTeam("[男]" + teamPlayer.name + "和[女]" + girl.name + "喜结连理！让我们祝福他们！", "" +
                            "<image src='image/marriage/marriage-" + getRandomInteger(PICTURE_COUNT_MARRIAGE) + ".jpg' />" +
                            "<image src='image/man/man-" + teamPlayer.picture + ".jpg' />" +
                            "<image src='image/woman/woman-" + girl.picture + ".jpg' />" +
                            ""
                        );
                    }
                }
            }
        }
    }
    return;
}

var getLoseLoveHappy = function (teamPlayer) {
    return max(50, teamPlayer.happy * 0.5);
}

var getDateHappy = function () {
    return getRandomInteger(100) / 100;
}

var getMarriageHappy = function () {
    return getRandomInteger(1000) / 10;
}

var getSingleIncreasePoints = function (peakAge, age, trainPoints, player) {
    var happy = player.happy;
    var potential = player.potential;
    var points = (peakAge - age) * (1 + happy) * trainPoints * potential;
    //======★★★★★★======
    return points;
    //100点以上，按10倍递减。
    if (points < 100) {
        return points;
    } else if (points < 1000) {
        return 100 + (points - 100) / 10;
    } else if (points < 10000) {
        return 190 + (points - 1000) / 100;
    } else if (points < 100000) {
        return 280 + (points - 10000) / 1000;
    } else if (points < 1000000) {
        return 370 + (points - 100000) / 10000;
    } else if (points < 10000000) {
        return 460 + (points - 1000000) / 100000;
    } else {
        return 550 + (points - 10000000) / 1000000;
    }
}

var getIncreasePoints = function (teamPlayer, teamStadium, playerCount, currentTeam) {
    var increasePoints = {};
    increasePoints.attack = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.attack, teamPlayer));
    increasePoints.defence = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.defence, teamPlayer));
    increasePoints.block = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.block, teamPlayer));
    increasePoints.intercept = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.intercept, teamPlayer));
    increasePoints.closingDown = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.closingDown, teamPlayer));
    increasePoints.defensive = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.defensive, teamPlayer));
    increasePoints.dribble = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.dribble, teamPlayer));
    increasePoints.goalKeeping = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.goalKeeping, teamPlayer));
    increasePoints.health = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.health, teamPlayer));
    increasePoints.offensive = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.offensive, teamPlayer));
    increasePoints.pass = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.pass, teamPlayer));
    increasePoints.shoot = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.shoot, teamPlayer));
    increasePoints.stamina = 0.0001 * getNumberRound(getSingleIncreasePoints(teamPlayer.peakAge, teamPlayer.age, teamStadium.train.stamina, teamPlayer));
    return increasePoints;
}

var increasePlayerAbility = function (teamPlayer, increasePoints, isYoung, currentTeam) {
    //受伤时没法训练。
    if (teamPlayer.recoverInjure > 0) {
        return;
    }
    var userTeam = getPageUserTeam();
    if (teamPlayer == undefined) {
        return;
    }
    if (teamPlayer.happy < 0) {
        //如果快乐小于0，则置成0
        teamPlayer.happy = 0;
    }
    if (teamPlayer.age <= teamPlayer.peakAge) {
        if (teamPlayer.name == undefined) {
            return;
        }
        if (teamPlayer.position == 0) {
            teamPlayer.attack += increasePoints.attack;
            teamPlayer.defence += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.defence;
            teamPlayer.block += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.block;
            teamPlayer.intercept += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.intercept;
            teamPlayer.closingDown += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.closingDown;
            teamPlayer.defensive += (1 + getRandomInteger(200) / 100) * increasePoints.defensive;
            teamPlayer.dribble += increasePoints.dribble;
            teamPlayer.goalKeeping += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.goalKeeping;
            teamPlayer.health += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.health;
            teamPlayer.offensive += increasePoints.offensive;
            teamPlayer.pass += increasePoints.pass;
            teamPlayer.shoot += increasePoints.shoot;
            teamPlayer.stamina += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.stamina;
        }
        if (teamPlayer.position == 1) {
            teamPlayer.attack += increasePoints.attack;
            teamPlayer.defence += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.defence;
            teamPlayer.block += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.block;
            teamPlayer.intercept += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.intercept;
            teamPlayer.closingDown += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.closingDown;
            teamPlayer.defensive += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.defensive;
            teamPlayer.dribble += increasePoints.dribble;
            teamPlayer.goalKeeping += increasePoints.goalKeeping;
            teamPlayer.health += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.health;
            teamPlayer.offensive += increasePoints.offensive;
            teamPlayer.pass += increasePoints.pass;
            teamPlayer.shoot += increasePoints.shoot;
            teamPlayer.stamina += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.stamina;
        }
        if (teamPlayer.position == 2) {
            teamPlayer.attack += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.attack;
            teamPlayer.defence += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.defence;
            teamPlayer.block += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.block;
            teamPlayer.intercept += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.intercept;
            teamPlayer.closingDown += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.closingDown;
            teamPlayer.defensive += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.defensive;
            teamPlayer.dribble += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.dribble;
            teamPlayer.goalKeeping += increasePoints.goalKeeping;
            teamPlayer.health += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.health;
            teamPlayer.offensive += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.offensive;
            teamPlayer.pass += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.pass;
            teamPlayer.shoot += 1.5 * (1 + getRandomInteger(200) / 100) * increasePoints.shoot;
            teamPlayer.stamina += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.stamina;
        }
        if (teamPlayer.position == 3) {
            teamPlayer.attack += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.attack;
            teamPlayer.defence += increasePoints.defence;
            teamPlayer.block += increasePoints.block;
            teamPlayer.intercept += increasePoints.intercept;
            teamPlayer.closingDown += increasePoints.closingDown;
            teamPlayer.defensive += increasePoints.defensive;
            teamPlayer.dribble += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.dribble;
            teamPlayer.goalKeeping += increasePoints.goalKeeping;
            teamPlayer.health += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.health;
            teamPlayer.offensive += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.offensive;
            teamPlayer.pass += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.pass;
            teamPlayer.shoot += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.shoot;
            teamPlayer.stamina += 2 * (1 + getRandomInteger(200) / 100) * increasePoints.stamina;
        }
        teamPlayer.attack = teamPlayer.attack < 0 ? 0 : teamPlayer.attack;
        teamPlayer.defence = teamPlayer.defence < 0 ? 0 : teamPlayer.defence;
        teamPlayer.block = teamPlayer.block < 0 ? 0 : teamPlayer.block;
        teamPlayer.intercept = teamPlayer.intercept < 0 ? 0 : teamPlayer.intercept;
        teamPlayer.closingDown = teamPlayer.closingDown < 0 ? 0 : teamPlayer.closingDown;
        teamPlayer.defensive = teamPlayer.defensive < 0 ? 0 : teamPlayer.defensive;
        teamPlayer.dribble = teamPlayer.dribble < 0 ? 0 : teamPlayer.dribble;
        teamPlayer.goalKeeping = teamPlayer.goalKeeping < 0 ? 0 : teamPlayer.goalKeeping;
        teamPlayer.health = teamPlayer.health < 0 ? 0 : teamPlayer.health;
        teamPlayer.offensive = teamPlayer.offensive < 0 ? 0 : teamPlayer.offensive;
        teamPlayer.pass = teamPlayer.pass < 0 ? 0 : teamPlayer.pass;
        teamPlayer.shoot = teamPlayer.shoot < 0 ? 0 : teamPlayer.shoot;
        teamPlayer.stamina = teamPlayer.stamina < 0 ? 0 : teamPlayer.stamina;
        if (currentTeam.teamInfo.id == userTeam.config.teamId) {
            sendMailToTeam("你的" + (isYoung == undefined ? "正式" : "青年") + "球员" +
                " " + PLAYER_POSITIONS[teamPlayer.position] + " " +
                "[" + teamPlayer.name + "]能力有了提高！", "" +
                "<image src='image/man/man-" + teamPlayer.picture + ".jpg' style='float:left;margin-right:12px;'  />" +
                "[" + teamPlayer.name + "] " + PLAYER_POSITIONS[teamPlayer.position] +
                "<br/>年龄 " + teamPlayer.age + "岁 巅峰年龄" + teamPlayer.peakAge + "岁 退休年龄" + teamPlayer.retireAge + "岁" +
                "<br/>攻击 增加了 " + getNumberRound(increasePoints.attack) + " 目前是" + getNumberRound(teamPlayer.attack) +
                "<br/>防守 增加了 " + getNumberRound(increasePoints.defence) + " 目前是" + getNumberRound(teamPlayer.defence) +
                "<br/>封堵射门 增加了 " + getNumberRound(increasePoints.block) + " 目前是" + getNumberRound(teamPlayer.block) +
                "<br/>拦截传球 增加了 " + getNumberRound(increasePoints.intercept) + " 目前是" + getNumberRound(teamPlayer.intercept) +
                "<br/>逼抢 增加了 " + getNumberRound(increasePoints.closingDown) + " 目前是" + getNumberRound(teamPlayer.closingDown) +
                "<br/>盯人 增加了 " + getNumberRound(increasePoints.defensive) + " 目前是" + getNumberRound(teamPlayer.defensive) +
                "<br/>过人 增加了 " + getNumberRound(increasePoints.dribble) + " 目前是" + getNumberRound(teamPlayer.dribble) +
                "<br/>守门 增加了 " + getNumberRound(increasePoints.goalKeeping) + " 目前是" + getNumberRound(teamPlayer.goalKeeping) +
                "<br/>健康 增加了 " + getNumberRound(increasePoints.health) + " 目前是" + getNumberRound(teamPlayer.health) +
                "<br/>无球跑动 增加了 " + getNumberRound(increasePoints.offensive) + " 目前是" + getNumberRound(teamPlayer.offensive) +
                "<br/>传球 增加了 " + getNumberRound(increasePoints.pass) + " 目前是" + getNumberRound(teamPlayer.pass) +
                "<br/>射门 增加了 " + getNumberRound(increasePoints.shoot) + " 目前是" + getNumberRound(teamPlayer.shoot) +
                "<br/>耐力 增加了 " + getNumberRound(increasePoints.stamina) + " 目前是" + getNumberRound(teamPlayer.stamina)
            )
        }
    } else {
        if (teamPlayer.name == undefined) {
            return;
        }
        teamPlayer.attack -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.defence -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.block -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.intercept -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.closingDown -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.defensive -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.dribble -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.goalKeeping -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.health -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.offensive -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.pass -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.shoot -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.stamina -= 0.01 * (teamPlayer.age - teamPlayer.peakAge);
        teamPlayer.attack = teamPlayer.attack < 0 ? 0 : teamPlayer.attack;
        teamPlayer.defence = teamPlayer.defence < 0 ? 0 : teamPlayer.defence;
        teamPlayer.block = teamPlayer.block < 0 ? 0 : teamPlayer.block;
        teamPlayer.intercept = teamPlayer.intercept < 0 ? 0 : teamPlayer.intercept;
        teamPlayer.closingDown = teamPlayer.closingDown < 0 ? 0 : teamPlayer.closingDown;
        teamPlayer.defensive = teamPlayer.defensive < 0 ? 0 : teamPlayer.defensive;
        teamPlayer.dribble = teamPlayer.dribble < 0 ? 0 : teamPlayer.dribble;
        teamPlayer.goalKeeping = teamPlayer.goalKeeping < 0 ? 0 : teamPlayer.goalKeeping;
        teamPlayer.health = teamPlayer.health < 0 ? 0 : teamPlayer.health;
        teamPlayer.offensive = teamPlayer.offensive < 0 ? 0 : teamPlayer.offensive;
        teamPlayer.pass = teamPlayer.pass < 0 ? 0 : teamPlayer.pass;
        teamPlayer.shoot = teamPlayer.shoot < 0 ? 0 : teamPlayer.shoot;
        teamPlayer.stamina = teamPlayer.stamina < 0 ? 0 : teamPlayer.stamina;
        if (currentTeam.teamInfo.id == userTeam.config.teamId) {
            sendMailToTeam("你的球员" +
                " " + PLAYER_POSITIONS[teamPlayer.position] + " " +
                "[" + teamPlayer.name + "]能力降低了！", "" +
                "<image src='image/man/man-" + teamPlayer.picture + ".jpg' style='float:left;margin-right:12px;' />" +
                "[" + teamPlayer.name + "] " + PLAYER_POSITIONS[teamPlayer.position] +
                "<br/>年龄 " + teamPlayer.age + "岁 巅峰年龄" + teamPlayer.peakAge + "岁 退休年龄" + teamPlayer.retireAge + "岁" +
                "<br/>攻击 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.attack) +
                "<br/>防守 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.defence) +
                "<br/>封堵射门 减少了 " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.block) +
                "<br/>拦截传球 减少了 " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.intercept) +
                "<br/>逼抢 减少了 " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.closingDown) +
                "<br/>盯人 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.defensive) +
                "<br/>过人 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.dribble) +
                "<br/>守门 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.goalKeeping) +
                "<br/>健康 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.health) +
                "<br/>无球跑动 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.offensive) +
                "<br/>传球 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.pass) +
                "<br/>射门 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.shoot) +
                "<br/>耐力 减少了  " + (0.01 * (teamPlayer.age - teamPlayer.peakAge)) + " 目前是" + getNumberRound(teamPlayer.stamina)
            )
        }
    }
    return;
}

var hospitalPlayer = function (currentTeam) {
    //医疗球员，恢复球员耐力
    var teamPlayers = currentTeam.teamPlayers;
    var teamStadium = currentTeam.teamStadium;
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        teamPlayer.recoverInjure -= getHospitalRecoverInjure(teamStadium.hospital.recoverInjure);
        if (teamPlayer.recoverInjure < 0) {
            teamPlayer.recoverInjure = 0;
        }
        teamPlayer.recoverStamina -= getHospitalRecoverStamina(teamStadium.hospital.recoverStamina);
        if (teamPlayer.recoverStamina < 0) {
            teamPlayer.recoverStamina = 0;
        }
    }
    return;
}

var getHospitalRecoverStamina = function (recoverStamina) {
    //恢复疲劳效果是：100点+0.1，100-1000+0.01，1000-10000+0.001，10000+0.0001
    if (recoverStamina <= 100) {
        return recoverStamina * 0.1;
    } else if (recoverStamina <= 1000) {
        return (recoverStamina - 100) * 0.01 + 10;
    } else if (recoverStamina <= 10000) {
        return (recoverStamina - 1000) * 0.001 + 19;
    } else if (recoverStamina > 10000) {
        return (recoverStamina - 10000) * 0.0001 + 28;
    }
    return;
}


var getHospitalRecoverInjure = function (recoverInjure) {
    //治疗效果是：100点+0.1，100-1000+0.01，1000-10000+0.001，10000+0.0001
    if (recoverInjure <= 100) {
        return recoverInjure * 0.1;
    } else if (recoverInjure <= 1000) {
        return (recoverInjure - 100) * 0.01 + 10;
    } else if (recoverInjure <= 10000) {
        return (recoverInjure - 1000) * 0.001 + 19;
    } else if (recoverInjure > 10000) {
        return (recoverInjure - 10000) * 0.0001 + 28;
    }
    return;
}

var sellPlayer = function (currentTeam) {
    var userTeam = getPageUserTeam();
    //卖出价值最低的球员
    var teamPlayers = currentTeam.teamPlayers;
    var teamPlayerMinTransferMoney = 1000000000000;
    var minPlayerIndex = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0) {
            if (teamPlayer.transferMoney < teamPlayerMinTransferMoney) {
                minPlayerIndex = i;
                teamPlayerMinTransferMoney = teamPlayer.transferMoney;
            }
        }
    }
    if (teamPlayerMinTransferMoney < 1000000000000) {
        //转会市场，高级别禁止流入低级别。
        //转会市场，低级别禁止流入高级版。
        if (currentTeam.teamInfo.level == getUserCurrentTeam().teamInfo.level) {
            //PC卖了球员进入转会市场。
            //转会市场永久不刷新。
            var teamPlayer = teamPlayers[minPlayerIndex];
            var position = teamPlayer.position;
            var transferTeamPlayers = getGamePositionBuyPlayers("buy_players_position_" + position);
            if (transferTeamPlayers == undefined) {
                transferTeamPlayers = getTransferMarketTeamPlayers(position);
            }
            //把已比赛周数清零，加入转会市场
            teamPlayer.playGames = 0;
            transferTeamPlayers.push(teamPlayer);
            setGamePositionBuyPlayers("buy_players_position_" + position, transferTeamPlayers);
        }
        teamPlayers.splice(minPlayerIndex, 1);
        currentTeam.bankInfo.money += (1 - SELLER_PLAYER_TAX / 100) * parseFloat(teamPlayerMinTransferMoney);
    }
    return;
}

var buyPlayer = function (currentTeam) {
    //动态买球员
    //遍历拿到首发和替补
    var teamPlayers = currentTeam.teamPlayers;
    var lineUpCount = 0;
    var lineUpBackupCount = 0
    var lineUpGk = 0;
    var lineUpBackupGk = 0;
    //遍历拿到GK和首发数量
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0) {
            if (teamPlayer.lineUp == 1) {
                if (teamPlayer.position == 0) {
                    lineUpGk = 1;
                } else {
                    lineUpCount += 1;
                }
            }
            if (teamPlayer.lineUp == 2) {
                if (teamPlayer.position == 0) {
                    lineUpBackupGk = 1;
                } else {
                    lineUpBackupCount += 1;
                }
            }
        }
    }
    //遍历拿到年青守门球员的列表
    var youngTeamPlayers = currentTeam.youngTeamPlayers;
    var gkYongTeamPlayers = [];
    var matchYongTeamPlayers = [];
    for (var i = 0; i < youngTeamPlayers.length; i++) {
        var youngTeamPlayer = youngTeamPlayers[i];
        if (youngTeamPlayer.position == POSITION_GOOLKEEPER) {
            if (hasPassTeamPlayerLevel(youngTeamPlayer, currentTeam.teamInfo.level)) {
                youngTeamPlayer.index = i;
                youngTeamPlayer.salaryWeek = getSalaryWeek(youngTeamPlayer, currentTeam.teamInfo.level);
                gkYongTeamPlayers.push(youngTeamPlayer);
            }
        }
    }
    //遍历拿到年青其他球员的列表
    for (var i = 0; i < youngTeamPlayers.length; i++) {
        var youngTeamPlayer = youngTeamPlayers[i];
        if (youngTeamPlayer.position != POSITION_GOOLKEEPER) {
            if (hasPassTeamPlayerLevel(youngTeamPlayer, currentTeam.teamInfo.level)) {
                youngTeamPlayer.index = i;
                youngTeamPlayer.salaryWeek = getSalaryWeek(youngTeamPlayer, currentTeam.teamInfo.level);
                matchYongTeamPlayers.push(youngTeamPlayer);
            }
        }
    }
    //没有gk，要雇佣一个gk
    if (lineUpGk == 0) {
        //如果有可用年青球员，则签一个年青门将。
        if (gkYongTeamPlayers.length > 0) {
            var youngTeamPlayer = gkYongTeamPlayers.splice(0, 1)[0];
            youngTeamPlayers.splice(youngTeamPlayer.index, 1);
            youngTeamPlayer.index = undefined;
            youngTeamPlayer.salaryWeek = getSalaryWeek(youngTeamPlayer, currentTeam.teamInfo.level);
            youngTeamPlayer.transferMoney = getTransferMoney(youngTeamPlayer, currentTeam.teamInfo.level);
            //签年青球员不用花费
            //currentTeam.bankInfo.money -= youngTeamPlayer.transferMoney;
            teamPlayers.push(youngTeamPlayer);
        } else {
            //签转会球员要花费
            var transferTeamPlayer = getRandomPlayerWithLevelWithBaseValue(currentTeam.teamInfo.level, 0, 0, 13);
            currentTeam.bankInfo.money -= transferTeamPlayer.transferMoney;
            teamPlayers.push(transferTeamPlayer);
        }
    }
    if (lineUpBackupGk == 0) {
        //没有后备gk，要雇佣一个gk
        //如果有可用年青球员，则签一个年青门将。
        if (gkYongTeamPlayers.length > 0) {
            var youngTeamPlayer = gkYongTeamPlayers.splice(0, 1)[0];
            youngTeamPlayers.splice(youngTeamPlayer.index, 1);
            youngTeamPlayer.index = undefined;
            youngTeamPlayer.transferMoney = getTransferMoney(youngTeamPlayer, currentTeam.teamInfo.level);
            youngTeamPlayer.salaryWeek = getSalaryWeek(youngTeamPlayer, currentTeam.teamInfo.level);
            teamPlayers.push(youngTeamPlayer);
            currentTeam.bankInfo.money -= youngTeamPlayer.transferMoney;
        } else {
            //签转会球员要花费
            var transferTeamPlayer = getRandomPlayerWithLevelWithBaseValue(currentTeam.teamInfo.level, 0, 0, 13);
            teamPlayers.push(transferTeamPlayer);
            currentTeam.bankInfo.money -= transferTeamPlayer.transferMoney;
        }
    }
    for (var i = 0; i < 13 + 1 - lineUpCount - lineUpBackupCount; i++) {
        //把高水平的年青球员雇佣。
        if (matchYongTeamPlayers.length > 0) {
            var youngTeamPlayer = matchYongTeamPlayers.splice(0, 1)[0];
            youngTeamPlayers.splice(youngTeamPlayer.index, 1);
            youngTeamPlayer.index = undefined;
            youngTeamPlayer.transferMoney = getTransferMoney(youngTeamPlayer, currentTeam.teamInfo.level);
            youngTeamPlayer.salaryWeek = getSalaryWeek(youngTeamPlayer, currentTeam.teamInfo.level);
            teamPlayers.push(youngTeamPlayer);
        } else {
            //随机购买一名高水平球员
            var teamPlayer = getRandomPlayerWithLevelWithBaseValue(currentTeam.teamInfo.level, 1 + getRandomInteger(3), 0, 13);
            teamPlayers.push(teamPlayer);
            currentTeam.bankInfo.money -= teamPlayer.transferMoney;
        }
    }
    return;
}

var hasPassTeamPlayerLevel = function (yongTeamPlayer, level) {
    if (getPlayerAbilityWithoutAge(yongTeamPlayer) > getPlayerAbilityValue(level) * 10) {
        return true;
    }
    return false;
}

var adjustTeamInjure = function (currentTeam) {
    //动态调整伤病
    var teamPlayers = currentTeam.teamPlayers;
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        teamPlayer.recoverInjure -= 1;
        if (teamPlayer.recoverInjure <= 0) {
            teamPlayer.recoverInjure = 0;
        }
        teamPlayer.recoverStamina -= 1;
        if (teamPlayer.recoverStamina <= 0) {
            teamPlayer.recoverStamina = 0;
        }
        //先把所有的首发标记清空。
        teamPlayer.lineUp = 0;
    }
    return;
}

var adjustTeamLineUp = function (currentTeam) {
    var userTeam = getPageUserTeam();
    if (currentTeam.teamInfo.id == userTeam.config.teamId) {
    }
    clearTeamLineUp(currentTeam);
    var teamPlayers = currentTeam.teamPlayers;
    var youngTeamPlayers = currentTeam.youngTeamPlayers;
    //动态调整阵型
    var gkLineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //先定GK
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0) {
            if (teamPlayer.position == 0) {
                teamPlayer.lineUp = 1;
                gkLineUpCount += 1;
                break;
            }
        }
    }
    if (gkLineUpCount < 1) {
        //首发球员不够了。
        //签下青年球员来做替补。
        for (var i = 0; i < youngTeamPlayers.length; i++) {
            var youngTeamPlayer = youngTeamPlayers[i];
            if (youngTeamPlayer.position == 0) {
                youngTeamPlayer.lineUp = 1;
                teamPlayers.push(youngTeamPlayer);
                youngTeamPlayers.splice(i, 1);
                break;
            }
        }
    }
    var lineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置首发球员
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0) {
            if (teamPlayer.position != 0) {
                teamPlayer.lineUp = 1;
                lineUpCount += 1;
                if (lineUpCount >= 10) {
                    break;
                }
            }
        }
    }
    if (lineUpCount < 10) {
        //首发球员不够了。
        //签下青年球员来做替补。
        var makeupNeedCount = 10 - lineUpCount;
        var makeupCount = 0;
        for (var i = 0; i < youngTeamPlayers.length; i++) {
            var youngTeamPlayer = youngTeamPlayers[i];
            if (youngTeamPlayer.position != 0) {
                youngTeamPlayer.lineUp = 1;
                teamPlayers.push(youngTeamPlayer);
                youngTeamPlayers.splice(i, 1);
                makeupCount += 1;
                if (makeupCount >= makeupNeedCount) {
                    break;
                }
            }
        }
    }
    var gkLineUpBackupCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置替补门将
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0) {
            if (teamPlayer.position == 0 && teamPlayer.lineUp != 1) {
                teamPlayer.lineUp = 2;
                gkLineUpBackupCount += 1;
                break;
            }
        }
    }
    if (gkLineUpBackupCount < 1) {
        //首发球员不够了。
        //签下青年球员来做替补。
        for (var i = 0; i < youngTeamPlayers.length; i++) {
            var youngTeamPlayer = youngTeamPlayers[i];
            if (youngTeamPlayer.position == 0) {
                youngTeamPlayer.lineUp = 2;
                teamPlayers.push(youngTeamPlayer);
                youngTeamPlayers.splice(i, 1);
                break;
            }
        }
    }
    var lineUpBackupCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置替补其他球员
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0) {
            if (teamPlayer.position != 0 && teamPlayer.lineUp != 1) {
                teamPlayer.lineUp = 2;
                lineUpBackupCount += 1;
                if (lineUpBackupCount >= 4) {
                    break;
                }
            }
        }
    }
    if (lineUpBackupCount < 4) {
        //替补球员不够了。
        //签下青年球员来做替补。
        var makeupNeedCount = 4 - lineUpCount;
        var makeupCount = 0;
        for (var i = 0; i < youngTeamPlayers.length; i++) {
            var youngTeamPlayer = youngTeamPlayers[i];
            if (youngTeamPlayer.position != 0) {
                youngTeamPlayer.lineUp = 1;
                teamPlayers.push(youngTeamPlayer);
                youngTeamPlayers.splice(i, 1);
                makeupCount += 1;
                if (makeupCount >= makeupNeedCount) {
                    break;
                }
            }
        }
    }
    return;
}

var clearTeamLineUp = function (currentTeam) {
    var teamPlayers = currentTeam.teamPlayers;
    //清除所有球员位置
    var userTeam = getPageUserTeam();
    if (currentTeam.teamInfo.id != userTeam.config.teamId) {
        for (var i = 0; i < teamPlayers.length; i++) {
            var teamPlayer = teamPlayers[i];
            teamPlayer.lineUp = 0;
        }
    } else {
        for (var i = 0; i < teamPlayers.length; i++) {
            var teamPlayer = teamPlayers[i];
            if (teamPlayer.recoverInjure > 0) {
                teamPlayer.lineUp = 0;
            }
        }
    }
    return;
}

var adjustBankInfo = function (currentTeam) {
    //电脑的银行要比玩家银行要好。可以延期收款。且可以无限借款发展球队。
    //调整银行情况
    if (currentTeam.bankInfo.money < 0) {
        currentTeam.bankInfo.moneyLoan += 2 * currentTeam.bankInfo.money * -1;
        currentTeam.bankInfo.moneyLoanLeftGames = currentTeam.bankInfo.moneyLoanLeftGames == 0 ? TEAM_COUNT_DEFAULT_VALUE * 2 - 2 : currentTeam.bankInfo.moneyLoanLeftGames;
        currentTeam.bankInfo.money = 0;
    }
    return;
}

var payBankInfoMoneyLoan = function (currentTeam) {
    //银行结算PC
    if (currentTeam.bankInfo.moneyLoanLeftGames == 0) {
        currentTeam.bankInfo.money -= currentTeam.bankInfo.moneyLoan;
        currentTeam.bankInfo.moneyLoan = 0;
    }
    return;
}

var payBankInfoMoneyLoanUserTeam = function (currentTeam) {
    //银行结算玩家
    //银行会记录玩家资金为负的次数。
    if (currentTeam.bankInfo.moneyLoanLeftGames == 0) {
        currentTeam.bankInfo.money -= currentTeam.bankInfo.moneyLoan;
        currentTeam.bankInfo.moneyLoan = 0;
        if (currentTeam.bankInfo.money < 0) {
            if (currentTeam.bankInfo.negativeTimes == undefined) {
                currentTeam.bankInfo.negativeTimes = 1;
            } else {
                currentTeam.bankInfo.negativeTimes += 1;
            }
            currentTeam.bankInfo.negativeWaitGames = currentTeam.bankInfo.negativeTimes;
        }
    }
    return;
}

var loadHappyFrame = function () {
    closePopoutReference();
    var offset = $(".class-div-content-other").offset();
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-reference class-div-popout-reference-happy-frame' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + offset.left + "px;width:90%;height:766px;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopout()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td></td>" +
        "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:730px;overflow-y: scroll;'>";
    //玩家有赛前打假赛需求。
    mainHtml += getEncourageMoneyHtml();
    mainHtml += "</div>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var loadCorrectLineUp = function () {
    var userCurrentTeam = getUserCurrentTeam();
    var teamPlayers = userCurrentTeam.teamPlayers;
    for (var i = 0; i < teamPlayers.length; i++) {
        //先把所有的清零，然后再依次安排。
        var teamPlayer = teamPlayers[i];
        teamPlayer.lineUp = 0;
    }
    var lineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置首发门将
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0 && teamPlayer.position == 0 && teamPlayer.lineUp == 0) {
            teamPlayer.lineUp = 1;
            lineUpCount += 1;
        }
        if (lineUpCount >= 1) {
            break;
        }
    }
    lineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置首发门将和替补门将
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0 && teamPlayer.position > 0 && teamPlayer.lineUp == 0) {
            teamPlayer.lineUp = 1;
            lineUpCount += 1;
        }
        if (lineUpCount >= 10) {
            break;
        }
    }
    lineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置首发门将
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0 && teamPlayer.position == 0 && teamPlayer.lineUp == 0) {
            teamPlayer.lineUp = 2;
            lineUpCount += 1;
        }
        if (lineUpCount >= 1) {
            break;
        }
    }
    lineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        //设置首发门将和替补门将
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure == 0 && teamPlayer.position > 0 && teamPlayer.lineUp == 0) {
            teamPlayer.lineUp = 2;
            lineUpCount += 1;
        }
        if (lineUpCount >= 5 - 1) {
            break;
        }
    }
    loadGamePlayHtml();
}

var loadFakeFrame = function () {
    var userCurrentTeam = getUserCurrentTeam();
    if (userCurrentTeam.currentFake == undefined) {
        classButtonPlayGameClick();
        return;
    }
    closePopoutReference();
    //设置其他球队激励
    setOtherTeamEncourageMoney();
    var offset = $(".class-div-content-other").offset();
    var mainHtml = "<div " +
        "class='class-div-popout class-div-popout-reference class-div-popout-reference-happy-frame' " +
        "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + offset.left + "px;width:90%;height:766px;background-color:#000000;border-radius:6px;" +
        "' >";
    mainHtml += "<table onclick='closePopout()' class='class-table-100-percent-width'>";
    mainHtml += "<tr><td></td>" +
        "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
        "</tr></table>";
    mainHtml += "<div style='overflow-y: scroll;height:730px;overflow-y: scroll;'>";
    //玩家有赛前打假赛需求。
    mainHtml += getFakeMatchHtml();
    mainHtml += "</div>";
    mainHtml += "</div>";
    $("body").append(mainHtml);
    return;
}

var setOtherTeamEncourageMoney = function () {
    var userTeam = getPageUserTeam();
    setEncourageMoney(userTeam.upperTeams, userTeam);
    if (userTeam.lowerTeams != undefined) {
        setEncourageMoney(userTeam.lowerTeams, userTeam);
    }
    setEncourageMoney(userTeam.currentTeams, userTeam);
    updateUserTeamInThisPage(userTeam);
    return;
}

var setEncourageMoney = function (teams, userTeam) {
    if (teams == undefined) {
        return;
    }
    for (var i = 0; i < teams.length; i++) {
        var team = teams[i];
        var hasEncourage = false;
        if (team.currentEncourages != undefined) {
            for (var j = 0; j < team.currentEncourages.length; j++) {
                var encourage = team.currentEncourages[j];
                if (encourage.season == userTeam.config.season) {
                    if (encourage.games == team.teamInfo.games + 1) {
                        hasEncourage = true;
                        break;
                    }
                }
            }
        }
        if (hasEncourage == false) {
            //非玩家球队
            var happyMoney = 0;
            if (team.teamInfo.id != userTeam.config.teamId) {
                team.currentEncourages = [];
                //PC赛前发钱加快乐。
                increaseTeamHappyBySetPrizeBeforeMatch(team, userTeam, 0, 1);
                //PC赛前设置进球队员奖金，球队赢球奖金,增加快乐。
                for (var k = 1; k < ENCOURAGE_TYPES.length; k++) {
                    increaseTeamHappyBySetPrizeBeforeMatch(team, userTeam, k, 0);
                }
            }
        }
    }
    return;
}

var increaseTeamHappyBySetPrizeBeforeMatch = function (team, userTeam, i, giveMoney, happyMoney) {
    if (happyMoney == undefined) {
        //球队排名垫底的2只球队。赛前拿出1-2*Level来砸球队快乐。
        if (team.teamInfo.rank >= TEAM_COUNT_DEFAULT_VALUE - 1) {
            happyMoney = 10000000 * team.teamInfo.level * (100 + getRandomInteger(100)) / 100;
        } else {
            //其他的是随机砸金额，单场1-2*level来砸球队快乐。
            happyMoney = 1000000 * team.teamInfo.level * (100 + getRandomInteger(100)) / 100;
        }
    }
    increaseTeamHappy(team, happyMoney, giveMoney);
    if (team.encourages == undefined) {
        team.encourages = [];
    }
    if (team.currentEncourages == undefined) {
        team.currentEncourages = [];
    }
    var encourage = {};
    encourage.id = "ENC" + getId();
    encourage.money = happyMoney * ENCOURAGE_RATIOS[i];
    encourage.games = team.teamInfo.games + 1;
    encourage.season = userTeam.config.season;
    encourage.type = i;
    team.encourages.push(encourage);
    team.currentEncourages.push(encourage);
}

var increaseTeamHappy = function (team, happyMoney, giveMoney) {
    if (giveMoney == undefined || giveMoney == 1) {
        team.bankInfo.money -= happyMoney;
    }
    var happy = happyMoney / (team.teamInfo.level * 10000);
    for (var j = 0; j < team.teamPlayers.length; j++) {
        var teamPlayer = team.teamPlayers[j];
        teamPlayer.happy += getRandomInteger(happy) / 100;
        if (giveMoney == undefined || giveMoney == 1) {
            teamPlayer.money += getNumberRound(happyMoney / team.teamPlayers.length);
        }
    }
    return;
}

var getEncourageMoneyHtml = function () {
    var userTeam = getPageUserTeam();
    var currentMatch = userTeam.currentMatch;
    var match = userTeam.currentMatchSchedules[currentMatch.games - 1].matches[currentMatch.matchIndex];
    var homeTeam = userTeam.currentTeams[match.homeIndex];
    var awayTeam = userTeam.currentTeams[match.awayIndex];
    var mainHtml = "";
    if (userTeam.config.teamId == match.homeTeamId) {
        //如果玩家是主队，则读出客队数据。
        mainHtml += "<table class='class-table-100-percent-width '>";
        mainHtml += getEncorageTeamHtml(homeTeam, match);
        mainHtml += getEncorageTeamHtml(awayTeam, match);
        mainHtml += "</table>";
    } else {
        mainHtml += "<table class='class-table-100-percent-width '>";
        mainHtml += getEncorageTeamHtml(homeTeam, match);
        mainHtml += getEncorageTeamHtml(awayTeam, match);
        mainHtml += "</table>";
    }
    return mainHtml;
}

var getEncorageTeamHtml = function (team, match) {
    var userTeam = getPageUserTeam();
    var mainHtml = "";
    mainHtml += "<tr><td width='50px;'>" + (match.homeTeamId == team.teamInfo.id ? "主队" : "客队") + "激励</td><td>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td>序号</td>" +
        "<td>激励类型</td>" +
        "<td>球队名称</td>" +
        "<td>激励编号</td>" +
        "<td>赛季</td>" +
        "<td>轮次</td>" +
        "<td>奖金</td>" +
        "<td>操作</td>" +
        "</tr>";
    var currentEncourages = team.currentEncourages;
    if (currentEncourages != undefined) {
        for (var i = 0; i < currentEncourages.length; i++) {
            var encourage = currentEncourages[i];
            mainHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + ENCOURAGE_TYPES[encourage.type] + "</td>" +
                "<td>" + team.teamInfo.name + "</td>" +
                "<td>" + encourage.id + "</td>" +
                "<td>" + encourage.season + "</td>" +
                "<td>" + encourage.games + "</td>" +
                "<td>" + getFormatNumberWithThousand(encourage.money) + "</td>" +
                "<td></td>" +
                "</tr>";
        }
    } else {
        for (var i = 0; i < ENCOURAGE_TYPES.length; i++) {
            mainHtml += "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + ENCOURAGE_TYPES[i] + "</td>" +
                "<td>" + team.teamInfo.name + "</td>" +
                "<td></td>" +
                "<td>" + userTeam.config.season + "</td>" +
                "<td>" + match.games + "</td>" +
                "<td><select class='class-input-encourage-type-" + i + "' " +
                "title='请输入" + ENCOURAGE_TYPES[i] + getEncourageTypeDescription(i) + "' " +
                "style='width:100%;' " +
                ">" +
                "<option>0</option>" +
                "<option>" + match.level * 3 * 100000 + "</option>" +
                "<option>" + match.level * 3 * 200000 + "</option>" +
                "<option>" + match.level * 3 * 300000 + "</option>" +
                "<option>" + match.level * 3 * 500000 + "</option>" +
                "<option>" + match.level * 3 * 600000 + "</option>" +
                "<option>" + match.level * 3 * 700000 + "</option>" +
                "<option>" + match.level * 3 * 800000 + "</option>" +
                "<option>" + match.level * 3 * 900000 + "</option>" +
                "<option>" + match.level * 3 * 1000000 + "</option>" +
                "<option>" + match.level * 3 * 1100000 + "</option>" +
                "<option>" + match.level * 3 * 1200000 + "</option>" +
                "<option>" + match.level * 3 * 1300000 + "</option>" +
                "<option>" + match.level * 3 * 1500000 + "</option>" +
                "<option>" + match.level * 3 * 1600000 + "</option>" +
                "<option>" + match.level * 3 * 1700000 + "</option>" +
                "<option>" + match.level * 3 * 1800000 + "</option>" +
                "<option>" + match.level * 3 * 1900000 + "</option>" +
                "<option>" + match.level * 3 * 2000000 + "</option>" +
                "</select></td>" +
                "<td class='class-td-button class-td-button-confirm-encourage' type='" + i + "' onclick='confirmEncourage(this)'>确定</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    mainHtml += "</td></tr>";
    return mainHtml;
}

var getEncourageTypeDescription = function (i) {
    if (i == 2) {
        return "，按每个净胜球发奖金。";
    }
    if (i == 5) {
        return "，请设置成要比胜利奖金低";
    }
    return "";
}

var confirmEncourage = function (object) {
    var type = $(object).attr("type");
    var money = $(".class-input-encourage-type-" + type).val();
    if (undefined == money || money == "") {
        showAlertFrameGame("请输入金额，确定后，窗口关闭则没法继续输入了。");
        return;
    }
    if (isNaN(parseFloat(money))) {
        showAlertFrameGame("金额数字不对。");
        $(".class-input-encourage-type-" + type).val("");
        $(".class-input-encourage-type-" + type).focus();
        return;
    }
    var userTeam = getPageUserTeam();
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    if (team.bankInfo.money < money) {
        showAlertFrameGame("你钱不够支付。");
        return;
    }
    $(".class-input-encourage-type-" + type).hide();
    $(".class-input-encourage-type-" + type).parent().html(money);
    if (type == 0) {
        increaseTeamHappyBySetPrizeBeforeMatch(team, userTeam, type, 1, money);
    } else {
        increaseTeamHappyBySetPrizeBeforeMatch(team, userTeam, type, 0, money);
    }
    updateUserTeamInThisPage(userTeam);
    return;
}

var getWinMatchHappy = function () {
    return getRandomInteger(100) / 200;
}

var getLoseMatchHappy = function () {
    return getRandomInteger(100) / 100;
}

var getDrawMatchHappy = function () {
    return 0.51 - getRandomInteger(100) / 100;
}

var getStadiumHtml = function (currentTeam) {
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td>足球场名称</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td>城市</td>" +
        "<td>县</td>" +
        "</tr>";
    //最终比分要展示
    mainHtml += "<tr>" +
        "<td>" + currentTeam.teamStadium.name + "</td>" +
        "<td>" + currentTeam.cityInfo.country + "</td>" +
        "<td>" + currentTeam.cityInfo.province + "</td>" +
        "<td class='class-td-button' onclick=" +
        "" +
        "" +
        "\"showMapQuery(" +
        "'" +
        "" + currentTeam.cityInfo.city +
        " " + currentTeam.cityInfo.county +
        "'" +
        "" +
        "" +
        ")\"" +
        ">" + currentTeam.cityInfo.city + "</td>" +
        "<td>" + currentTeam.cityInfo.county + "</td>" +
        "<td></td>" +
        "</tr>";
    mainHtml += "</table>";
    return mainHtml;
}

var setCurrentFakeResult = function (match, homeTeam, awayTeam) {
    if (homeTeam.currentFake != undefined) {
        //主队的假赛
        var fake = homeTeam.currentFake;
        //如果状态是已同意
        if (fake.status == FAKE_STATUS_CONFIRMED) {
            //如果比分合乎要求
            if (match.homeScore - match.awayScore <= 0 - fake.requireLoseScores) {
                fake.status = FAKE_STATUS_SUCCESS;
                homeTeam.bankInfo.money += fake.money;
                homeTeam.teamInfo.sponsorRelation += fake.sponsorRelation;
            } else {
                fake.status = FAKE_STATUS_FAIL;
                //如果失败要扣除失败金额
                homeTeam.bankInfo.money -= fake.notMeetRequirementLoseMoney;
            }
        } else {
            //报警了
            if (fake.status == FAKE_STATUS_CALL_POLICE) {
                policeCheck(homeTeam);
                homeTeam.teamInfo.sponsorRelation -= fake.sponsorRelation;
            }
            if (fake.status == FAKE_STATUS_WAIT_FOR_CONFIRM) {
                fake.status = FAKE_STATUS_EXPIRED;
            }
        }
        homeTeam.fakes.push(fake);
    }
    if (awayTeam.currentFake != undefined) {
        //客队的假赛
        var fake = awayTeam.currentFake;
        //如果状态是已同意
        if (fake.status == FAKE_STATUS_CONFIRMED) {
            //如果比分合乎要求
            if (match.awayScore - match.homeScore <= 0 - fake.requireLoseScores) {
                fake.status = FAKE_STATUS_SUCCESS;
                awayTeam.bankInfo.money += fake.money;
                awayTeam.teamInfo.sponsorRelation += fake.sponsorRelation;
            } else {
                fake.status = FAKE_STATUS_FAIL;
                //如果失败要扣除失败金额
                awayTeam.bankInfo.money -= fake.notMeetRequirementLoseMoney;
            }
        } else {
            //报警了
            if (fake.status == FAKE_STATUS_CALL_POLICE) {
                policeCheck(awayTeam);
                awayTeam.teamInfo.sponsorRelation -= fake.sponsorRelation;
            }
            if (fake.status == FAKE_STATUS_WAIT_FOR_CONFIRM) {
                fake.status = FAKE_STATUS_EXPIRED;
            }
        }
        awayTeam.fakes.push(fake);
    }
    homeTeam.currentFake = undefined;
    awayTeam.currentFake = undefined;
}

var getFake = function (season, games, level) {
    var fake = {};
    fake.id = "FAK" + getId();
    fake.name = getSingleRandomFirstName() + getSingleRandomFirstName() + "博彩有限公司";
    fake.picture = getRandomInteger(PICTURE_COUNT_MANAGER);
    fake.sponsorRelation = 1 + getRandomInteger(10);
    fake.money = level * (10000 + getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(getRandomInteger(9999999999999)))))))))))))));
    fake.notMeetRequirementLoseMoney = fake.money * 2;
    fake.risk = 1 + getRandomInteger(getRandomInteger(getRandomInteger(100)));
    fake.continueRisk = 1 + getRandomInteger(99);
    fake.requireLoseScores = 1 + getRandomInteger(5);
    fake.breakLoseHappy = getRandomInteger(10) + 1;
    fake.breakLosePoints = 6 + getRandomInteger(66);
    fake.breakLoseMoney = 66666 + fake.money * getRandomInteger(100) / 50;
    fake.games = games;
    fake.season = season;
    fake.status = FAKE_STATUS_WAIT_FOR_CONFIRM;
    return fake;
}

var setTeamsFake = function (teams) {
    if (teams == undefined) {
        return;
    }
    var userTeam = getPageUserTeam();
    for (var i = 0; i < teams.length; i++) {
        var team = teams[i];
        if (team.currentFake == undefined) {
            team.currentFake = getFake(userTeam.config.season, team.teamInfo.games + 1, team.teamInfo.level);
            if (team.teamInfo.id != userTeam.config.teamId) {
                //只有尾部11个会接受假球请求。
                if (team.teamInfo.rank >= 16) {
                    //50%概率会接受假球请求。
                    if (getRandomInteger(100) > 50) {
                        team.currentFake.status = FAKE_STATUS_CONFIRMED;
                    }
                }
            }
        }
    }
}

var setTeamsFakeForAll = function () {
    var userTeam = getPageUserTeam();
    //所有球队都接到打假赛的概率
    setTeamsFake(userTeam.upperTeams);
    setTeamsFake(userTeam.currentTeams);
    if (userTeam.lowerTeams != undefined) {
        setTeamsFake(userTeam.lowerTeams);
    }
}

var getFakeMatchHtml = function () {
    var userTeam = getPageUserTeam();
    var userCurrentTeam = getUserCurrentTeam();
    //打假赛一场比赛约500万-7500万资金。
    if (userCurrentTeam.currentFake != undefined) {
        //防止赞助刷新作弊。
        //TODO 是否要防止赞助刷新作弊
        updateUserTeamInThisPage(userTeam);
        //saveGameTimeOut(0);
    }
    var fake = userCurrentTeam.currentFake;
    if (fake == undefined) {
        return "";
    }
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td width='50px;'>假赛需求</td>" +
        "<td>";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr>" +
        "<td>假赛编号</td>" +
        "<td>赛季</td>" +
        "<td>轮次</td>" +
        "<td>赞助商名称</td>" +
        "<td>假赛人图片</td>" +
        "<td>赞助商友好增加</td>" +
        "<td>成功获取金钱</td>" +
        "<td>失败罚款金额</td>" +
        "<td>风险值</td>" +
        "<td>后续风险值</td>" +
        "<td>要求净丢球数</td>" +
        "<td>暴露后球员集体丧失快乐</td>" +
        "<td>暴露后球队会被扣除积分</td>" +
        "<td>暴露后球队会被罚款金额</td>" +
        "<td>状态</td>" +
        "<td colspan='3' style='text-align: center;'>操作</td>" +
        "</tr>";
    mainHtml += "<tr class='class-tr-fake-" + fake.status + "'>" +
        "<td>" + fake.id + "</td>" +
        "<td>" + fake.season + "</td>" +
        "<td>" + fake.games + "</td>" +
        "<td>" + fake.name + "</td>" +
        "<td>" + getPersonPicture(fake, "manager", "class-image-team-player-picture-small-in-list") + "</td>" +
        "<td>" + fake.sponsorRelation + "</td>" +
        "<td>" + getFormatNumberWithThousand(fake.money) + "</td>" +
        "<td>" + getFormatNumberWithThousand(fake.notMeetRequirementLoseMoney) + "</td>" +
        "<td>" + fake.risk + "%</td>" +
        "<td>" + fake.continueRisk + "%</td>" +
        "<td>" + fake.requireLoseScores + "</td>" +
        "<td>" + fake.breakLoseHappy + "</td>" +
        "<td>" + fake.breakLosePoints + "</td>" +
        "<td>" + getFormatNumberWithThousand(fake.breakLoseMoney) + "</td>" +
        "<td class='class-td-button-status'>" + FAKE_STATUSES[fake.status] + "</td>" +
        (fake.status == 0 ?
            "<td class='class-td-button class-td-button-action' onclick='acceptThisFake()'>同意(犯罪)</td>" +
            "<td class='class-td-button class-td-button-action' onclick='denyThisFake()'>拒绝(正义)</td>" +
            "<td class='class-td-button class-td-button-action' onclick='callPolice()'>报警(极端)</td>" : "<td colspan='3'></td>") +
        "</tr>";
    mainHtml += "</table></td></tr></table>";
    return mainHtml;
}

var acceptThisFake = function () {
    var userCurrentTeam = getUserCurrentTeam();
    userCurrentTeam.currentFake.status = FAKE_STATUS_CONFIRMED;
    $(".class-td-button-action").html("").removeClass("class-td-button");
    $(".class-td-button-status").html(FAKE_STATUSES[userCurrentTeam.currentFake.status]);
}

var denyThisFake = function () {
    var userCurrentTeam = getUserCurrentTeam();
    userCurrentTeam.currentFake.status = FAKE_STATUS_REFUSED;
    $(".class-td-button-action").html("").removeClass("class-td-button");
    $(".class-td-button-status").html(FAKE_STATUSES[userCurrentTeam.currentFake.status]);
}

var callPolice = function () {
    var userCurrentTeam = getUserCurrentTeam();
    userCurrentTeam.currentFake.status = FAKE_STATUS_CALL_POLICE;
    $(".class-td-button-action").html("").removeClass("class-td-button");
    $(".class-td-button-status").html(FAKE_STATUSES[userCurrentTeam.currentFake.status]);
}

var policeCheck = function (team) {
    var userTeam = getPageUserTeam();
    if (team.fakes.length == 0) {
        return;
    }
    for (var i = 0; i < team.fakes.length; i++) {
        var k = team.fakes.length - 1 - i;
        var fake = team.fakes[k];
        //只查成功状态的假赛案
        if (fake.status == FAKE_STATUS_SUCCESS) {
            if (getRandomInteger(100) < fake.risk) {
                //假赛暴露了
                //会记出场做假账
                var loseHealth = getRandomInteger(100);
                var accountant = team.accountant;
                var isFakePopout = false;
                if (accountant == undefined) {
                    isFakePopout = true;
                } else {
                    if (accountant.health > 0) {
                        accountant.health -= loseHealth;
                        if (getRandomInteger(100) > accountant.riskAccounting) {
                            isFakePopout = true;
                        } else {
                            //做假账成功
                            isFakePopout = false;
                            if (team.teamInfo.id == userTeam.config.teamId) {
                                sendMailToTeam("人民警察[" + getRandomName() + "]调查了你在" + fake.season + "赛季第" + fake.games + "周的一笔来历不明的巨额入账资金，共￥" + fake.money + "，但有惊无险的被会记[" + accountant.name + "]做假账给瞒了过去。这事不知道还能瞒多久。", "" +
                                    "" +
                                    "会计损耗生命力" + loseHealth +
                                    "");
                            }
                        }
                    }
                }
                //做假账失败了
                if (isFakePopout == true) {
                    //查出一个办理一起，不会全部办理。
                    if (team.teamInfo.id == userTeam.config.teamId) {
                        sendMailToTeam("人民警察[" + getRandomName() + "]调查了你在" + fake.season + "赛季第" + fake.games + "周的一笔来历不明的巨额入账资金，共￥" + fake.money + "，" +
                            "会记[" + accountant.name + "]做危机账务失败，会记体力还有" + accountant.health + "/100。你的足球队损失惨重",
                            "假赛暴露造成的损失有" +
                            "<br/>会计损耗生命力" + loseHealth +
                            "<br/>暴露后球员集体丧失快乐:" + fake.breakLoseHappy +
                            "<br/>暴露后球队被扣除积分:" + fake.breakLosePoints +
                            "<br/>暴露后球队被罚款金额:" + fake.breakLoseMoney
                        );
                    }
                    //假赛暴露后球队会被扣除积分
                    team.teamInfo.punishPoints += fake.breakLosePoints;
                    //暴露后球队会被罚款金额
                    team.bankInfo.money -= fake.breakLoseMoney;
                    fake.status = FAKE_STATUS_PUNISHED;
                    //假赛暴露后球员集体丧失快乐
                    for (var j = 0; j < team.teamPlayers.length; j++) {
                        team.teamPlayers[j].happy -= fake.breakLoseHappy;
                        if (team.teamPlayers[j].happy < 0) {
                            team.teamPlayers[j].happy = 0;
                        }
                    }
                }
            }
        }
        if (fake.status == FAKE_STATUS_SUCCESS) {
            fake.risk = fake.risk * fake.continueRisk / 100;
            //如果risk小于万分之一，则停止追查。
            if (fake.risk < 0.0001) {
                fake.risk = 0;
                fake.status = FAKE_STATUS_NO_MORE_CHECK;
            }
        }
    }
}

//TODO 有雇佣换个会计的功能。
//TODO 球员战斗心情分5级。加成是200%，150%，100%，66%，50%。
//TODO 比赛结束，留在比赛页面。
//TODO 球员增加防守的对应。

