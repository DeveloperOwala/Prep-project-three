$(document).click(function () {
    // displaying icon1
    $("#design_icon").click(function () {
        $(".designDescription").show();
        $("#design_icon").hide();
       
    });
    $(".design").click(function () {
        $(".designDescription").hide();
        $("#design_icon").show();
    });
    // displaying icon 2
    $("#dev_icon").click(function () {
        $(".developmentDescription").show();
        $("#dev_icon").hide();
    });
    $(".development").click(function () {
        $(".developmentDescription").hide();
        $("#dev_icon").show();
    });

    //displaying icon 3
    $("#product_icon").click(function () {
        $(".productDescription").show();
        $("#product_icon").hide();
    });
    $(".product").click(function () {
        $(".productDescription").hide();
        $("#product_icon").show();
    });

    // hover project one
    $("#icon-1").mouseover(function () {
        $(".portfolioOne").show();
        $("icon-1").css('opacity', '0.1');
    });

    $("#icon-1").mouseout(function () {
        $(".portfolioOne").hide();
        $("icon-1").css("opacity", "1");
    });

    // hover project two
    $("#icon-2").mouseover(function () {
        $(".portfolioTwo").show();
        $("icon-2").css("opacity", "0.1");
    });

    $("#icon-2").mouseout(function () {
        $(".portfolioTwo").hide();
        $("icon-2").css("opacity", "1");
    });
    // hover project three
    $("#icon-3").mouseover(function () {
        $(".portfolioThree").show();
        $("icon-3").css("opacity", "0.1");
    });

    $("#icon-3").mouseout(function () {
        $(".portfolioThree").hide();
        $("icon-3").css("opacity", "1");
    });
    // hover project four
    $("#icon-4").mouseover(function () {
        $(".portfolioFour").show();
        $("icon-4").css("opacity", "0.1");
    });

    $("#icon-4").mouseout(function () {
        $(".portfolioFour").hide();
        $("icon-4").css("opacity", "1");
    });
    // hover project five
    $("#icon-5").mouseover(function () {
        $(".portfolioFive").show();
        $("icon-5").css("opacity", "0.1");
    });

    $("#icon-5").mouseout(function () {
        $(".portfolioFive").hide();
        $("icon-5").css("opacity", "1");
    });

    // hover project six
    $("#icon-6").mouseover(function () {
        $(".portfolioSix").show();
        $("icon-6").css("opacity", "0.1");
    });

    $("#icon-6").mouseout(function () {
        $(".portfolioSix").hide();
        $("icon-6").css("opacity", "1");
    });
    // hover project seven
    $("#icon-7").mouseover(function () {
        $(".portfolioSeven").show();
        $("icon-7").css("opacity", "0.1");
    });

    $("#icon-7").mouseout(function () {
        $(".portfolioSeven").hide();
        $("icon-7").css("opacity", "1");
    });
    // hover project eight
    $("#icon-8").mouseover(function () {
        $(".portfolioEight").show();
        $("icon-8").css("opacity", "0.1");
    });

    $("#icon-8").mouseout(function () {
        $(".portfolioEight").hide();
        $("icon-8").css("opacity", "1");
    });
})

function validateUser() {
    var fnames = parseInt(document.getElementById("username").value);
    var Emails = parseInt(document.getElementById("email").value);
    var messages = parseInt(document.getElementById("textareamessage").value);


    if (fnames != null || Emails != null || messages != null) {
        alert("**we have received your message. Thank you for reaching out to us. **");

    } else {
        alert("Please fill all the details! ");

    }

}

