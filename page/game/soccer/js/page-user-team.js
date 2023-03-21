var loadUserTeam = function () {
    $(".class-div-content").hide();
    // $(".class-div-content-user-team").show();
    $(".class-div-content-other").show();
    var userTeam = getPageUserTeam();
    if (userTeam == undefined) {
        var userTeamString = getLocalStorageItemGame("userTeam");
        if (userTeamString == undefined) {
            var mainHtml = "" +
                "<div>" +
                "<span>给球队取个名字吧 : </span>" +
                "<input type='text' value='" + getSingleRandomLastName() + getSingleRandomFirstName() + "' class='class-input-team-name-create class-input-short' />" +
                "<image src='image/common/common-random.png' style='cursor:pointer;width:20px;' onclick='setRandomName()'>" +
                "</div>" +
                "<div>" +
                "<span>你自己取个名字吧 : </span>" +
                "<input type='text' value='" + getRandomName() + "' class='class-input-chairman-name-create class-input-short' />" +
                "</div>" +
                "<div>" +
                "<span>你的年龄 : </span>" +
                "<select class='class-select-chairman-age-create class-input-short' >" +
                getOptionNumber(13, 99, 13 + getRandomInteger(76)) +
                "</select><span>岁</span>" +
                "</div>" +
                "<div><button class='class-button-team-name-create' onclick='buttonTeamNameCreate();'>下一步</button></div>" +
                "";
            $(".class-div-content-other").html(mainHtml);
            return;
        }
    }
    loadMainPageUserTeamHtml();
    return;
};

var buttonTeamNameCreate = function () {
    var userTeamString = getLocalStorageItemGame("userTeam");
    if (userTeamString == undefined) {
        var userTeam = {};
        var teamInfo = {};
        var name = $(".class-input-team-name-create").val();
        name = name.trim();
        if (name.length != 2) {
            showAlertFrameGame("球队名称请填入2个字(不算空格)");
            $(".class-input-team-name-create").focus();
            return;
        }
        if (name.indexOf("足球队") > 0) {
        } else {
            name = name + "足球队";
        }
        var chairmanName = $(".class-input-chairman-name-create").val();
        chairmanName = chairmanName.trim();
        if (chairmanName.length < 2) {
            showAlertFrameGame("你的名称请填入不少于2个字(不算空格)");
            $(".class-input-chairman-name-create").focus();
            return;
        }
        var chairmanAge = parseInt($(".class-select-chairman-age-create").val());
        initializeTeamsVersus(userTeam, 1);
        var config = {};
        config.teamIndex = TEAM_COUNT_DEFAULT_VALUE - 1;
        config.teamId = userTeam.currentTeams[config.teamIndex].teamInfo.id;
        userTeam.currentTeams[config.teamIndex].teamInfo.name = name;
        userTeam.currentTeams[config.teamIndex].chairman.name = chairmanName;
        var age = userTeam.currentTeams[config.teamIndex].chairman.age;
        userTeam.currentTeams[config.teamIndex].chairman.age = chairmanAge;
        userTeam.currentTeams[config.teamIndex].chairman.retireAge = age >= chairmanAge ? age + getRandomInteger(75 - age) + 1 : (chairmanAge > 75 ? 5 + getRandomInteger(10) + chairmanAge : chairmanAge + getRandomInteger(85 - chairmanAge) + 1);
        config.season = new Date().getFullYear();
        config.increaseTrainPoints = 1;
        config.increaseHospitalPoints = 1;
        userTeam.config = config;
        userTeam.girls = getGirls();
        userTeam.singleGirlIndexes = getSingleGirlIndexes();
        userTeam.cars = getCars();
        userTeam.houses = getHouses();
        userTeam.shop = getInitializeShop();
        initializeTeamSchedule(userTeam);
        updateUserTeamInThisPage(userTeam);
        loadMainPageUserTeamHtml();
        classButtonSaveGameClick();
        return;
    } else {
        loadUserTeam();
    }
};

var getSingleGirlIndexes = function () {
    var singleGirlIndexes = [];
    for (var i = 0; i < PICTURE_COUNT_WOMAN; i++) {
        singleGirlIndexes.push(i);
    }
    return singleGirlIndexes;
}

var getHouses = function () {
    var houses = [];
    for (var i = 0; i < PICTURE_COUNT_HOUSE; i++) {
        houses.push(getHouse(i));
    }
    return houses;
}

var getHouse = function (i) {
    var house = {};
    house.id = "HOU" + getId();
    house.name = getSingleRandomLastName() + getSingleRandomLastName() + "别墅";
    house.picture = i;
    house.money = 1000000 + i * 500000;
    return house;
}

var getCars = function () {
    var cars = [];
    for (var i = 0; i < PICTURE_COUNT_CAR; i++) {
        cars.push(getCar(i));
    }
    return cars;
}


var getCar = function (i) {
    var car = {};
    car.id = "CAR" + getId();
    car.name = getSingleRandomLastName() + getSingleRandomLastName() + "汽车";
    car.picture = i;
    car.money = 200000 + i * 100000;
    return car;
}

var getGirls = function () {
    var girls = [];
    for (var i = 0; i < PICTURE_COUNT_WOMAN; i++) {
        girls.push(getGirl(i));
    }
    return girls;
}

var getGirl = function (i) {
    var girl = {};
    girl.id = "GIR" + getId();
    girl.age = 15 + getRandomInteger(20);
    girl.marriageAge = girl.age + getRandomInteger(40 - girl.age);
    girl.dateHappy = 50 + getRandomInteger(500);
    girl.marriageHappy = girl.dateHappy + getRandomInteger(1000);
    girl.marriageYears = 0;
    girl.name = getRandomName();
    girl.picture = i;
    var cityInfo = getProvinceCityDistrictCountryLocation();
    girl.country = cityInfo.country;
    girl.province = cityInfo.province;
    girl.city = cityInfo.city;
    girl.county = cityInfo.county;
    girl.money = getRandomInteger(50000) * (girl.age - 15);
    girl.sexMans = [];
    girl.husbandIndex = undefined;
    girl.cars = [];
    girl.bornBabyPercent = getRandomInteger(90) + 10;
    if (girl.money > 200000) {
        girl.cars.push(getRandomInteger(min(PICTURE_COUNT_CAR, girl.money / 100000)));
    }
    girl.houses = [];
    if (girl.money > 1000000) {
        girl.houses.push(getRandomInteger(min(PICTURE_COUNT_HOUSE, girl.money / 500000)));
    }
    girl.sex = SEX_WOMAN;
    girl.friends = [];
    return girl;
}

var setRandomName = function () {
    $(".class-input-team-name-create").val(getSingleRandomLastName() + getSingleRandomFirstName());
    $(".class-input-chairman-name-create").val(getRandomName());
    $(".class-select-chairman-age-create").val(getRandomInteger(30) + 18);
}

