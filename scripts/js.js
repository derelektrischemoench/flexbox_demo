$(document).ready(function(){

    var rwdb = "#row_wrapper:{display:block}";
    var rwdf = "#row_wrapper:{display:flex}";
    var cwdb = "#column_wrapper:{display:block}";
    var cwdf = "#column_wrapper:{display:flex}";
    var fdc = "#row_wrapper:{flex-direction:column}";
    var rw = "#row-wrapper";



   $('.code p').prepend(rwdb + "<br>" + cwdb);

    $('.button1').click(function () {
        $('.code p').remove();
        $('.button1').toggleClass('flextoggle_active');
        $('#row_wrapper').toggleClass('isFlexRow');

        if($('.button1').hasClass('active') && $('.button2').hasClass('flextoggle_active')){
            $('.button1').click(function () {
                $('#column_wrapper').removeClass('flextoggle_active'),
                    $('#row_wrapper').removeClass('flextoggle_active');
            });
        }

        if($('#row_wrapper').hasClass('isFlexRow')){
            //TODO: this below displays the css dynamically
            $('.code ').prepend("<p>" + rw + "<br>" + $('#row_wrapper').css('display') + "</p>");
        }

        else ($('.code').prepend("<p>" + rw + "<br>" + $('#row_wrapper').css('display') + "</p>"));

    });

    $('.button2').click(function () {
        if($('#row_wrapper').hasClass('isFlexRow')){
            $('.code p').remove();
            $('#column_wrapper').toggleClass('isFlexColumn');
            $('.button2').toggleClass('flextoggle_active');

            if($('#column_wrapper').hasClass('isFlexColumn')){
                $('.code').prepend("<p>" + rwdf + "<br>" + cwdf + "</p>");
            }
            else {
                $('.code p').remove();
                $('.code').prepend("<p>" + rwdf + "<br>" + cwdb + "</p>");


            }
        }

        else{
            //do nothing
        }

    });




    //only allow button 3 to work if button 1 is active aka the container is flex
    if ($('.button1').hasClass('flextoggle_active')){
        $('.button3').click(function(){
            {
                //do stuff
                $('#row_wrapper').className.remove();

                //$('.code p').remove();
                //$('.code').prepend("<p>" + rwdf + "<br>" +"column-wrapper{flex-direction:column}" +  "</p>");
            }
        });

    }
});