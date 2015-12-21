var validation = (function(){

	var _init = function(){
		_setUpListeners();
	};

	var _setUpListeners = function(){
		// прослушка событий...
		console.log('это validation.js');
	};

    // создает тултипы
	var _createQtip = function(element, position){

		console.log(element);

		// позиция тултипа
			if (position === 'right'){
				pos = {
					my: 'left center',
					at: 'right center'
				}
			}else{
				pos = {
					my: 'right center',
					at: 'left center',
					adjust: {
						method: 'shift none'
					}
				}
			}

		// инициализация тултипа
			element.qtip({
				content: {
					text: function(){
						return $(this).attr('qtip-content');
					}
				},
				show: {
					event: 'show'
				},
				hide: {
					event: 'keydown hideTooltip'
				},
				position: pos,
				style: {
					classes: 'qtip-mystyle qtip-rounded',
					tip: {
						height: 10,
						width: 16
					}
				}

			}).trigger('show');			
	};

	// универсальная функция валидации
	var _validateForm = function(form){

		console.log('я нахожусь в начале var _validateForm');

		var elements = form.find('input, textarea').not('input[type="file"], input[type="hiedden"]'),
		    valid = true;

		// пройдемся по всем элементам формы
		$.each(elements, function(index, val){
			console.log(index); // для себя
			console.log(val); // для себя

			var element = $(val),
			        val = element.val(),
			   position = element.attr('qtip-position');

			if(val.length === 0){
				element.addClass('has-error');
				_createQtip(element, position);
				console.log(position); // для себя
				valid = false;
			}         

		});

		return valid;

		    
	};

	return {
		init: _init,
		validateForm: _validateForm
	}
		

})();

validation.init();
