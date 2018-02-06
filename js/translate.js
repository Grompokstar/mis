$(function(){

  var arrLang = {
    'en': {
      'mainText': 'We come up with <span class= "strong-text" >ideas</span>, develop <span class= "strong-text" >design</span>' +
      ' for &nbsp;information systems, social services,' +
      ' online shopping and mobile apps. We create <span class= "strong-text">new technologies</span>' +
      ' and &nbsp;improve existing ones.' +
      ' Our projects always find <span class="strong-text">response</span>&nbsp;the hearts of the people.',

      'contactUs': 'Contact us'

    },
    'ru': {
      'mainText': 'Мы придумываем <span class="strong-text">идеи</span>, разрабатываем' +
      ' <span class="strong-text">дизайн</span> для&nbsp;информационных систем, социальных сервисов, ' +
      'интернет-магазинов и&nbsp;мобильных приложений. Мы создаем <span class="strong-text">новые технологии</span>' +
      ' и&nbsp;улучшаем существующие. Наши проекты всегда находят <span class="strong-text">отклик</span> ' +
      'в&nbsp;сердцах людей.',

      'contactUs': 'Написать нам'
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