var getOptionNumber = function (start, end, selectedIndex) {
    var mainHtml = "";
    for (var i = start; i < end; i++) {
        mainHtml += "<option " + (selectedIndex == i ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
    }
    return mainHtml;
}

var getChairman = function () {
    var chairman = {};
    chairman.id = "CHA" + getId();
    chairman.name = getRandomName();
    chairman.age = 20 + getRandomInteger(50);
    var maxAge = chairman.age > 50 ? chairman.age : 50;
    chairman.retireAge = maxAge + getRandomInteger(85 - maxAge) + 1;
    chairman.picture = getRandomInteger(PICTURE_COUNT_ACCOUNTANT);
    var cityInfo = getProvinceCityDistrictCountryLocation();
    chairman.country = cityInfo.country;
    chairman.province = cityInfo.province;
    chairman.city = cityInfo.city;
    chairman.county = cityInfo.county;
    chairman.hp = 1000;
    chairman.atk = 10;
    chairman.def = 10;
    chairman.gold = 0;
    chairman.exp = 0;
    return chairman;
}

var getAccountant = function () {
    var accountant = {};
    accountant.id = "ACC" + getId();
    accountant.name = getRandomName();
    accountant.age = 20 + getRandomInteger(50);
    var maxAge = accountant.age > 50 ? accountant.age : 50;
    accountant.retireAge = maxAge + getRandomInteger(75 - maxAge) + 1;
    accountant.riskAccounting = 1 + getRandomInteger(70);
    accountant.salaryWeek = 2000 + accountant.riskAccounting * 1000;
    accountant.money = accountant.salaryWeek * 50 * (accountant.age - 20);
    accountant.health = 100;
    accountant.picture = getRandomInteger(PICTURE_COUNT_ACCOUNTANT);
    var cityInfo = getProvinceCityDistrictCountryLocation();
    accountant.country = cityInfo.country;
    accountant.city = cityInfo.city;
    accountant.province = cityInfo.province;
    accountant.county = cityInfo.county;
    return accountant;
}

var initializeYoungTeamPlayer = function (userTeam, level) {
    var youngTeamPlayers = [];
    var count = YOUNG_PLAYER_YEAR_BASE_COUNT + getRandomInteger(36);
    for (var i = 0; i < count; i++) {
        youngTeamPlayers.push(getRandomYoungPlayerWithLevel(level));
    }
    userTeam.youngTeamPlayers = youngTeamPlayers;
}

var getPlayerPosition = function (position) {
    if (position == undefined) {
        if (getRandomInteger(11) == 0) {
            return 0;
        } else {
            return 1 + getRandomInteger(3);
        }
    }
    return position;
}

var getYoungPlayerAbilityValue = function (level) {
    return getRandomInteger(getRandomInteger(getRandomInteger(10))) + 3 * (level - 1);
}

var initializeTeamPlayer = function (userTeam, level) {
    var teamPlayers = [];
    teamPlayers.push(getRandomPlayerWithLevel(level, 0, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 1, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 1, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 1, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 2, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 2, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 2, 1));
    teamPlayers.push(getRandomPlayerWithLevel(level, 3, 1));
    for (var i = 0; i < 3; i++) {
        teamPlayers.push(getRandomPlayerWithLevel(level, 1 + getRandomInteger(3), 1));
    }
    teamPlayers.push(getRandomPlayerWithLevel(level, 0, 2));
    teamPlayers.push(getRandomPlayerWithLevel(level, 1, 2));
    teamPlayers.push(getRandomPlayerWithLevel(level, 1, 2));
    teamPlayers.push(getRandomPlayerWithLevel(level, 2, 2));
    teamPlayers.push(getRandomPlayerWithLevel(level, 3, 2));
    for (var i = 0; i < 10; i++) {
        teamPlayers.push(getRandomPlayerWithLevel(level));
    }
    userTeam.teamPlayers = teamPlayers;
};

var initializeTeamStadium = function (userTeam, level) {
    var teamStadium = {};
    teamStadium.id = "STA" + getId();
    teamStadium.name = getSingleRandomLastName() + getSingleRandomFirstName() + "足球馆";
    teamStadium.capacity = getRandomLevelValueCustom(level + 1, STADIUM_CAPACITY_LEVEL_VALUE);
    teamStadium.ticketPrice = 1 + getRandomLevelSquareValue(level);
    teamStadium.fansCount = getRandomLevelValueCustom(level, FANS_COUNT_LEVEL_VALUE);
    var train = {};
    train.picture = getRandomInteger(PICTURE_COUNT_WOMAN);
    // train.personCount = getRandomLevelSquareValue(level);
    train.offensive = getRandomLevelSquareValue(level);
    train.defensive = getRandomLevelSquareValue(level);
    train.shoot = getRandomLevelSquareValue(level);
    train.pass = getRandomLevelSquareValue(level);
    train.dribble = getRandomLevelSquareValue(level);
    train.attack = getRandomLevelSquareValue(level);
    train.defence = getRandomLevelSquareValue(level);
    train.block = getRandomLevelSquareValue(level);
    train.intercept = getRandomLevelSquareValue(level);
    train.closingDown = getRandomLevelSquareValue(level);
    train.health = getRandomLevelSquareValue(level);
    train.stamina = getRandomLevelSquareValue(level);
    train.goalKeeping = getRandomLevelSquareValue(level);
    teamStadium.train = train;
    var hospital = {};
    hospital.picture = getRandomInteger(PICTURE_COUNT_WOMAN);
    hospital.recoverStamina = getRandomLevelSquareValue(level);
    hospital.recoverInjure = getRandomLevelSquareValue(level);
    teamStadium.hospital = hospital;
    userTeam.teamStadium = teamStadium;
};

var initializeTeamsVersus = function (userTeam, level) {
    var lowerTeams = userTeam.lowerTeams;
    if (lowerTeams == undefined) {
        if (level > 1) {
            userTeam.lowerTeams = getInitializeTeamWithLevel(level - 1, TEAM_COUNT_DEFAULT_VALUE);
        }
    }
    var upperTeams = userTeam.upperTeams;
    if (upperTeams == undefined) {
        userTeam.upperTeams = getInitializeTeamWithLevel(level + 1, TEAM_COUNT_DEFAULT_VALUE);
    }
    userTeam.currentTeams = getInitializeTeamWithLevel(level, TEAM_COUNT_DEFAULT_VALUE);
};

var getInitializeShop = function () {
    var shop = {};
    var products = [];
    for (var i = 0; i < PICTURE_COUNT_GIFT; i++) {
        var gift = {};
        gift.id = "PRO" + getId();
        gift.category = "礼物，加攻击";
        gift.path = "gift";
        gift.picture = i;
        gift.money = (i + 1) * 500000;
        gift.happy = (i + 1);
        gift.stock = 999999999;
        products.push(gift);
    }
    for (var i = 0; i < PICTURE_COUNT_CAR; i++) {
        var car = {};
        car.id = "PRO" + getId();
        car.category = "豪车，加防御";
        car.path = "car";
        car.picture = i;
        car.money = (i + 1) * 1000000;
        car.happy = (i + 1);
        car.stock = 999999999;
        products.push(car);
    }
    for (var i = 0; i < PICTURE_COUNT_HOUSE; i++) {
        var house = {};
        house.id = "PRO" + getId();
        house.category = "豪宅，加血";
        house.path = "house";
        house.picture = i;
        house.money = (i + 1) * 1000000;
        house.happy = (i + 1) * 10;
        house.stock = 999999999;
        products.push(house);
    }
    shop.products = products;
    return shop;
}

var initializeTeamSchedule = function (userTeam) {
    if (userTeam.lowerTeams != undefined) {
        userTeam.lowerMatchSchedules = getTeamSchedule(userTeam.lowerTeams, userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level - 1, 2);
    }
    userTeam.currentMatchSchedules = getTeamSchedule(userTeam.currentTeams, userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level, 0);
    userTeam.upperMatchSchedules = getTeamSchedule(userTeam.upperTeams, userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level + 1, 1);
};

var loadMainPageUserTeamHtml = function () {
    var userTeam = getPageUserTeam();
    var mainHtml = "";
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    mainHtml += getTeamReference(team);
    var teamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].teamPlayers;
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer.recoverInjure > 0) {
            teamPlayer.lineUp = 0;
        }
    }
    updateUserTeamInThisPage(userTeam);
    mainHtml += "<table class='class-table-100-percent-width'><tr><td class='class-td-team-reference-left-info'>正式球员</td><td>";
    mainHtml += "<table class='class-table-100-percent-width'><tr><td class='class-td-line-up-count-and-line-up-backup-count'></td></tr></table>";
    mainHtml += getTeamPlayerHtml(teamPlayers);
    mainHtml += "</td></tr></table>";
    mainHtml += "<table class='class-table-100-percent-width'><tr><td class='class-td-team-reference-left-info'>青年球员</td><td>";
    var youngTeamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].youngTeamPlayers;
    mainHtml += getYoungTeamPlayerHtml(youngTeamPlayers);
    mainHtml += "</td></tr></table>";
    // $(".class-div-content-user-team").html(mainHtml);
    $(".class-div-content-other").html(mainHtml);
    loadLineUpCountAndLineUpBackupCount(teamPlayers);
    $(".class-tr-team-reference-team-players").hide();
    showMoney(userTeam);
    //点击会计生命力操作
    $(".class-td-accountant-recover-health").unbind("click").click(function () {
        var userCurrentTeam = getUserCurrentTeam();
        if (userCurrentTeam.accountant.health == 100) {
            showAlertFrameGame("会计生命力已经满了");
            return;
        }
        var money = (100 - userCurrentTeam.accountant.health) * ACCOUNTANT_RECOVER_HEALTH_MONEY_PER_POINTS;
        if (userCurrentTeam.bankInfo.money < money) {
            showAlertFrameGame("你金钱不够支付" + money);
            return;
        }
        userCurrentTeam.bankInfo.money -= money;
        userCurrentTeam.accountant.health = 100;
        loadMainPageUserTeamHtml();
        return;
    });
    //点击会计危机账务能力操作
    $(".class-td-accountant-increase-risk-accounting").unbind("click").click(function () {
        var userCurrentTeam = getUserCurrentTeam();
        if (userCurrentTeam.accountant.riskAccounting == 100) {
            showAlertFrameGame("会计危机公关能力已经满了");
            return;
        }
        if (userCurrentTeam.bankInfo.money < 0) {
            showAlertFrameGame("你没钱了");
            return;
        }
        var money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS;
        if (userCurrentTeam.accountant.riskAccounting < 30) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS;
        } else if (userCurrentTeam.accountant.riskAccounting < 40) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 10;
        } else if (userCurrentTeam.accountant.riskAccounting < 50) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 100;
        } else if (userCurrentTeam.accountant.riskAccounting < 60) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 1000;
        } else if (userCurrentTeam.accountant.riskAccounting < 70) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 10000;
        } else if (userCurrentTeam.accountant.riskAccounting < 80) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 100000;
        } else if (userCurrentTeam.accountant.riskAccounting < 90) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 1000000;
        } else if (userCurrentTeam.accountant.riskAccounting < 100) {
            money = ACCOUNTANT_INCREASE_RISK_ACCOUNTING_MONEY_PER_POINTS * 10000000;
        }
        if (userCurrentTeam.bankInfo.money < money) {
            showAlertFrameGame("你钱不够支付升级花费" + money);
            return;
        }
        userCurrentTeam.bankInfo.money -= money;
        userCurrentTeam.accountant.riskAccounting += 1;
        loadMainPageUserTeamHtml();
        return;
    });
    //用户银行操作
    $(".class-td-button-bank-info-money-loan").unbind("click").click(function () {
        var team = userTeam.currentTeams[userTeam.config.teamIndex];
        closePopoutReference();
        var offset = $(this).offset();
        var offsetMain = $(".class-div-main").offset();
        var mainHtml = "<div " +
            "class='class-div-popout class-div-popout-reference class-div-popout-reference-bank-info' " +
            "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + (offsetMain.left) + "px;width:100%;background-color:#000000;border-radius:6px;" +
            "' >";
        mainHtml += "<table onclick='closePopoutReference()' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td></td>" +
            "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
            "</tr></table>";
        mainHtml += "<div style='overflow-y: scroll;height:366px;overflow-y: scroll;'>";
        mainHtml += getTeamBankInfoHtml(userTeam);
        mainHtml += "</div>";
        mainHtml += "</div>";
        $("body").append(mainHtml);
        $(".class-td-button-loan").unbind("click").click(function () {
            if ($(".class-input-bank-info-money-loan").val() < $(".class-td-min-loan-value").html()) {
                showAlertFrameGame("借款金额没有达标");
                return;
            }
            var userTeam = getPageUserTeam();
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            if (team.bankInfo.moneyLoan > 0) {
                showAlertFrameGame("你已经有债务了。请偿清债务后再来借款。");
                return;
            }
            if (team.bankInfo.negativeWaitGames > 0) {
                showAlertFrameGame("经过银行评估，你还清债务资金成负数次数是" + team.bankInfo.negativeTimes + "，银行表示要借款，还要等" + team.bankInfo.negativeWaitGames + "周");
                return;
            }
            var level = userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.level;
            var bankInterestRate = getBankInterestRate(level);
            var moneyBorrow = parseFloat($(".class-input-bank-info-money-loan").val());
            team.bankInfo.moneyLoan += moneyBorrow * (1 + (bankInterestRate / 100));
            team.bankInfo.money += moneyBorrow;
            team.bankInfo.moneyLoanLeftGames = TEAM_COUNT_DEFAULT_VALUE * 2 - 2;
            updateUserTeamInThisPage(userTeam);
            sendMailToTeam("你的借款已到账，到账金额是" + moneyBorrow + "", "还款金额:" + team.bankInfo.moneyLoan + "<br/>还款剩余周数:" + team.bankInfo.moneyLoanLeftGames);
            closePopoutReference();
            loadMainPageUserTeamHtml();
            return;
        });
        $(".class-td-button-loan-clear").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            if (team.bankInfo.money < team.bankInfo.moneyLoan) {
                showAlertFrameGame("现金不足于还款，请变卖公司财产后，再来还款");
                return;
            }
            sendMailToTeam("你已还款，还款金额是" + team.bankInfo.moneyLoan + "", "如题");
            team.bankInfo.money -= team.bankInfo.moneyLoan;
            team.bankInfo.moneyLoan = 0;
            team.bankInfo.moneyLoanLeftGames = 0;
            updateUserTeamInThisPage(userTeam);
            closePopoutReference();
            loadMainPageUserTeamHtml();
            return;
        });
    })
    //球馆扩容操作
    $(".class-td-button-team-stadium-capacity").unbind("click").click(function () {
        closePopoutReference();
        var offset = $(this).offset();
        var offsetMain = $(".class-div-main").offset();
        var mainHtml = "<div " +
            "class='class-div-popout class-div-popout-reference class-div-popout-reference-team-stadium-capacity' " +
            "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + (offsetMain.left) + "px;width:100%;background-color:#000000;border-radius:6px;" +
            "' >";
        mainHtml += "<table onclick='closePopoutReference()' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td></td>" +
            "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
            "</tr></table>";
        mainHtml += "<div style='overflow-y: scroll;height:366px;overflow-y: scroll;'>";
        var userTeam = getPageUserTeam();
        mainHtml += getTeamStadiumCapacityHtml(userTeam);
        mainHtml += "</div>";
        mainHtml += "</div>";
        $("body").append(mainHtml);
        $("class-input-team-stadium-capacity-increase").focus();
        $(".class-td-button-buy").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            var moneyBuy = $(".class-input-team-stadium-capacity-increase").val() * TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE;
            if (team.bankInfo.money < moneyBuy) {
                showAlertFrameGame("你现金不足,需要" + moneyBuy);
                return;
            }
            team.bankInfo.money -= moneyBuy;
            team.teamStadium.capacity += moneyBuy / TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE;
            updateUserTeamInThisPage(userTeam);
            closePopoutReference();
            loadMainPageUserTeamHtml();
            return;
        });
        $(".class-td-button-sell").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            if (team.teamStadium.capacity < $(".class-input-team-stadium-capacity-increase").val()) {
                showAlertFrameGame("你座位不足");
                return;
            }
            var moneySell = $(".class-input-team-stadium-capacity-increase").val() * TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_CAPACITY_SELL_ONE_COST_MONEY_DEFAULT_PERCENT;
            team.bankInfo.money += parseFloat(moneySell);
            team.teamStadium.capacity -= moneySell / (TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_CAPACITY_SELL_ONE_COST_MONEY_DEFAULT_PERCENT);
            updateUserTeamInThisPage(userTeam);
            closePopoutReference();
            loadMainPageUserTeamHtml();
            return;
        });
    })
    //票价操作
    $(".class-td-button-team-stadium-ticket-price").unbind("click").click(function () {
        closePopoutReference();
        var offset = $(this).offset();
        var offsetMain = $(".class-div-main").offset();
        var mainHtml = "<div " +
            "class='class-div-popout class-div-popout-reference class-div-popout-reference-team-stadium-ticket-price' " +
            "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + (offsetMain.left) + "px;width:100%;background-color:#000000;border-radius:6px;" +
            "' >";
        mainHtml += "<table onclick='closePopoutReference()' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td></td>" +
            "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
            "</tr></table>";
        mainHtml += "<div style='overflow-y: scroll;height:366px;overflow-y: scroll;'>";
        var userTeam = getPageUserTeam();
        mainHtml += getTeamStadiumTicketPriceHtml(userTeam);
        mainHtml += "</div>";
        mainHtml += "</div>";
        $("body").append(mainHtml);
        $(".class-td-button-team-stadium-ticket-price").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            team.teamStadium.ticketPrice = $(".class-input-team-stadium-ticket-price").val();
            updateUserTeamInThisPage(userTeam);
            closePopoutReference();
            loadMainPageUserTeamHtml();
            return;
        });
    });
    //训练操作
    $(".class-table-team-stadium-train").unbind("click").click(function () {
        closePopoutReference();
        var offset = $(this).offset();
        var offsetMain = $(".class-div-main").offset();
        var mainHtml = "<div " +
            "class='class-div-popout class-div-popout-reference class-div-popout-reference-team-stadium-train' " +
            "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + (offsetMain.left) + "px;width:100%;background-color:#000000;border-radius:6px;" +
            "' >";
        mainHtml += "<table onclick='closePopoutReference()' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td></td>" +
            "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
            "</tr></table>";
        mainHtml += "<div style='overflow-y: scroll;height:366px;overflow-y: scroll;'>";
        var userTeam = getPageUserTeam();
        var team = userTeam.currentTeams[userTeam.config.teamIndex];
        var teamStadium = team.teamStadium;
        mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium-hospital'>" +
            "<tr>" +
            "<td>" + getPersonPicture(teamStadium.train, "woman", "class-image") + "</td>" +
            "<td>";
        mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium-train'>";
        mainHtml += "<tr>" +
            "<td class='class-td-button'>训练无球跑动等级</td>\n" +
            "<td class='class-td-button'>训练盯人等级</td>\n" +
            "<td class='class-td-button'>训练射门等级</td>\n" +
            "<td class='class-td-button'>训练传球等级</td>\n" +
            "<td class='class-td-button'>训练过人等级</td>\n" +
            "<td class='class-td-button'>训练攻击等级</td>\n" +
            "<td class='class-td-button'>训练防守等级</td>\n" +
            "<td class='class-td-button'>训练封堵射门等级</td>\n" +
            "<td class='class-td-button'>训练拦截传球等级</td>\n" +
            "<td class='class-td-button'>训练逼抢等级</td>\n" +
            "<td class='class-td-button'>训练守门等级</td>\n" +
            "<td class='class-td-button'>训练健康等级</td>\n" +
            "<td class='class-td-button'>训练耐力等级</td>\n" +
            "</tr>";
        mainHtml += "<tr>" +
            "<td>" + teamStadium.train.offensive + "</td>" +
            "<td>" + teamStadium.train.defensive + "</td>" +
            "<td>" + teamStadium.train.shoot + "</td>" +
            "<td>" + teamStadium.train.pass + "</td>" +
            "<td>" + teamStadium.train.dribble + "</td>" +
            "<td>" + teamStadium.train.attack + "</td>" +
            "<td>" + teamStadium.train.defence + "</td>" +
            "<td>" + teamStadium.train.block + "</td>" +
            "<td>" + teamStadium.train.intercept + "</td>" +
            "<td>" + teamStadium.train.closingDown + "</td>" +
            "<td>" + teamStadium.train.goalKeeping + "</td>" +
            "<td>" + teamStadium.train.health + "</td>" +
            "<td>" + teamStadium.train.stamina + "</td>" +
            "</tr>";
        mainHtml += "<tr>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-offensive-increase' operationWay='1' property='offensive' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-defensive-increase' operationWay='1' property='defensive' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-shoot-increase' operationWay='1' property='shoot' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-pass-increase' operationWay='1' property='pass' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-dribble-increase' operationWay='1' property='dribble' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-attack-increase' operationWay='1' property='attack' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-defence-increase' operationWay='1' property='defence' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-block-increase' operationWay='1' property='block' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-intercept-increase' operationWay='1' property='intercept' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-closingDown-increase' operationWay='1' property='closingDown' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-goalKeeping-increase' operationWay='1' property='goalKeeping' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-health-increase' operationWay='1' property='health' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-increase class-td-team-stadium-train-stamina-increase' operationWay='1' property='stamina' >增加" + team.teamInfo.level + "倍</td>" +
            "</tr>";
        mainHtml += "<tr>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-offensive-decrease' operationWay='2' property='offensive' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-defensive-decrease' operationWay='2' property='defensive' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-shoot-decrease' operationWay='2' property='shoot' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-pass-decrease' operationWay='2' property='pass' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-dribble-decrease' operationWay='2' property='dribble' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-attack-decrease' operationWay='2' property='attack' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-defence-decrease' operationWay='2' property='defence' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-block-decrease' operationWay='2' property='block' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-intercept-decrease' operationWay='2' property='intercept' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-closingDown-decrease' operationWay='2' property='closingDown' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-goalKeeping-decrease' operationWay='2' property='goalKeeping' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-health-decrease' operationWay='2' property='health' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-train class-td-button-team-stadium-train-decrease class-td-team-stadium-train-stamina-decrease' operationWay='2' property='stamina' >减少" + team.teamInfo.level + "倍</td>" +
            "</tr>";
        mainHtml += "</table>";
        mainHtml += "<table onclick='' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td style='width:100px;'>数量</td>" +
            "<td class='class-td-button' style=''><input class='class-input-increase-points-times' type='text'  value='" + userTeam.config.increaseTrainPoints + "' style='width:95%;' /></td>" +
            "<td class='class-td-button class-td-team-stadium-train-all' operationWay='1'>全体增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-team-stadium-train-all' operationWay='2'>全体减少" + team.teamInfo.level + "倍</td>" +
            "</tr></table>" +
            "</td></tr></table>";
        mainHtml += "</div>";
        mainHtml += "</div>";
        $("body").append(mainHtml);
        $(".class-td-button-team-stadium-train").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            userTeam.config.increaseTrainPoints = parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            var train = team.teamStadium.train;
            if ($(this).attr('operationWay') == 1) {
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                if (team.bankInfo.money < TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points) {
                    showAlertFrameGame("你现金不够了！费用是：" + TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points);
                    return;
                }
                showAlertFrameGame("你花费了" + TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points);
                eval("train." + $(this).attr("property") + " += " + points);
                var currentPoints = eval("train." + $(this).attr("property"));
                team.bankInfo.money -= TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points;
            } else if ($(this).attr('operationWay') == 2) {
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                var property = eval("train." + $(this).attr("property"));
                if (points > property) {
                    points = property;
                }
                eval("train." + $(this).attr("property") + " -= " + points);
                var currentPoints = eval("train." + $(this).attr("property"));
                showAlertFrameGame("你拿到了" + TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_TRAIN_SELL_ONE_COST_MONEY_DEFAULT_PERCENT * parseFloat(points));
                team.bankInfo.money += TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_TRAIN_SELL_ONE_COST_MONEY_DEFAULT_PERCENT * parseFloat(points);
            }
            updateUserTeamInThisPage(userTeam);
            //$(".class-table-team-stadium-train").click();
            // closePopoutReference();
            loadMainPageUserTeamHtml();
            return;
        });
        $(".class-td-team-stadium-train-all").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            userTeam.config.increaseTrainPoints = parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            var train = team.teamStadium.train;
            if ($(this).attr('operationWay') == 1) {
                var increaseProperty = $(".class-td-button-team-stadium-train-increase");
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                if (team.bankInfo.money < TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points * increaseProperty.length) {
                    showAlertFrameGame("你现金不够了！费用是：" + TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points * increaseProperty.length);
                    //解决点击训练所有会弹出医院界面的问题。
                    $("body").append("<span class='class-span-click-train-all-flag'>1</span>");
                    setTimeout("removeTrainAllFlag()", 666);
                    return;
                }
                showAlertFrameGame("你花费了" + TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points * increaseProperty.length);
                for (var i = 0; i < increaseProperty.length; i++) {
                    var object = increaseProperty[i];
                    eval("train." + $(object).attr("property") + " += " + points);
                    team.bankInfo.money -= TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points;
                }
            } else if ($(this).attr('operationWay') == 2) {
                var increaseProperty = $(".class-td-button-team-stadium-train-decrease");
                for (var i = 0; i < increaseProperty.length; i++) {
                    var object = increaseProperty[i];
                    var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                    eval("train." + $(object).attr("property") + " -= " + points);
                    team.bankInfo.money += TEAM_STADIUM_TRAIN_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_TRAIN_SELL_ONE_COST_MONEY_DEFAULT_PERCENT * parseFloat(points);
                }
            }
            updateUserTeamInThisPage(userTeam);
            //$(".class-table-team-stadium-train-all").click();
            loadMainPageUserTeamHtml();
            //解决点击训练所有会弹出医院界面的问题。
            $("body").append("<span class='class-span-click-train-all-flag'>1</span>");
            setTimeout("removeTrainAllFlag()", 666);
            return;
        });
    });
    //医院操作
    $(".class-table-team-stadium-hospital").unbind("click").click(function () {
        //解决点击训练所有会弹出医院界面的问题。
        if ($(".class-span-click-train-all-flag").html() == 1) {
            return;
        }
        closePopoutReference();
        var offset = $(this).offset();
        var offsetMain = $(".class-div-main").offset();
        var mainHtml = "<div " +
            "class='class-div-popout class-div-popout-reference class-div-popout-reference-team-stadium-hospital' " +
            "style='border:1px solid #FFFFFF;z-index: 9;position:fixed;top:60px;left:" + (offsetMain.left) + "px;width:100%;background-color:#000000;border-radius:6px;" +
            "' >";
        mainHtml += "<table onclick='closePopoutReference()' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td></td>" +
            "<td class='class-td-button' style='width:36px'><image unbind src='image/common/common-close.png' /></td>" +
            "</tr></table>";
        mainHtml += "<div style='overflow-y: scroll;height:366px;overflow-y: scroll;'>";
        var userTeam = getPageUserTeam();
        var team = userTeam.currentTeams[userTeam.config.teamIndex];
        var teamStadium = team.teamStadium;
        mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium-hospital'>" +
            "<tr>" +
            "<td>" + getPersonPicture(teamStadium.hospital, "woman", "class-image") + "</td>" +
            "<td>";
        mainHtml += "<table class='class-table-100-percent-width class-table-team-stadium-hospital'>";
        mainHtml += "<tr>" +
            "<td class='class-td-button'>恢复耐力</td>\n" +
            "<td class='class-td-button'>恢复伤病</td>\n" +
            "</tr>";
        mainHtml += "<tr>" +
            "<td>" + teamStadium.hospital.recoverStamina + "</td>" +
            "<td>" + teamStadium.hospital.recoverInjure + "</td>" +
            "</tr>";
        mainHtml += "<tr>" +
            "<td class='class-td-button class-td-button-team-stadium-hospital class-td-button-team-stadium-hospital-increase class-td-team-stadium-hospital-recoverStamina-increase' operationWay='1' property='recoverStamina' >增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-hospital class-td-button-team-stadium-hospital-increase class-td-team-stadium-hospital-recoverInjure-increase' operationWay='1' property='recoverInjure' >增加" + team.teamInfo.level + "倍</td>" +
            "</tr>";
        mainHtml += "<tr>" +
            "<td class='class-td-button class-td-button-team-stadium-hospital class-td-button-team-stadium-hospital-decrease class-td-team-stadium-hospital-recoverStamina-decrease' operationWay='2' property='recoverStamina' >减少" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-hospital class-td-button-team-stadium-hospital-decrease class-td-team-stadium-hospital-recoverInjure-decrease' operationWay='2' property='recoverInjure' >减少" + team.teamInfo.level + "倍</td>" +
            "</tr>";
        mainHtml += "</table>";
        mainHtml += "<table onclick='' class='class-table-100-percent-width'>";
        mainHtml += "<tr><td style='width:100px;'>数量</td>" +
            "<td style=''><input class='class-input-increase-points-times' type='text'  value='" + userTeam.config.increaseHospitalPoints + "' style='width:95%;' /></td>" +
            "<td class='class-td-button class-td-button-team-stadium-hospital-all' operationWay='1' >全体增加" + team.teamInfo.level + "倍</td>" +
            "<td class='class-td-button class-td-button-team-stadium-hospital-all' operationWay='2' >全体减少" + team.teamInfo.level + "倍</td>" +
            "</tr></table></td></tr></table>";
        mainHtml += "</div>";
        mainHtml += "</div>";
        $("body").append(mainHtml);
        $(".class-td-button-team-stadium-hospital-all").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            userTeam.config.increaseHospitalPoints = parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            var hospital = team.teamStadium.hospital;
            if ($(this).attr('operationWay') == 1) {
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                var increaseProperty = $(".class-td-button-team-stadium-hospital-increase");
                if (team.bankInfo.money < TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points * increaseProperty.length) {
                    showAlertFrameGame("你现金不够了！费用是：" + TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points * increaseProperty.length);
                    return;
                }
                for (var i = 0; i < increaseProperty.length; i++) {
                    var object = increaseProperty[i];
                    eval("hospital." + $(object).attr("property") + " += " + points);
                    team.bankInfo.money -= TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points;
                    showAlertFrameGame("扣除" + TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points);
                }
            } else if ($(this).attr('operationWay') == 2) {
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                var increaseProperty = $(".class-td-button-team-stadium-hospital-decrease");
                for (var i = 0; i < increaseProperty.length; i++) {
                    var object = increaseProperty[i];
                    eval("hospital." + $(object).attr("property") + " -= " + points);
                    team.bankInfo.money += TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_HOSPITAL_SELL_ONE_COST_MONEY_DEFAULT_PERCENT * parseFloat(points);
                    showAlertFrameGame("扣除" + TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_HOSPITAL_SELL_ONE_COST_MONEY_DEFAULT_PERCENT * parseFloat(points));
                }
            }
            updateUserTeamInThisPage(userTeam);
            //$(".class-table-team-stadium-hospital-all").click();
            loadMainPageUserTeamHtml();
            return;
        });
        $(".class-td-button-team-stadium-hospital").unbind("click").click(function () {
            var userTeam = getPageUserTeam();
            userTeam.config.increaseHospitalPoints = parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
            var team = userTeam.currentTeams[userTeam.config.teamIndex];
            var hospital = team.teamStadium.hospital;
            if ($(this).attr('operationWay') == 1) {
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                if (team.bankInfo.money < TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points) {
                    showAlertFrameGame("你现金不够了！费用是：" + TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points);
                    return;
                }
                eval("hospital." + $(this).attr("property") + " += " + points);
                team.bankInfo.money -= TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * points;
            } else if ($(this).attr('operationWay') == 2) {
                var points = team.teamInfo.level * parseFloat(($(".class-input-increase-points-times").val() == "" ? 0 : $(".class-input-increase-points-times").val()));
                eval("hospital." + $(this).attr("property") + " -= " + points);
                team.bankInfo.money += TEAM_STADIUM_HOSPITAL_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_HOSPITAL_SELL_ONE_COST_MONEY_DEFAULT_PERCENT * parseFloat(points);
            }
            updateUserTeamInThisPage(userTeam);
            //$(".class-table-team-stadium-hospital").click();
            loadMainPageUserTeamHtml();
            return;
        });
    });

}

