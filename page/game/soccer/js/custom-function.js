var getLocalStorageItemGame = function (key) {
    var data = JCOMPRESS.getItem(sha256(key));
    if(data==undefined){
        return undefined;
    }
    var dataJson = JSON.parse(data);
    return dataJson.value;
}

var setLocalStorageItemGame = function (key, value) {
    if (value != null && value != undefined) {
        var data = {};
        data.value=value;
        JCOMPRESS.setItem(sha256(key), JSON.stringify(data));
    }
}

var removeLocalStorageItemGame = function (key) {
    localStorage.removeItem("d_"+sha256(key));
    localStorage.removeItem(sha256(key));
}

var showAlertFrameThenJumpToUrlGame = function (message, url) {
    var id = getRandomIdGame();
    $(".class-div-alert-frame").remove();
    $("body").append("<div onclick=\"closeAlertFrameAndJumpToUrlGame('" + url + "')\" " +
        "style='z-index: 9999;position: absolute;top:0;left:0;width:100%;height:100%;' " +
        "class='class-div-alert-frame class-div-alert-frame-" + id + " '>" +
        "" +
        "<div class='class-div-alert-frame-content'  onclick=\"closeAlertFrameAndJumpToUrlGame('" + url + "')\" " +
        "style='border-radius:26px;margin-left:33%;margin-top:10%;" +
        "background-image: linear-gradient(to top,#EEEEEE, #FFFFFF);" +
        "width:33%;padding:26px;color: #FF0066;overflow:hidden;'>" +
        "<div class='class-div-alert-frame-content-message'  style='text-align:center;'>" +
        "<span class='class-span-alert-frame-content-message' >" + message + "</span></div>" +
        "</div>" +
        "</div>");
    // $("html,body").animate({
    //     scrollTop: 0
    // }, 0);
};

var showAlertFrameGame = function (message, needAnimate, closePopout,closeInstantly) {
    if (closePopout == undefined) {
        closePopout = 0;
    }
    if (closePopout == 1) {
        closePopout();
    }
    var id = getRandomId();
    $(".class-div-alert-frame").remove();
    $("body").append("<div onclick=\"closeAlertFrameGame('" + id + "')\" " +
        "style='z-index: 99999;position: fixed;top:0;left:0;width:100%;height:100%;\n" +
        "    background: rgba(0, 0, 0, 0.6);" +
        "    filter:alpha(opacity=90); /* IE */" +
        "    -moz-opacity:0.90; /* Moz + FF */" +
        "    opacity: 0.90;' " +
        "class='class-div-alert-frame class-div-alert-frame-" + id + " '>" +
        "" +
        "<div class='class-div-alert-frame-content'  onclick=\"closeAlertFrameGame('" + id + "', "+closeInstantly+")\" " +
        "style='border-radius:26px;margin-left:33%;margin-top:10%;" +
        "background-image: linear-gradient(to top,#EEEEEE,#FFFFFF);" +
        "border:1px solid #666666;" +
        "width:33%;padding:26px;color: #666666;overflow:hidden;'>" +
        "<div class='class-div-alert-frame-content-message'  style='text-align:center;'>" +
        "<span class='class-span-alert-frame-content-message' >" + message + "</span></div>" +
        "</div>" +
        "</div>");
    if (needAnimate == undefined) {
        needAnimate = 1;
    }
    if (needAnimate == 1) {
        //TODO 动画效果
    }
}

var closeAlertFrameGame = function (id, closeInstantly) {
    if (closeInstantly == undefined || closeInstantly == 0) {
        $(".class-div-alert-frame-" + id).fadeOut(300, function () {
            $(".class-div-alert-frame-" + id).remove();
        });
    } else {
        $(".class-div-alert-frame-" + id).remove();
    }
}

var getRandomId = function () {
    var randomId = new Date().getTime();
    randomId = "" + randomId;
    randomId = randomId.replace(/4/g, "6");
    for (var i = 0; i < 23; i++) {
        var number = Math.floor(Math.random() * 10);
        number = number == 4 ? 6 : number;
        randomId += number + "";
    }
    return randomId;
}

