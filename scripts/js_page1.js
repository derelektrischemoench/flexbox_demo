$(document).ready(function(){

    var rwdb = "#row_wrapper:{display:block}";
    var rwdf = "#row_wrapper:{display:flex}";
    var cwdb = "#column_wrapper:{display:block}";
    var cwdf = "#column_wrapper:{display:flex}";
    var fdc = "#row_wrapper:{flex-direction:column}";
    var rw = "#row_wrapper";
    var cw = "#column_wrapper";

   $('.code p').prepend(rw + "{display:" + $('#row_wrapper').css('display') + "} <br>" +
                        cw + "{display:" + $('#column_wrapper').css('display') + "}");

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
            //this below displays the css dynamically aka gets it directly from the dom
            $('.code ').prepend("<p>" + rw + "{display:"+ $('#row_wrapper').css('display') + "}<br>" +
                                        cw + "{display:"+ $('#column_wrapper').css('display') +"}"+ "</p>");
        }

        else ($('.code ').prepend("<p>" +   rw + "{display:"+ $('#row_wrapper').css('display') + "}<br>" +
                                            cw + "{display:"+ $('#column_wrapper').css('display') +"}"+"</p>"));

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


   $('.button3').click(function () {

        if( $('#column_wrapper').css('flex-direction', 'column') ) {
                $('#column_wrapper').css('flex-direction', 'row');
                $('.box1, .box2').css('align-self', 'center');
                $('.code p').append("<br>" + "#column_wrapper{flex-direction: " + $('#column_wrapper').css('flex-direction') + "}" +
                                    "<br>" + ".box1, .box2 {align-self:" + $('.box1').css('align-self') + "}"       );
        }
    })
});