var getTeamStadiumTicketPriceHtml = function (userTeam) {
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    var teamStadium = team.teamStadium;
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>当前票价</td>" +
        "<td>标准票价</td>" +
        "<td>更改后票价</td>" +
        "<td>操作</td>" +
        "</tr>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>" + teamStadium.ticketPrice + "</td>" +
        "<td>" + team.teamInfo.level * 20 + "</td>" +
        "<td><input type='text' value='" + getDefaultTicketPrice(teamStadium) +
        "' class='class-input-team-stadium-ticket-price' style='width:95%;border-radius:6px;' /></td>" +
        "<td class='class-td-button class-td-button-team-stadium-ticket-price'>确定</td>" +
        "</tr>";
    mainHtml += "</table>";
    return mainHtml;
}

var getDefaultTicketPrice = function (teamStadium) {
    return (20 * teamStadium.fansCount / teamStadium.capacity < 20 ? 20 : Math.floor(20 * teamStadium.fansCount / teamStadium.capacity));
}

var getTeamStadiumCapacityHtml = function (userTeam) {
    var teamStadium = userTeam.currentTeams[userTeam.config.teamIndex].teamStadium;
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>当前容量</td>" +
        "<td>增加价格</td>" +
        "<td>售卖价格</td>" +
        "</tr>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>" + teamStadium.capacity + "</td>" +
        "<td>" + TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE + "</td>" +
        "<td>" + (TEAM_STADIUM_CAPACITY_INCREASE_ONE_COST_MONEY_DEFAULT_VALUE * TEAM_STADIUM_CAPACITY_SELL_ONE_COST_MONEY_DEFAULT_PERCENT) + "</td>" +
        "</tr>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td><input type='text' value='1000' class='class-input-team-stadium-capacity-increase' /></td>" +
        "<td class='class-td-button class-td-button-buy'>增加</td>" +
        "<td class='class-td-button class-td-button-sell'>减少</td>" +
        "</tr>";
    mainHtml += "</table>";
    return mainHtml;
}

