$(document).ready(function(){

    $('.code p').prepend( "#column_wrapper{display:" + $('#column_wrapper3').css('display') +"}<br>" );
    $('.code p').append( "#column_wrapper{justify-content:" + $('#column_wrapper3').css('justify-content') + "}");

    $('.button1').click(function () {
        $('#column_wrapper3').prepend("<div class='box1'></div>");
    });

    $('.button2').click(function () {
        $('#column_wrapper3').css('justify-content', 'space-around');
        $('.code p').remove();
        $('.code').append(
            "<p>#column_wrapper{display:" + $('#column_wrapper3').css('display') +"}<br>" +
            "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}<br>"+"</p>"
        );
    });
});