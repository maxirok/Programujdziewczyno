'use strict';
    document.addEventListener('DOMContentLoaded', function() {
      var forDropdown = document.querySelector('.for-dropdown');
      var dropdown = document.querySelector('.dropdown');

      forDropdown.addEventListener('mouseover', function(){
      	// console.log('ok');
      	dropdown.style.display = "block";
      	})

      forDropdown.addEventListener('mouseout', function(){
      	dropdown.style.display = "none";


      })


    });