window.addEventListener('DOMContentLoaded', function () {
    media_query()

    $(window).resize(function () {
        var theWindowSize = $(this).width();
        if (theWindowSize < 760) {
            // $("#about").removeClass("position-absolute");
            $("#about-cont").addClass("d-flex");
            $("#soc-reel-cont").removeClass("d-flex");
        } else {
            // $("#about").addClass("position-absolute");
            $("#about-cont").removeClass("d-flex");
            $("#soc-reel-cont").addClass("d-flex");
        }
    });
})
 
function menu() {
    // $("body").css({ overflow: "hidden" });
    $("html, body").animate({ scrollTop: 0 }, 0)
    $("#menu").animate({ top: "100px" }, 1000);
    $("#menu").animate({ top: "0px" }, 1000);

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
    if (window.matchMedia('(min-width: 760px)').matches) {
        window.location.href = "index.html";
    }
}

function media_query() {
    if (window.matchMedia('(max-width: 760px)').matches) {
        $("#about-cont").addClass("d-flex");
    } else {
        $("#about-cont").removeClass("d-flex");
    }
}

