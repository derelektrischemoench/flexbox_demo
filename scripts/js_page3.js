$(document).ready(function(){

    var display = $('#column_wrapper3').css('display');
    var justifyContent = $('#column_wrapper3').css('justify-content');

    $('.code p').prepend( "#column_wrapper{display:" + display +"}<br>" );
    $('.code p').append( "#column_wrapper{justify-content:" + justifyContent + "}");

    $('.button1').click(function () {
        $('#column_wrapper3').prepend("<div class='box1'></div>");
    });

    toggleJustifyContent=function () {

        if(!$('.legende').hasClass('moep')){
            $('#column_wrapper3').addClass('jcsa');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>" +
                "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );
            $('.legende').addClass('moep');

            console.log('function called');
        }

        else {
            $('#column_wrapper3').removeClass('jcsa');
            $('#column_wrapper3').addClass('jcsb');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>" +
                "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );
        }

    };

    $('.button2').click(function () {
        toggleJustifyContent();
    });
});