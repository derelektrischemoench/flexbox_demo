/*TODO:I probably have to manually inject the display-flex properties to the dom
instead of assigning a class and  then manually toggle the class because since I
assign the align-self properties via class I can't automatically get the align-self of an item
at any time since the align-self property gets assigned via class. So if the item doesn't have the
class I can't get it. FML*/
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
    var alignSelfStateBox1 = $('.box1').css('align-self');
    var alignSelfStateBox2 = $('.box2').css('align-self');

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
    
    //TODO: rewrite this to manually switch css properties and add them to the #column wrapper ID
   $('.button3').click(function () {
       if( $('.button2').hasClass('flextoggle_active') ){
           $('#column_wrapper').removeClass('isFlexColumn');
           $('#column_wrapper').css('flex-direction','column');
       }
       else{
           //do the other thing
       }
       //( $('#column_wrapper') ).css('flex-direction','row');
       updateDisplay();
    });
    
    
   $('.button4').click(function () {
       //argument = Boxnumber
       toggleAlignSelf('1');
       updateDisplay();
   });
    $('.button5').click(function () {
        //Argument = Boxnumber
        toggleAlignSelf('2');
        updateDisplay();
    });


   var updateDisplay = function () {
       $('.code p').remove();
        $('.code').prepend(
            "<p>#column-wrapper:{flex-direction:" + cwFlexState + "}<br>" +
            ".box1:{align-self:" + alignSelfStateBox1 + "}<br>" +
            ".box2:{align-self:" + alignSelfStateBox2 + "}</p>"
        );
       console.log(alignSelfStateBox1,alignSelfStateBox2);
   };
    
   var toggleAlignSelf = function (boxNr) {
       //this changes the align-self property taking the box number (box1 or box2 as a parameter)
       //the problem is that the class has the align.self property not the box
        if( $('#column_wrapper').hasClass('isFlexColumn') ){
            $('.box'+ boxNr).toggleClass('asc');
        }
    }
});