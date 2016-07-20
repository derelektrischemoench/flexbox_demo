$(document).ready(function () {

    var switchcounter = 0;

    var getColumnWrapperFlexState = function () {
        return( $('#column_wrapper5').css('display') );
    };

    var getColumnWrapperFlexDirection = function () {
        return( $('#column_wrapper5').css('flex-direction') );
    };

    var changeFlexDirection = function () {

        switch(switchcounter){
            case 0: $('#column_wrapper5').css('flex-direction', 'row-reverse');
                    switchcounter = 1;
                break;

            case 1: $('#column_wrapper5').css('flex-direction', 'column');
                    switchcounter = 2;
                break;
            case 2: $('#column_wrapper5').css('flex-direction', 'column-reverse');
                    switchcounter = 3;
                break;
            case 3: $('#column_wrapper5').css('flex-direction', 'row');
                switchcounter = 0;
                break;
        }
            
    };

    var updateDisplay = function () {
        $('.code p').remove();
        $('.code').prepend(
            "<p>#column_wrapper{display:" + getColumnWrapperFlexState() + "}<br>" +
            "#column_wrapper{flex-direction:" + getColumnWrapperFlexDirection() + "}</p>"

        )
    };



    $( '.button1' ).click(function () {
        updateDisplay();
    });

    $( '.button2' ).click(function () {
        changeFlexDirection();
        updateDisplay();
    })
    
});