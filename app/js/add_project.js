var myModule = (function(){

    // инициализирует наш модуль
	var _init = function(){
		_setUpListeners();
	};

	var _setUpListeners = function(){
		// прослушка событий...
		$('#add-new-item').on('click', _showModal); // окрыть мод
		$('#add-new-project').on('submit', _addProject); // добавление проекта

	};

    // работает с модальным окном
	var _showModal = function(ev){
        ev.preventDefault();

        var divPopup = $('#new-project-popup'),
            form = divPopup.find('.form');

        divPopup.bPopup({
        	speed: 650,
        	transition: 'slideDown',
        	onClose: function(){
        		form.find('.server-mes').text('').hide();
        	}
        });
	};


    
    // добавляет проект - объявляем переменные
	var _addProject = function(ev){
		console.log('добавление проекта');
		ev.preventDefault();

		// ajax запрос на сервер
		var form = $(this),
		    form2 = this,//для себя
		    url = 'add_project.php',
		    data = form.serialize(),
		    myServerGiveMeAnAnswer = _ajaxForm(form, url);

            console.log(form); //для себя
		    console.log(form2); //для себя
		
		    console.log(data);

		myServerGiveMeAnAnswer.done(function(ans) {
			console.log(ans);

			var successBox = form.find('.success-mes'),
			    errorBox = form.find('.error-mes');

			if(ans.status === 'OK'){
				successBox.text(ans.text).show();
				errorBox.hide();
				console.log(ans.text);
			}else{
				errorBox.text(ans.text).show();
				successBox.hide();
				console.log(ans.text);
			}
			
		})
		
	}

    // Универальная функция для действий, описанных ниже
    // для ее работы используется
    // @form - форма 
    // @url - адрес php файла, к которому мы обращаемся
    var _ajaxForm = function(form, url){

		// 1. проверять форму
		// 2. собирать данные из формы
		// 3. вернуть ответ с сервера

		// if(!valid) return false;
       console.log('ajax запрос но с проверкой файл add_project.js');
       if(!validation.validateForm(form)) return false;

		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.fail(function(ans) {
			console.log("Проблемы в PHP");
			form.find('.error-mes').text('На сервере произошла ошибка').show();
		});

		return result;




	};

  // возвращаем публичные методы
	return {
		init: _init
	}

})();

myModule.init();