var closePopoutReference = function () {
    $(".class-div-popout-reference").remove();
}

var getTeamBankInfoHtml = function (userTeam) {
    var mainHtml = "";
    var moneyLoanLeftGames = $(".class-td-bank-info-money-loan-left-games").html();
    var moneyLoan = $(".class-td-bank-info-money-loan").html();
    mainHtml += "<table class='class-table-100-percent-width'>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>球场座位折算比例</td>" +
        "<td>训练点数折算比例，按顺序售卖</td>" +
        "<td>医院资产折算比例，按顺序售卖</td>" +
        "<td>球员价值折算比例，按顺序售卖</td>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>20%</td>" +
        "<td>20%</td>" +
        "<td>20%</td>" +
        "<td>50%</td>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>目前尚有债务</td>" +
        "<td>债务到期剩余周数</td>" +
        "<td>目前现金</td>" +
        "<td>债务到期后银行会强制扣减球队现金！</td>" +
        "<td></td>" +
        // "<td>如果现金不足于扣减会自动按上表顺序售卖球队资产！</td>" +
        "<td></td>" +
        "</tr>";
    mainHtml += "<tr style='background-color:#666666;'>" +
        "<td>" + moneyLoan + "</td>" +
        "<td>" + moneyLoanLeftGames + "</td>" +
        "<td>" + userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money + "</td>" +
        "<td></td>" +
        "<td></td>" +
        "<td class='class-td-button class-td-button-loan-clear' >还清</td>" +
        "</tr>";
    var teamValue = getTeamValue(userTeam.currentTeams[userTeam.config.teamIndex]);
    mainHtml += "<tr>" +
        "<td>球队现金</td>" +
        "<td>球员价值</td>" +
        "<td>球馆容量价值</td>" +
        "<td>球馆训练场价值</td>" +
        "<td>球馆医院价值</td>" +
        "<td>球队总值</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>" + teamValue.teamCashMoney + "</td>" +
        "<td>" + teamValue.teamPlayersValue + "</td>" +
        "<td>" + teamValue.teamStadiumCapacityValue + "</td>" +
        "<td>" + teamValue.teamStadiumTrainValue + "</td>" +
        "<td>" + teamValue.teamStadiumHospitalValue + "</td>" +
        "<td>" + teamValue.teamTotalValue + "</td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>借钱占球队总额的限制最少比例</td>" +
        "<td>借钱至少金额</td>" +
        "<td>借钱偿还的利率</td>" +
        "<td>借钱到期周数</td>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>";
    var level = userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.level;
    var bankInterestRate = getBankInterestRate(level);
    mainHtml += "<tr>" +
        "<td>" + getTeamBankLoanPercent(level) + "%</td>" +
        "<td class='class-td-min-loan-value'>" + teamValue.teamTotalValue * getTeamBankLoanPercent(level) / 100 + "</td>" +
        "<td>" + bankInterestRate + "%</td>" +
        "<td>" + (TEAM_COUNT_DEFAULT_VALUE * 2 - 2) + "周</td>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>";
    mainHtml += "<tr>" +
        "<td>可以借钱</td>" +
        "<td colspan='4'><input type='text' value='" + teamValue.teamTotalValue * getTeamBankLoanPercent(level) / 100 + "' class='class-input-bank-info-money-loan' style='width:95%;border-radius:6px;' /></td>" +
        "<td class='class-td-button class-td-button-loan' >借钱</td>" +
        "</tr>";
    mainHtml += "</table>";
    return mainHtml;
}


