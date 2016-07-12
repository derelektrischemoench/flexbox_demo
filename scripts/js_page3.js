$(document).ready(function(){

    var display = $('#column_wrapper3').css('display');
    

    $('.code p').prepend( "#column_wrapper{display:" + display +"}<br>" );
    $('.code p').append( "#column_wrapper{justify-content:flex-start}");

    $('.button1').click(function () {
        $('#column_wrapper3').prepend("<div class='box1'></div>");
    });

    toggleJustifyContent=function () {

        if($('.legende').hasClass('stage1')){
            $('#column_wrapper3').addClass('jcsa');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>" +
                "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );
            $('.legende').removeClass('stage1');
            $('.legende').addClass('stage2');
        }

        else if ( $('.legende').hasClass('stage2') ) {

            $('#column_wrapper3').removeClass('jcsa');
            $('#column_wrapper3').addClass('jcsb');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>" +
                "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );
            $('.legende').removeClass('stage2');
            $('.legende').addClass('stage3');
        }

        //adn now for justify-content center
        else if ( $('.legende').hasClass('stage3') ){
            $('#column_wrapper3').removeClass('jcsb');
            $('#column_wrapper3').addClass('jcsc');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>" +
                "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );
            $('.legende').removeClass('stage3');
            $('.legende').addClass('stage4');
        }

        else if ( $('.legende').hasClass('stage4') ){
            $('#column_wrapper3').removeClass('jcsc');
            $('#column_wrapper3').addClass('jcfe');
            $('.code p').remove();
            $('.code').append(
                "<p> #column-wrapper {display:" + $("#column_wrapper3").css("display") + "}<br>" +
                "#column-wrapper {justify-content:" + $("#column_wrapper3").css("justify-content") + "}</p>"
            );
            $('.legende').removeClass('stage4');
            $('.legende').addClass('stage5');
        }

    };

    $('.button2').click(function () {
        toggleJustifyContent();
    });
});