$(document).ready(function(){

    var rwdb = "#row_wrapper:{display:block}";

    var rwdf = "#row_wrapper:{display:flex}";
    var cwdb = "#column_wrapper:{display:block}";
    var cwdf = "#column_wrapper:{display:flex}";
    var fdc = "#row_wrapper:{flex-direction:column}";
    var rw = "#row_wrapper";
    var cw = "#column_wrapper";
    var cwDisplayState = $('#column_wrapper').css('display');
    var rwDisplayState =  $('#row_wrapper').css('display');
    var cwFlexState = $('#column_wrapper').css('flex-direction');
    var rwFlexState = $('#row_wrapper').css('flex-direction');

   $('.code p').prepend(rw + "{display:" + rwDisplayState + "}<br>" +
                        cw + "{display:" + cwDisplayState + "}");

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
       ( $('#column_wrapper') ).toggleClass('fdr');
       updateDisplay();
    });
   $('.button4').click(function () {
       toggleAlignSelf('1');
   });
    $('.button5').click(function () {
        toggleAlignSelf('2');
    });


   var updateDisplay = function () {
       $('.code p').remove();
        $('.code').prepend(
            "<p>#column-wrapper:{flex-direction:" + cwFlexState + "}</p>"
        )
   };
    
   var toggleAlignSelf = function (boxNr) {
        console.log("button presses");
        if( $('#column_wrapper').hasClass('isFlexColumn') ){
            $('.box'+ boxNr).toggleClass('asc');
        }
    }
});