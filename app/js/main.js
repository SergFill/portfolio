

;(function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('#my-button').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup();

            });

        });

    })(jQuery);


    $(document).ready(function() {
	console.log("Я на главной");

	$('element_to_pop_up').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown'
    });

    /* for expample
    var $inputFile = $('#input-file');

    $inputFile.on('change', function(){
    	var filepath = $inputFile.val(),
    		$input = $('.input-file__fake');

    	//filepath = filepath.replace(/c:\\fakepath\\gmi, "");
    	$input.val(filepath);

    	console.log(this);
    	$input.trigger('hideQtip')	
    });

    $('.container').on('click', '#show-popup', function(event){
    	event.preventDefault();

    	$('.form-block').bPopup({
    		closeClass: 'close-popup'
    	});
    });
    */

    /* реализация qtip */

    var validation = (function(){

    	var 
    		_init = function(){
    			_setUpListeners();
    		},

    		_setUpListeners = function(){

    		},

    		_validateForm = function(form){
    			var elements = $(form).find('.input, .textarea'),
    				valid = false;

    			//console.log(elements);

    			$.each(elements, function(index, el){
    				var val = $(el).val();

    				if(val.length === 0){
    					valid = false;
    				}else{
    					valid = true;
    				}
    			});

    			return valid;
    		}

    	


    	return {
    		init: _init,
    		validateForm: _validateForm
    	}

    })();

    validation.init();

    $('.form').on('submit', function(event){

    	event.preventDefault();

    	var form = this;

    	validation.validateForm(form);


    });


});



