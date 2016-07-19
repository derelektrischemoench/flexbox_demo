$(document).ready(function () {

    var getColumnWrapperFlexState = function () {
        return( $('#column_wrapper5').css('display') );
    };

    var getChild1FlexState = function () {
        return( $('.box1').css('flex-grow') );
    };

    var getChild2FlexState = function () {
        return( $('.box2').css('flex-grow') );
    };

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column_wrapper{display:" + getColumnWrapperFlexState() + "}<br>" +
            "#siteContent{flex-grow:" + getChild1FlexState() + "}<br>" +
            "#sidebar{flex-grow:" + getChild2FlexState() + "}</p>"
        )
    };

    var toggleInitialLayout = function () {
        $('.box1').toggleClass('fg1');
        console.log('lel');

    };

    var hundredpercentheight = function () {
         $('.box1').toggleClass('hundredpercentheight');
    };

    $( '.button2' ).click(function () {
        updateDisplay();
    });

    $( '.button3' ).click(function () {
        toggleInitialLayout();
        updateDisplay();
    });

    $( '.button4' ).click(function () {
        hundredpercentheight();
        updateDisplay();
    });
});