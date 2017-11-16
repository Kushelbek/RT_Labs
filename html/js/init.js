$(document).ready(function() {
    $('.navbar-menu').click(function() {
        $('.nav-menu').toggleClass('visible');
        $('body').toggleClass('cover-bg');
    });
});

$(document).ready(function() {
    $('.right-menu').click(function() {
        $('.nav-menu-right').toggleClass('visible');
    });
});
$(".dropdown-toggle").on("click", ".dropdown-toggle", function() {
    $(".ic").removeClass("icon-square");
    $(this).addClass("icon-square-w");
});

jQuery(document).ready(function(e) {
    function t(t) {
        e(t).bind("click", function(t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function() {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active btn-triangle text-w")
        }
    });
    e(document).bind("click", function(t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function(t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active  btn-triangle text-w");
    })
});