//TODO: the button doesn't toggle all the stages, fix it

$(document).ready(function(){
    var cwDisplayState = $('#column_wrapper4').css('display');
    var rwDisplayState =  $('#row_wrapper4').css('display');
    var cwFlexState = $('#column_wrapper4').css('justify-content');
    var rwFlexState = $('#row_wrapper4').css('justify-content');
    var display = $('#column_wrapper4').css('display');


    $('.code p').prepend( "#column_wrapper{display:" + display +"}<br>" );
    $('.code p').append( "#column_wrapper{justify-content:flex-start}");

    $('.button1').click(function () {
        $('#column_wrapper4').prepend("<div class='box1'></div>");
    });

    var toggleJustifyContent=function () {

            if ($('#column_wrapper4').hasClass('jcc')) {
                $('#column_wrapper4').addClass('jcsa');
                $('.code p').remove();
                $('.code').append(
                    "<p> #column-wrapper {display:" + $("#column_wrapper4").css("display") + "}<br>" +
                    "#column-wrapper {justify-content:" + $("#column_wrapper4").css("justify-content") + "}</p>"
                );
                $('#column_wrapper4').removeClass('jcc');
                $('.legende').removeClass('jcsa');
                $('.legende').addClass('stage2');
            }

            else if ($('.legende').hasClass('stage2')) {

                $('#column_wrapper4').removeClass('jcsa');
                $('#column_wrapper4').addClass('jcsb');
                $('.code p').remove();
                $('.code').append(
                    "<p> #column-wrapper {display:" + $("#column_wrapper4").css("display") + "}<br>" +
                    "#column-wrapper {justify-content:" + $("#column_wrapper4").css("justify-content") + "}</p>"
                );
                $('.legende').removeClass('stage2');
                $('.legende').addClass('stage3');
            }

            //adn now for justify-content center
            else if ($('.legende').hasClass('stage3')) {
                $('#column_wrapper4').removeClass('jcsb');
                $('#column_wrapper4').addClass('jcc');
                $('.code p').remove();
                $('.code').append(
                    "<p> #column-wrapper {display:" + $("#column_wrapper4").css("display") + "}<br>" +
                    "#column-wrapper {justify-content:" + $("#column_wrapper4").css("justify-content") + "}</p>"
                );
                $('.legende').removeClass('stage3');
                $('.legende').addClass('stage4');
            }

            else if ($('.legende').hasClass('stage4')) {
                $('#column_wrapper4').removeClass('jcc');
                $('#column_wrapper4').addClass('jcfe');
                $('.code p').remove();
                $('.code').append(
                    "<p> #column-wrapper {display:" + $("#column_wrapper4").css("display") + "}<br>" +
                    "#column-wrapper {justify-content:" + $("#column_wrapper4").css("justify-content") + "}</p>"
                );
                $('.legende').removeClass('stage4');
                $('.legende').addClass('stage1');
            }



    };

    $('.button2').click(function () {
        toggleJustifyContent();
    });

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column-wrapper:{flex-direction:" + cwFlexState + "}<br>" +
            ".box1:{align-self:" + alignSelfStateBox1 + "}<br>" +
            ".box2:{align-self:" + alignSelfStateBox2 + "}</p>"
        );
        console.log(alignSelfStateBox1,alignSelfStateBox2);
    };
});