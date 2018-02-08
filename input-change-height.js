(function( window ) {

    'use strict';

    function inputAutoHeight() {
        if ( $('.auto-height-indicator').length ) {

            let span = $('.auto-height-indicator'),
                defaultHeight = '25px',
                input = $('.auto-height-indicator-input');

            function initSpan(textarea){
                span.text(textarea.text())
                    .width(textarea.width())      
                    .css('font',textarea.css('font'));
            }

            input.on({
                input: function(){
                    let text = $(this).val();      
                    span.text(text);      
                    $(this).height(text ? span.height() : defaultHeight);
                },
                focus: function(){
                    initSpan($(this));
                },
                keypress: function(e){
                    if(e.which == 13) e.preventDefault();
                }
            });

        }
    }

    inputAutoHeight();

    $(window).resize(function(event) {
        inputAutoHeight();
    });

})(window);