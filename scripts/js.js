
/*$(document).ready(function () {
    alert("asdads");
});*/

$(document).ready(function(){
   $('.code p').prepend("{display:block}");


    $('.button1').click(function () {
        $('.code p').remove();
        $('#row_wrapper').toggleClass('isFlexRow');

        if($('#row_wrapper').hasClass('isFlexRow')){
            $('.code ').prepend("<p>{display:flex}</p>");
        }

        else ($('.code').prepend("<p>{display:block}</p>"));


        
        /*if($('#row_wrapper').hasClass('isFlexRow')){
            $('.code p').empty();
            $('.code p').append("#row_wrapper {display:flex}");
        }

        else {
            $('.code p').empty();
            $('.code p').append("#row_wrapper {display:block}");
        }*/

    });

    $('.button2').click(function () {
        $('#column_wrapper').toggleClass('isFlexColumn');
        /*$('.code p').append("#row_wrapper {display:flex}")*/
    });
});