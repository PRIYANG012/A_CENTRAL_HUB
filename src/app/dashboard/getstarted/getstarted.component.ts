import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {
  name:string;
  constructor() { }

  ngOnInit(): void {

    $('i[rel="pre"]').replaceWith(function() {
      return $('<pre><code>' + $(this).html() + '</code></pre>');
  });
  var pres = document.querySelectorAll('pre,kbd,blockquote');
  for (var i = 0; i < pres.length; i++) {
    pres[i].addEventListener("dblclick", function () {
      var selection = getSelection();
      var range = document.createRange();
      range.selectNodeContents(this);
      selection.removeAllRanges();
      selection.addRange(range);
    }, false);
  }
    
  }

/* To copy Text from Textbox */
copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

}
