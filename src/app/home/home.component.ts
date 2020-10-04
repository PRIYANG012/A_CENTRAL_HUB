import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFavorite: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    (function($) {
      "use strict"; // Start of use strict
    
    
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
      });
    
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#mainNav',
        offset: 57
      });
    
      // Collapse Navbar
      var navbarCollapse = function() {

        if ($("#mainNav").offset().top > 100) {
         
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
    
    
    
      
    }); // End of use strict
    
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
    
    
          if(verticalOffset==0){
      this.isFavorite=false;
   
      
    }
    else{
      this.isFavorite=true;

    }
}

  
  goToAnchor1() {
    document.getElementById('services').scrollIntoView({behavior:"smooth"})
   
  }
  goToAnchor2() {
    document.getElementById('contact').scrollIntoView({behavior:"smooth"})
  }

}
