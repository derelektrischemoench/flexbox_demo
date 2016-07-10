
/*$(document).ready(function () {
    alert("asdads");
});*/

$(document).ready(function(){
    $('.button1').click(function () {
        $('#row_wrapper').toggleClass('isFlexRow');
    });

    $('.button2').click(function () {
        $('#column_wrapper').toggleClass('isFlexColumn');
    });
});