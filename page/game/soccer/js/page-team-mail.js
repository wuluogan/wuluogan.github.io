var loadTeamMail = function () {
    $(".class-div-content").hide();
    var userTeam = getPageUserTeam();
    if(userTeam==undefined){
        loadUserTeam();
        return;
    }
    $(".class-div-content-team-mail").show();
}

//邮件页面调整
//调整邮件格式