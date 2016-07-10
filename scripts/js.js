$(document).ready(function(){

    var rwdb = "#row_wrapper:{display:block}";
    var cwdb = "#column_wrapper:{display:block}";
    var rwdf = "#row_wrapper:{display:flex}";


   $('.code p').prepend("<p>" + rwdb + "<br>" + cwdb);

    $('.button1').click(function () {
        $('.code p').remove();
        $('#row_wrapper').toggleClass('isFlexRow');

        if($('#row_wrapper').hasClass('isFlexRow')){
            $('.code ').prepend("<p>" + rwdf + "<br>" + cwdb + "</p>");
        }

        else ($('.code').prepend("<p>" + rwdb + "<br>" + cwdb));
    });

    $('.button2').click(function () {

        if($('#row_wrapper').hasClass('isFlexRow')){
            //do stuff
            $('#column_wrapper').toggleClass('isFlexColumn');
        }

        else{
            //do nothing
        }

    });
});