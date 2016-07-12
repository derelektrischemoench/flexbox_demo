/**
 * Created by chris on 12.07.16.
 */
$(document).ready(function () {

    //$('.code p').prepend("<span class='heading'><h2>Flex-Wrap</h2></span>");
    $('.code p').prepend( "#column_wrapper{display:" + $('#column_wrapper').css('display') +"}<br>" );

    if ( $("#column_wrapper2").css('row-wrap', 'wrap') ){
      $('.code p').prepend("#column_wrapper{row-wrap:" + $('#column_wrapper').css('row-wrap') +"}<br>")
    }




    $('.code p').append( "#column_wrapper{flex-wrap:" + $('#column_wrapper2').css('flex-wrap') + "}");



    $('.button1').click(function () {
        $('#column_wrapper2').prepend("<div class='box1'></div>");
    });

    $('.button2').click(function () {
        $('#column_wrapper2').css("flex-wrap", "wrap");
    })
});