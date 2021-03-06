$(function() {
    let circle = $('#circle');
    let circleHover = $('h1, h2, h3, h4, h5, h6, a, p, ion-icon');

    $(document).on('mousemove', function(e) {
        var x = e.pageX;
        var y = e.pageY;

        circle.css({
            left: x,
            top: y
        });
    })

    function circleEffect1() {
        circle.css({
            width : '350px',
            height : '350px',
            border : '2px dashed #65AFFF',
            background : 'none'
        });
    }
    
    function circleEffect2() {
        circle.css({
            width : '250px',
            height : '250px',
            background : '#65AFFF'
        });
    }

    circleHover.on('mousemove', circleEffect1);
    circleHover.on('mouseleave', circleEffect2);
});