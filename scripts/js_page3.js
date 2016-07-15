//TODO: the button doesn't toggle all the stages, fix it
//this is because the class assignment and shit doesn't work properly
//also todo: fix the display

$(document).ready(function(){
    var cwDisplayState = $('#column_wrapper4').css('display');
    var rwDisplayState =  $('#row_wrapper4').css('display');
    var cwFlexState = $('#column_wrapper4').css('justify-content');
    var rwFlexState = $('#row_wrapper4').css('justify-content');
    var display = $('#column_wrapper4').css('display');


    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column-wrapper:{justify-content:" + cwFlexState + "}</p>"
        );
    };

    //this needs to be called here so the content of the container gets
    //treated at the correct moment
    updateDisplay();


    var toggleJustifyContent=function () {

            if ($('#column_wrapper4').hasClass('jcc')) {
                updateDisplay();
                $('#column_wrapper4').addClass('jcsa');
                $('#column_wrapper4').removeClass('jcc');


                $('.legende').addClass('stage2');
            }

            else if ($('.legende').hasClass('stage2')) {

                $('#column_wrapper4').removeClass('jcsa');
                $('#column_wrapper4').addClass('jcsb');
                
                updateDisplay();
                
                $('.legende').removeClass('stage2');
                $('.legende').addClass('stage3');
            }

            //adn now for justify-content center
            else if ($('.legende').hasClass('stage3')) {
                $('#column_wrapper4').removeClass('jcsb');
                $('#column_wrapper4').addClass('jcc');
                
                updateDisplay();
                
                $('.legende').removeClass('stage3');
                $('.legende').addClass('stage4');
            }

            else if ($('.legende').hasClass('stage4')) {
                $('#column_wrapper4').removeClass('jcc');
                $('#column_wrapper4').addClass('jcfe');
                
                updateDisplay();
                
                $('.legende').removeClass('stage4');
                $('.legende').addClass('stage1');
            }



    };
    var addBlock = function () {
        $('#column_wrapper4').prepend("<div class='box1'></div>");
    };

    $('.button2').click(function () {
        toggleJustifyContent();
    });

    //add a block to the container
    $('.button1').click(function () {
        addBlock();
    });





});