var loadLineUpCountAndLineUpBackupCount = function (teamPlayers) {
    var outOfLineupCount = getLineUpCount(teamPlayers, 0);
    var lineupCount = getLineUpCount(teamPlayers, 1);
    var lineupBackupCount = getLineUpCount(teamPlayers, 2);
    var injureCount = teamPlayers.length - lineupCount - lineupBackupCount - outOfLineupCount;
    $(".class-td-line-up-count-and-line-up-backup-count")
        .html("<span style='width:30px;height:30px' class='class-tr-team-player-is-in-line-up'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>上场球员数量 : " + lineupCount + "/11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span style='width:30px;height:30px' class='class-tr-team-player-is-in-line-up-backup'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>替补球员数量 : " + lineupBackupCount + "/5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span style='width:30px;height:30px' class='class-tr-team-player-is-out-of-line-up'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>未出赛球员数量 : " + outOfLineupCount + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span style='width:30px;height:30px' class='class-tr-team-player-is-injure' onclick='hideInjure(this)'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>伤病球员数量 : " + injureCount + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "总人数 : " + teamPlayers.length)
        .css("background-color", "#666666");
}

var hideInjure = function (object) {
    if ($(object).attr("isHide") == undefined) {
        $(".class-tr-team-player-is-injure").hide();
        $(object).show();
        $(object).attr("isHide", 1);
    } else {
        $(".class-tr-team-player-is-injure").show();
        $(object).removeAttr("isHide");
    }
}

var getLineUpCount = function (teamPlayers, status, position) {
    var lineUpCount = 0;
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer != undefined) {
            if (teamPlayer.lineUp == status) {
                if (teamPlayer.recoverInjure <= 0) {
                    if (position != undefined) {
                        if (teamPlayer.position == position) {
                            lineUpCount += 1;
                        }
                    } else {
                        lineUpCount += 1;
                    }
                }
            }
        }
    }
    return lineUpCount;
}

