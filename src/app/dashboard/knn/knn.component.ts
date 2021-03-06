import { Component, OnInit } from '@angular/core';
declare let ml5: any;
@Component({
  selector: 'app-knn',
  templateUrl: './knn.component.html',
  styleUrls: ['./knn.component.css']
})
export class KNNComponent implements OnInit {

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
    // <script src=""></script>

    this.loadExternalScript('../assets/js/sketch.js');

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
