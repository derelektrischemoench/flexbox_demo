/**
 * Created by chris on 12.07.16.
 */
$(document).ready(function () {

    //$('.code p').prepend("<span class='heading'><h2>Flex-Wrap</h2></span>");
    $('.code p').prepend( "#column_wrapper{display:" + $('#column_wrapper2').css('display') +"}<br>" );
    $('.code p').append( "#column_wrapper{flex-wrap:" + $('#column_wrapper2').css('flex-wrap') + "}");


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
    });
});