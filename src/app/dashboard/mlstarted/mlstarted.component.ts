import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-mlstarted',
  templateUrl: './mlstarted.component.html',
  styleUrls: ['./mlstarted.component.css']
})
export class MLStartedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
