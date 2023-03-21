var gotoTrainImmortality = function () {
    $(".class-div-content").hide();
    $(".class-div-content-other").show();
    $(".class-div-content-other").html("<iframe src='magictower/game.html' style='width:360px;height:700px;margin-top:60px;overflow:scroll;' />");
    $(".class-div-content-other").css("padding","0px;");
    $(".class-div-main").css("width","100% !important");
}

var gotoMyselfProperty = function () {
    getRefreshPageUserTeam();
    var chairmanHome = getHomeChairman();
    $(".class-div-content-other").html("<span class='td'>修炼经验值目前是：" + chairmanHome.exp + "<br/>" +
        "可提供球员加成是：+" + chairmanHome.exp + "%</span>" +
        "");
}
