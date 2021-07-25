$(document).click(function () {
    // displaying icon1
    $("#design_icon").click(function () {
        $(".designDescription").show();
    });
    $(".design").click(function () {
        $(".designDescription").hide(3000);
    });
    // displaying icon 2
    $("#dev_icon").click(function () {
        $(".developmentDescription").show();
    });
    $(".development").click(function () {
        $(".developmentDescription").hide(3000);
    });

    //displaying icon 3
    $("#product_icon").click(function () {
        $(".productDescription").show();
    });
    $(".product").click(function () {
        $(".productDescription").hide(3000);
    });

    // hover projects
    $("#icon-1").mouseover(function () {
        $(".portfolioOne").show();
        $("icon-1").css("opacity", "0.1");
    });

    $("#icon-1").mouseout(function () {
        $(".portfolioOne").hide();
        $("icon-1").css("opacity", "1");
    });
})

