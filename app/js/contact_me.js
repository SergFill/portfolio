var contactMe = (function(){

	var _init = function(){
		_setUpListeners();
	};

	var _setUpListeners = function(){
		// прослушка событий...
		$('#contact-me').on('submit', _submitForm);	
	};

	var _submitForm = function(ev){
		ev.preventDefault();

		console.log('Отправка формы');

		var form = $(this),
		    url = 'contactme.php',
		    defObj = _ajaxForm(form, url);

		    // что то будем с результатами с сервера defObj
	};

	var _ajaxForm = function(form, url){
		console.log('ajax запрос но с проверкой');

		if(!validation.validateForm(form)) return false;
		// если false то код ниже не произойдет никогда


	};


	return {
		init: _init
	}

})();

contactMe.init();