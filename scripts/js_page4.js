$(document).ready(function () {
    var display = $('#column_wrapper4').css('display');
    var justify = $('#column_wrapper4').css('justify-content');


    $('.code p').prepend( "#column_wrapper{display:" + display +"}<br>" );
    $('.code p').append( "#column_wrapper{justify-content:" + justify + "}");

    //this button adds boxes to the flex container
    var count=2;
    var addShit=function() {
        //console.log(count);
            $('#column_wrapper4').prepend("<div class='box" +count+"'></div>");

            console.log( $('#column_wrapper4').children('div').attr("class") );

        count++;

    };

    $('.button1').click(function () {
        addShit();
    })

});