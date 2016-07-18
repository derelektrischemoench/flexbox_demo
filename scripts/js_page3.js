$(document).ready(function(){
    var cwDisplayState = $('#column_wrapper4').css('display');
    var rwDisplayState =  $('#row_wrapper4').css('display');
    var cwFlexState = $('#column_wrapper4').css('justify-content');
    var rwFlexState = $('#row_wrapper4').css('justify-content');
    var display = $('#column_wrapper4').css('display');
    var columnWrapperState = 0;



    $(window).ready(function () {
        toggleJustifyContent();
        updateDisplay();
    });

    var toggleJustifyContent=function () {

        switch(columnWrapperState){
            //flex-start
            case 0: $('#column_wrapper4').removeClass();
                    $('#column_wrapper4').addClass('jcfs');
                    columnWrapperState = 1;
                break;
            
            //center
            case 1: $('#column_wrapper4').removeClass();
                    $('#column_wrapper4').addClass('jcc');
                    columnWrapperState = 2;
                break;

            //flex-end
            case 2: $('#column_wrapper4').removeClass();
                $('#column_wrapper4').addClass('jcfe');
                columnWrapperState = 3;
                break;

            //space-around
            case 3: $('#column_wrapper4').removeClass();
                $('#column_wrapper4').addClass('jcsb');
                columnWrapperState = 4;
                break;

            //space-between
            case 4: $('#column_wrapper4').removeClass();
                $('#column_wrapper4').addClass('jcsa');
                columnWrapperState = 0;
                break;
        }

            /*if ($('#column_wrapper4').hasClass('jcc')) {

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
            }*/



    };

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column-wrapper:{justify-content:" + getFlexState( $('#column_wrapper4') ) + "}</p>"
        );
    };



    var addBlock = function () {
        $('#column_wrapper4').prepend("<div class='box1'></div>");
        updateDisplay();
    };

    var getFlexState = function (element) {
        return( $(element).css('justify-content') );
    };

    //add a block to the container and update the display
    $('.button1').click(function () {
        addBlock();
        updateDisplay();
    });

    //toggle the justification state of the items and update the display
    $('.button2').click(function () {
        toggleJustifyContent();
        updateDisplay();
        console.log(columnWrapperState);
    });




});