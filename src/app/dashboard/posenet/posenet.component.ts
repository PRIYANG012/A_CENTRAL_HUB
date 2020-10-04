import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-posenet',
  templateUrl: './posenet.component.html',
  styleUrls: ['./posenet.component.css']
})
export class PosenetComponent implements OnInit {

  constructor() { }

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    $("#loader").fadeTo(5000,1).fadeOut(1000);

    this.loadExternalScript('../assets/js/sketch9.js');
    $('i[rel="pre"]').replaceWith(function() {
      return $('<pre><code>' + $(this).html() + '</code></pre>');
  });
    var x = document.getElementsByClassName("change") as HTMLCollectionOf<HTMLElement>;
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.background = " linear-gradient(to bottom, #fff 0%, #229dd6 100%)";
      }

      var y = document.getElementsByClassName("backmain") as HTMLCollectionOf<HTMLElement>;
      var j;
      for (j = 0; j < y.length; j++) {
        y[j].style.background = "white";
      }

  }
}
