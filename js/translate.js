$(function(){

  var arrLang = {
    'en': {
      mainText: 'We come up with <span class= "strong-text" >ideas</span>, develop <span class= "strong-text" >design</span>' +
      ' for &nbsp;information systems, social services,' +
      ' online shopping and mobile apps. We create <span class= "strong-text">new technologies</span>' +
      ' and &nbsp;improve existing ones.' +
      ' Our projects always find <span class="strong-text">response</span>&nbsp;the hearts of the people.',

      contactUs: 'Contact us',
      form_1: 'Please fill out this form and our specialists will contact you, demonstrate the technology and provide' +
      ' access for free trial use:',
      name: '* Name',
      surname: '* Surname',
      email: '* Email',
      phone: '* Phone',
      position: '* Position',
      company: '* Company',
      form_2: 'Please describe your business process that you would like to automate or better control' +
      'FORapp?',
      agree_1: 'By clicking the Submit button, I agree to ',
      agree_2: 'personal data processing'

    },
    'ru': {
      mainText: 'Мы придумываем <span class="strong-text">идеи</span>, разрабатываем' +
      ' <span class="strong-text">дизайн</span> для&nbsp;информационных систем, социальных сервисов, ' +
      'интернет-магазинов и&nbsp;мобильных приложений. Мы создаем <span class="strong-text">новые технологии</span>' +
      ' и&nbsp;улучшаем существующие. Наши проекты всегда находят <span class="strong-text">отклик</span> ' +
      'в&nbsp;сердцах людей.',

      contactUs: 'Написать нам',
      form_1: 'Пожалуйста, заполните эту анкету и наши специалисты свяжутся с вами, проведут демонстрацию технологии' +
      ' и предоставят доступ для бесплатного пробного использования:',
      name: '* Имя',
      surname: '* Фамилия',
      email: '* Рабочий Email',
      phone: '* Контактный телефон',
      position: '* Должность',
      company: '* Компания',
      form_2: 'Пожалуйста, опишите ваш бизнес-процесс, который вы хотели бы автоматизировать или лучше контролировать' +
      ' с помощью технологии FORapp?',
      agree_1: 'Нажимая на кнопку Отправить, я даю согласие на ',
      agree_2: 'обработку персональных данных'
    }
  };

  $(window).ready(function(){

    $('.translate').click(function() {
      $('.translate').removeClass('active');
      var lang = $(this).addClass('active').attr('id');

      $('.lang').each(function(index, element) {
        $(this).html(arrLang[lang][$(this).attr('data-key')]);
      });

    });

  });

}());