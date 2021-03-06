$(function() {
    let burger = $('#hbg-icon');
    let sidebar = $('.sidebar');
    let circle = $('#circle');

    burger.on('click', function() {
        if (sidebar.css("marginLeft") == "-250px") {
            $(this).animate({
                "margin-left" : "250px"
            }, 300);
            sidebar.animate({
                "margin-left" : "0px"
            }, 300);
        }
        else {
            $(this).animate({
                "margin-left" : "0px"
            }, 300);
            sidebar.animate({
                "margin-left" : "-250px"
            }, 300);
        }
    });
})