var getYoungTeamPlayerHtml = function (youngTeamPlayers) {
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'><tr>" +
        "<td>序号</td>" +
        // "<td>球员编号</td>" +
        "<td>图片</td>" +
        "<td width='50px;'>名称</td>" +
        "<td>无球跑动</td>" +
        "<td>射门</td>" +
        "<td>传球</td>" +
        "<td>过人</td>" +
        "<td>攻击</td>" +
        "<td>盯人</td>" +
        "<td>防守</td>" +
        "<td>封堵射门</td>" +
        "<td>拦截传球</td>" +
        "<td>逼抢</td>" +
        "<td>守门</td>" +
        "<td>健康</td>" +
        "<td>耐力</td>" +
        "<td>伤病周数</td>" +
        "<td>耐力消耗</td>" +
        "<td>快乐</td>" +
        "<td>潜力</td>" +
        "<td>年龄</td>" +
        "<td>巅峰</td>" +
        "<td>退休</td>" +
        "<td>周薪</td>" +
        "<td>转会费</td>" +
        "<td>球员现金</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td width='66px'>城市</td>" +
        "<td width='66px'>县</td>" +
        "<td>位置</td>" +
        "<td>首发吗</td>" +
        "<td>操作</td>" +
        "</tr>";
    for (var i = 0; i < youngTeamPlayers.length; i++) {
        var teamPlayer = youngTeamPlayers[i];
        if (teamPlayer != undefined) {
            mainHtml += "<tr class='class-tr-team-player " + (teamPlayer.recoverInjure > 0 ? "class-tr-team-player-is-injure " : "") +
                (teamPlayer.lineUp == 1 ? "class-tr-team-player-is-in-line-up" : (teamPlayer.lineUp == 2 ? "class-tr-team-player-is-in-line-up-backup" : "")) + "'>" +
                "<td>" + (i + 1) + "</td>" +
                // "<td>" + teamPlayer.id + "</td>" +
                "<td>" + getPlayerPicture(teamPlayer, "class-image-team-player-picture-small-in-list") + "</td>" +
                "<td class='class-td-button' property='" + JSON.stringify(teamPlayer) + "' onclick='showThisPlayer(this)'>" + teamPlayer.name + "</td>" +
                "<td>" + getNumberRound(teamPlayer.offensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.shoot) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.pass) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.dribble) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.attack) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defence) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.block) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.intercept) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.closingDown) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.goalKeeping) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.health) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.stamina) + "</td>" +
                "<td style='" + (teamPlayer.recoverInjure > 0 ? "background-color:#FF0066" : "background-color:#66FF00") + "'>" + getNumberRound(teamPlayer.recoverInjure) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.recoverStamina) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.happy) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.potential) + "</td>" +
                "<td>" + teamPlayer.age + "岁</td>" +
                "<td>" + teamPlayer.peakAge + "岁</td>" +
                "<td>" + teamPlayer.retireAge + "岁</td>" +
                "<td>" + getNumberRound(teamPlayer.salaryWeek) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.transferMoney) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.money) + "</td>" +
                "<td>" + teamPlayer.country + "</td>" +
                "<td>" + teamPlayer.province + "</td>" +
                "<td class='class-td-button' onclick=" +
                "" +
                "" +
                "\"showMapQuery(" +
                "'" +
                "" + teamPlayer.city +
                " " + teamPlayer.county +
                "'" +
                ")\"" +
                "" +
                "" +
                ">" + teamPlayer.city + "</td>" +
                "<td>" + teamPlayer.county + "</td>" +
                "<td>" + PLAYER_POSITIONS[teamPlayer.position] + "</td>" +
                "<td>否</td>" +
                "<td onclick='signThisYoungTeamPlayer(this)' class='class-td-button class-td-team-player-sign-this-young-team-player' teamPlayerId='" + teamPlayer.id + "'>签约</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    return mainHtml;
}

