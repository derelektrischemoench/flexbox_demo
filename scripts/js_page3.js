//also todo: fix the display

$(document).ready(function(){
    var cwDisplayState = $('#column_wrapper4').css('display');
    var rwDisplayState =  $('#row_wrapper4').css('display');
    var cwFlexState = $('#column_wrapper4').css('justify-content');
    var rwFlexState = $('#row_wrapper4').css('justify-content');
    var display = $('#column_wrapper4').css('display');



    $(window).ready(function () {
        updateDisplay();
    });



    var toggleJustifyContent=function () {

            if ($('#column_wrapper4').hasClass('jcc')) {

                $('#column_wrapper4').addClass('jcsa');
                $('#column_wrapper4').removeClass('jcc');
                $('.legende').addClass('stage2');
                updateDisplay();
            }

            else if ($('.legende').hasClass('stage2')) {

                $('#column_wrapper4').removeClass('jcsa');
                $('#column_wrapper4').addClass('jcsb');
                $('.legende').removeClass('stage2');
                $('.legende').addClass('stage3');
                updateDisplay();
            }

            //adn now for justify-content center
            else if ($('.legende').hasClass('stage3')) {
                $('#column_wrapper4').removeClass('jcsb');
                $('#column_wrapper4').addClass('jcc');
                $('.legende').removeClass('stage3');
                $('.legende').addClass('stage4');
                updateDisplay();
            }

            else if ($('.legende').hasClass('stage4')) {
                $('#column_wrapper4').removeClass('jcc');
                $('#column_wrapper4').addClass('jcfe');
                $('.legende').removeClass('stage4');
                $('.legende').addClass('stage1');
                updateDisplay();
            }



    };

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column-wrapper:{justify-content:" + getFlexState( $('#column_wrapper4') ) + "}</p>"
        );
    };



    var addBlock = function () {
        $('#column_wrapper4').prepend("<div class='box1'></div>");
    };

    var getFlexState = function (element) {
        return( $(element).css('justify-content') );
    };

    $('.button2').click(function () {
        toggleJustifyContent();
    });

    //add a block to the container
    $('.button1').click(function () {
        addBlock();
    });

    console.log(cwFlexState);





});