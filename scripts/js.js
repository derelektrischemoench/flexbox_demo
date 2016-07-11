$(document).ready(function(){

    var rwdb = "#row_wrapper:{display:block}";
    var rwdf = "#row_wrapper:{display:flex}";
    var cwdb = "#column_wrapper:{display:block}";
    var cwdf = "#column_wrapper:{display:flex}";



   $('.code p').prepend("<p>" + rwdb + "<br>" + cwdb);

    $('.button1').click(function () {
        $('.code p').remove();
        $('#row_wrapper').toggleClass('isFlexRow');

        if($('#row_wrapper').hasClass('isFlexRow')){
            $('.code ').prepend("<p>" + rwdf + "<br>" + cwdb + "</p>");
        }

        else ($('.code').prepend("<p>" + rwdb + "<br>" + cwdb + "</p>"));
    });

    $('.button2').click(function () {

        if($('#row_wrapper').hasClass('isFlexRow')){
            //empty the code box
            //$('.code p').remove();TODO: fix this, this emptys the box all the time
            //do stuff aka only enable button two if container is flex
            $('#column_wrapper').toggleClass('isFlexColumn');
            $('.code p').prepend("<p>" + rwdf + "<br>" + cwdf + "</p>");

            if($('#column_wrapper').hasClass('is FlexColumn')){
                $('.code').prepend("<p>" + rwdf + "<br>" + cwdf + "</p>");
            }
            else {
                //$('.code p').remove();
                //$('.code').prepend("<p>" + rwdf + "<br>" + cwdb + "</p>");
            }
        }

        else{
            //do nothing
        }

    });
});