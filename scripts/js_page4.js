$(document).ready(function () {
    var display = $('#column_wrapper4').css('display');
    var justify = $('#column_wrapper4').css('justify-content');
    var flex1 = $('.box1').css('flex-grow');
    var flex2 = $('.box2').css('flex-grow');
    var getFlexProperty1 = $('.box1').css('flex-grow');

    var cwDisplayState = $('#column_wrapper4').css('display');
    var rwDisplayState =  $('#row_wrapper4').css('display');
    var cwFlexState = $('#column_wrapper4').css('flex-direction');
    var rwFlexState = $('#row_wrapper4').css('flex-direction');
    var jcState = $('#row_wrapper4').css('justify-content');

    $('.code p').prepend( "#column_wrapper{display:" + cwDisplayState +"}<br>" );
    $('.code p').append( "#row_wrapper{justify-content:" + jcState + "}<br>");
    $('.code p').append(".child1{flex:" + flex1 + "}");

    //this button adds boxes to the flex container
    var count=2;
    var addShit=function() {
        //console.log(count);
            $('#column_wrapper4').prepend("<div class='box" +count+"'>Box  "+count+"</div>");
            console.log( $('#column_wrapper4').children('div').attr("class") );
        count++;
    };

    $('.button1').click(function () {
        addShit();
    });

    $('.button2').click(function () {
        toggleFlexBox1();
        updateDisplay();
    });

    $('.button3').click(function () {
        toggleFlexBox2();
        updateDisplay();
    });

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column_wrapper{display:" + getColumnWrapperFlexState() + "}<br>" +
            ".box1{flex-grow:" + getChild1FlexState() + "}<br>" +
            ".box2{flex-grow:" + getChild2FlexState() + "}</p>"
        )
    };

    //change flex properties of children
    var toggleFlexBox1=function () {
        $('.box1').toggleClass('fg1');
    };

    var toggleFlexBox2 = function () {
        $('.box2').toggleClass('fg2');
    };

    //get the columnWrapper Flex-state
    var getColumnWrapperFlexState = function () {
        return( $('#column_wrapper4').css('display') );
    };

    var getChild1FlexState = function () {
        return( $('.box1').css('flex-grow') );
    };

    var getChild2FlexState = function () {
        return( $('.box2').css('flex-grow') );
    };
    



});