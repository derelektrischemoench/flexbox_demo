
/*$(document).ready(function () {
    alert("asdads");
});*/

$(document).ready(function(){
    $('.button1').click(function () {
        $('#row_wrapper').toggleClass('isFlexRow');

        if($('#row_wrapper').hasClass('isFlexRow')){
            $('.code p').empty();
            $('.code p').append("#row_wrapper {display:flex}");
        }

        else {
            $('.code p').empty();
            $('.code p').append("#row_wrapper {display:block}");
        }

    });

    $('.button2').click(function () {
        $('#column_wrapper').toggleClass('isFlexColumn');
    });
});