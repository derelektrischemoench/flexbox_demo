$(document).ready(function () {

    var getColumnWrapperFlexState = function () {
        return( $('#column_wrapper5').css('display') );
    };

    var getColumnWrapperFlexDirection = function () {
        return( $('#column_wrapper5').css('flex-direction') );
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
                "#column_wrapper{flex-direction:" + getColumnWrapperFlexDirection() + "}<br>" +
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

    var toggleMobileView = function () {
        $('#row_wrapper5').css('width','200px');
        $('#column_wrapper5').css('flex-direction','column');
        $('.box1, .box2').toggleClass('mobileview');

        $('.code p').remove();
        $('.code').prepend(
            "<p>#column_wrapper{display:" + getColumnWrapperFlexState() + "}<br>" +
            "#column_wrapper{flex-direction:" + getColumnWrapperFlexDirection() + "}<br>" +
            "#siteContent{flex-grow:" + $('.box1').css('height') + "}<br>" +
            "#sidebar{flex-grow:" + $('.box2').css('height') + "}<br>" +
            "! The values for #sidebar and #site_content are width values but since we changed the direction of the container, thus rotating the alignment axis by 90°, width and height are changed</p>"
        )
    };

    $( '.button2' ).click(function () {
        updateDisplay();

    });

    $( '.button3' ).click(function () {
        toggleInitialLayout();
        updateDisplay();
    });

    $( '.button4' ).click(function () {
        toggleMobileView();
        //updateDisplay();
    });
});