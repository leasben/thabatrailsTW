/* import './style.css'; */
import Flickity from 'flickity';

//Hamburger Toggle menu
jQuery(function ($) {
  $('#hamburger_toggle').click(function () {
      $(this).toggleClass('is-active');
      $('#mobile_menu').toggle();
  });
});
