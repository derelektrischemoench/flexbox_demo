$(document).ready(function(){

    var display = $('#column_wrapper3').css('display');
    var justifyContent = $('#column_wrapper3').css('justify-content');

    $('.code p').prepend( "#column_wrapper{display:" + display +"}<br>" );
    $('.code p').append( "#column_wrapper{justify-content:" + justifyContent + "}");

    $('.button1').click(function () {
        $('#column_wrapper3').prepend("<div class='box1'></div>");
    });

    toggleJustifyContent=function () {

            $('#column_wrapper3').addClass('jcsa');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>"+
                    "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );

            $('.button2').click(function () {
                $('#column_wrapper3').removeClass('jcsa');
            });

    };

    $('.button2').click(function () {
        toggleJustifyContent();
    });
});