var getTeamPlayerHtml = function (teamPlayers) {
    var mainHtml = "";
    mainHtml += "<table class='class-table-100-percent-width'><tr>" +
        "<td>序号</td>" +
        // "<td>球员编号</td>" +
        "<td>图片</td>" +
        "<td width='50px;'>名称</td>" +
        "<td>无球跑动</td>" +
        "<td>射门</td>" +
        "<td>传球</td>" +
        "<td>过人</td>" +
        "<td>攻击</td>" +
        "<td>盯人</td>" +
        "<td>防守</td>" +
        "<td>封堵射门</td>" +
        "<td>拦截传球</td>" +
        "<td>逼抢</td>" +
        "<td>守门</td>" +
        "<td>健康</td>" +
        "<td>耐力</td>" +
        "<td>伤病周数</td>" +
        "<td>耐力消耗</td>" +
        "<td>快乐</td>" +
        "<td>潜力</td>" +
        "<td>年龄</td>" +
        "<td>巅峰</td>" +
        "<td>退休</td>" +
        "<td>周薪</td>" +
        "<td>转会费</td>" +
        "<td>球员现金</td>" +
        "<td>国家</td>" +
        "<td>省份</td>" +
        "<td width='66px'>城市</td>" +
        "<td width='66px'>县</td>" +
        "<td>位置</td>" +
        "<td>首发吗</td>" +
        "<td>操作</td>" +
        "</tr>";
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (teamPlayer != undefined) {
            mainHtml += "<tr class='class-tr-team-player " + (teamPlayer.recoverInjure > 0 ? "class-tr-team-player-is-injure " : "") +
                (teamPlayer.lineUp == 1 ? "class-tr-team-player-is-in-line-up" : (teamPlayer.lineUp == 2 ? "class-tr-team-player-is-in-line-up-backup" : "")) + "'>" +
                "<td>" + (i + 1) + "</td>" +
                // "<td>" + teamPlayer.id + "</td>" +
                "<td>" + getPlayerPicture(teamPlayer, "class-image-team-player-picture-small-in-list") + "</td>" +
                "<td class='class-td-button' property='" + JSON.stringify(teamPlayer) + "' onclick='showThisPlayer(this,1)'>" + teamPlayer.name + "</td>" +
                "<td>" + getNumberRound(teamPlayer.offensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.shoot) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.pass) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.dribble) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.attack) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defensive) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.defence) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.block) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.intercept) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.closingDown) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.goalKeeping) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.health) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.stamina) + "</td>" +
                "<td style='" + (teamPlayer.recoverInjure > 0 ? "background-color:#FF0066" : "background-color:#66FF00") + "'>" + getNumberRound(teamPlayer.recoverInjure) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.recoverStamina) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.happy) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.potential) + "</td>" +
                "<td>" + teamPlayer.age + "岁</td>" +
                "<td>" + teamPlayer.peakAge + "岁</td>" +
                "<td>" + teamPlayer.retireAge + "岁</td>" +
                "<td>" + getNumberRound(teamPlayer.salaryWeek) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.transferMoney) + "</td>" +
                "<td>" + getNumberRound(teamPlayer.money) + "</td>" +
                "<td>" + teamPlayer.country + "</td>" +
                "<td>" + teamPlayer.province + "</td>" +
                "<td class='class-td-button' onclick=" +
                "" +
                "" +
                "\"showMapQuery(" +
                "'" +
                "" + teamPlayer.city +
                " " + teamPlayer.county +
                "'" +
                ")\"" +
                "" +
                "" +
                ">" + teamPlayer.city + "</td>" +
                "<td>" + teamPlayer.county + "</td>" +
                "<td>" + PLAYER_POSITIONS[teamPlayer.position] + "</td>" +
                "<td title='点击改变出场状态' onclick='changeTeamPlayerLineUp(this)' class='class-td-button class-td-team-player-line-up' teamPlayerId='" + teamPlayer.id + "'>" + LINEUP_STATUS[teamPlayer.lineUp] + "</td>" +
                "<td onclick='sellThisTeamPlayer(this)' class='class-td-button class-td-team-player-sell-this-team-player' teamPlayerId='" + teamPlayer.id + "'>挂牌卖出</td>" +
                "</tr>";
        }
    }
    mainHtml += "</table>";
    return mainHtml;
};

