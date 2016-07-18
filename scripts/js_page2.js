/**
 * Created by chris on 12.07.16.
 */
$(document).ready(function () {

    $(window).ready(function () {
        updateDisplay();
    });

    var getWrapState = function () {
      return( $('#column_wrapper2').css('flex-wrap') );
    };

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column_wrapper{display:" + getColumnWrapperFlexState() + "}<br>" +
            ".box1{flex-grow:" + getChild1FlexState() + "}<br>" +
            ".box2{flex-grow:" + getChild2FlexState() + "}</p>"
        )
    };



    //this button adds boxes to the flex container
    $('.button1').click(function () {
        $('#column_wrapper2').prepend("<div class='box1'></div>");
    });

    //this button toggles the flex-wrap abilities
    $('.button2').click(function () {
        //$('#column_wrapper2').css('flex-wrap','wrap');
        $('#column_wrapper2').toggleClass('wrap');
        $('.code p').remove();
        $('.code').append(
            "<p> #column-wrapper {display:" + $("#column_wrapper2").css("display") + "}<br>"+
            "#column_wrapper{" + "flex-wrap: " + $('.wrap').css('flex-wrap') + "}</p>"
        );
        console.log(getWrapState());
    });
});