window.addEventListener('DOMContentLoaded', function () {
    mobile()
})
 
function menu() {
    $("body").css({ overflow: "hidden" });
    $("html, body").animate({ scrollTop: 0 }, 0)
    $("#menu").animate({ top: "100px" }, 1000);
    $("#menu").animate({ top: "0px" }, 1000);
    $('#menu')
        .delay(800)
        .queue(function (next) {
            $(this).animate({ height: "1500px" }, 1000);
            next();
        });
    $('#page')
        .delay(1000)
        .queue(function (next) {
            $(this).css('display', 'none');
            next();
        });
}

function closemenu() {
    $("#menu").animate({ top: "100px" }, 1000);
    $("#menu").animate({ top: "-2000px" }, 1000);
    $("body").removeAttr("style");
    $("#page").removeAttr("style");
}


function mobile() {
    if (window.matchMedia('(max-width: 1130px)').matches) {
        window.location.href = "m_index.html";
    }
}
function desktop() {
    if (window.matchMedia('(min-width: 1130px)').matches) {
        window.location.href = "index.html";
    }
}