var changeTeamPlayerLineUp = function (obj) {
    var userTeam = getPageUserTeam();
    var teamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].teamPlayers;
    var id = $(obj).attr("teamPlayerId");
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (id == teamPlayers[i].id) {
            if (teamPlayer.lineUp == 0) {
                teamPlayer.lineUp = 1;
            } else if (teamPlayer.lineUp == 1) {
                teamPlayer.lineUp = 2;
            } else if (teamPlayer.lineUp == 2) {
                teamPlayer.lineUp = 0;
            }
            break;
        }
    }
    $(obj).html(LINEUP_STATUS[teamPlayer.lineUp]);
    updateUserTeamInThisPage(userTeam);
    loadMainPageUserTeamHtml();
    return;
}

var signThisYoungTeamPlayer = function (obj) {
    var userTeam = getPageUserTeam();
    var team = userTeam.currentTeams[userTeam.config.teamIndex];
    var teamPlayerId = $(obj).attr("teamPlayerId");
    signYoungTeamPlayer(teamPlayerId, team);
    updateUserTeamInThisPage(userTeam);
    loadMainPageUserTeamHtml();
    return;
}

var signYoungTeamPlayer = function (teamPlayerId, team) {
    var youngTeamPlayers = team.youngTeamPlayers;
    var teamPlayers = team.teamPlayers;
    var teamInfo = team.teamInfo;
    for (var i = 0; i < youngTeamPlayers.length; i++) {
        var youngTeamPlayer = youngTeamPlayers[i];
        if (teamPlayerId == youngTeamPlayers[i].id) {
            youngTeamPlayer.salaryWeek = getSalaryWeek(youngTeamPlayer, teamInfo.level);
            youngTeamPlayer.transferMoney = 0;
            teamPlayers.push(youngTeamPlayer);
            youngTeamPlayers.splice(i, 1);
            break;
        }
    }
}

var sellThisTeamPlayer = function (obj) {
    var userTeam = getPageUserTeam();
    var teamInfo = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo;
    if (!isInTransferWeeks(teamInfo)) {
        showAlertFrameGame("转会窗口没有打开！目前是第" + teamInfo.games + "周, 转会市场开启时间是:第1周至第6周和第26周至第38周");
        return;
    }
    var teamPlayers = userTeam.currentTeams[userTeam.config.teamIndex].teamPlayers;
    var id = $(obj).attr("teamPlayerId");
    for (var i = 0; i < teamPlayers.length; i++) {
        var teamPlayer = teamPlayers[i];
        if (id == teamPlayers[i].id) {
            if (teamPlayer.recoverInjure > 0) {
                showAlertFrameGame("球员伤病时禁止卖出。");
                return;
            }
            var level = userTeam.currentTeams[userTeam.config.teamIndex].teamInfo.level;
            // 卖球员要收20%的手续费，发邮件告知。
            var plusMoney = (1 - SELLER_PLAYER_TAX / 100 - (teamPlayer.playGames > 50 ? 0 : 50 - teamPlayer.playGames) / 100) * parseFloat(getTransferMoney(teamPlayer, level));
            userTeam.currentTeams[userTeam.config.teamIndex].bankInfo.money += plusMoney;
            sendMailToTeam("卖出球员[" + teamPlayer.name + "]，固定扣税[" + (SELLER_PLAYER_TAX) + "%]，" + (teamPlayer.playGames > 50 ? "球员已满50周，没有转会税" : "球员未满50周转会，征收未满转会税[" + (50 - teamPlayer.playGames) + "%]") + "，所得金额是" + getNumberRound(plusMoney), "如题");
            //玩家卖了球员进入转会市场。
            //转会市场永久不刷新。
            var position = teamPlayer.position;
            var transferTeamPlayers = getGamePositionBuyPlayers("buy_players_position_" + position);
            if (transferTeamPlayers == undefined) {
                transferTeamPlayers = getTransferMarketTeamPlayers(position);
            }
            //把已比赛周数清零，加入转会市场
            teamPlayer.playGames = 0;
            transferTeamPlayers.push(teamPlayer);
            setGamePositionBuyPlayers("buy_players_position_" + position, transferTeamPlayers);
            teamPlayers.splice(i, 1);
            break;
        }
    }
    updateUserTeamInThisPage(userTeam);
    loadMainPageUserTeamHtml();
    return;
}

var removeTrainAllFlag = function () {
    $(".class-span-click-train-all-flag").remove();
}