var getCurrentTime = function () {
    var date = new Date();
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + M + D + h + m + s;
}

var getFormatNumberWithThousand = function (money) {
    return formatMoney(money,2);
}

var formatMoney =function(money, number)
{
    if(number==undefined){
        number=0;
    }
    money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(number) + "";
    var l = money.split(".")[0].split("").reverse(),
        r = money.split(".")[1];
    t = "";
    for(i = 0; i < l.length; i ++ )
    {
        t += l[i] + (((i + 1) % 3 == 0 && (i + 1) != l.length) ? "," : "");
    }
    return t.split("").reverse().join("") + (number==0?'':"." + r);
}


//标准弹出窗口
var showPopoutFrameGame = function (content, width, height, left, top, closePopoutFrame, position, showMask, zIndex, showCloseBar, showScrollBar) {
    if (position == undefined) {
        position = "fixed";
    }
    if (width == undefined) {
        width = "800px";
    }
    if (height == undefined) {
        height = "600px";
    }
    if (left == undefined) {
        left = "10px";
    }
    if (top == undefined) {
        top = "10px";
    }
    if (closePopoutFrame == undefined) {
        closePopoutFrame = 1;
    }
    if (closePopoutFrame == 1) {
        closePopoutGame();
    }
    if (showMask == undefined) {
        showMask = 0;
    }
    if (zIndex == undefined) {
        zIndex = 8;
    }
    if (showCloseBar == undefined) {
        showCloseBar = 1;
    }
    if (showScrollBar == undefined) {
        showScrollBar = 0;
    }
    var mainHtml = "";
    if (showMask == 1) {
        mainHtml += "<div style='z-index: " + zIndex + ";position: fixed;background-color:#FFFFFF;top:0;left:0;width:100%;height:100%;' class='class-div-popout'>";
    }
    var heightFrame = parseInt(height.substring(0, height.indexOf("px")));
    mainHtml += "<div " +
        "class='class-div-popout' " +
        "style='border:1px solid #666666;z-index: " + (zIndex + 1) + ";position:" + position + ";" +
        (showScrollBar == 1 ? "overflow:scroll;" : "overflow: hidden;") +
        "background-color:#FFFFFF;border-radius:6px;color:#666666;padding:0px 12px 12px 12px;" +
        "top:" + top + ";left:" + left + ";width:" + width + ";height:" +
        (heightFrame > 900 ? "900px" : height)
        + ";' >";
    if (showCloseBar == 1) {
        mainHtml += "<table class='class-table-100-percent-width' onclick='closePopoutGame()'>";
        mainHtml += "<tr><td class='class-td-button-game' style='border-radius:6px;' ></td>" +
            "<td class='class-td-button-game' style='width:12px;height:12px;color:#666666; border-radius:6px;padding:6px;text-align:center;'>x</td>" +
            "</tr></table>";
    }
    mainHtml += "<div class='class-table-100-percent-width' style='" +
        (heightFrame > 900 ? "height:900px;" : "height:" + height) +
        (heightFrame > 900 ? "overflow-y:scroll;" : "") +
        ";border-radius:6px;'>" + content + "</div>";
    mainHtml += "</div>";
    if (showMask == 1) {
        mainHtml += "</div>";
    }
    $("body").append(mainHtml);//标准弹出窗口
}


var closePopoutGame = function (className, closeMaskWhenCloseBarClick) {
    if (className == undefined) {
        className = "class-div-popout";
    }
    if (className == '') {
        className = "class-div-popout";
    }
    if (closeMaskWhenCloseBarClick == undefined) {
        closeMaskWhenCloseBarClick = 1;
    }
    $("." + className).remove();
    if (closeMaskWhenCloseBarClick == 1) {
        $(".class-div-transparent-game-mask").remove();
    }
};
