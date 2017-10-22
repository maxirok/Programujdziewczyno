'use strict';
    document.addEventListener('DOMContentLoaded', function() {

    	/** #### ZADANIE 1 #### **/
      var forDropdown = document.querySelector('.for-dropdown');
      var dropdown = document.querySelector('.dropdown');

      forDropdown.addEventListener('mouseover', function(){
      	// console.log('ok');
      	dropdown.style.display = "block";
      	})

      forDropdown.addEventListener('mouseout', function(){
      	dropdown.style.display = "none";
     	 })

 /* #### ZADANIE 2 ####*/

    var readMore = document.querySelectorAll('.read-more');
  

    function showHiden () {
       
        var textArea = this.previousElementSibling;
          if (textArea.style.display === 'none' || textArea.style.display ==='') {
            textArea.style.display = 'block';
            this.innerHTML = 'mniej<span class="glyphicon glyphicon-chevron-up"></span>';
          } else {
        textArea.style.display = 'none';
        this.innerHTML = 'więcej<span class="glyphicon glyphicon-chevron-down"></span>';
    }};
    for (var i=0; i < readMore.length; i++){
        readMore[i].addEventListener('click', showHiden);
  }
      

	 /* #### ZADANIE 3 ###*/

    var navFix = document.querySelector('.navbar-fixed-top');
    window.addEventListener('scroll', function() {
      navFix.style.borderBottom = '3px solid green';
    });


    /* #### ZADANIE 4 ###*/

    var btnUp = document.querySelector('.up');
    function goUp (){
            window.scroll(0,0);
          }
    btnUp.addEventListener('click', goUp);


    });