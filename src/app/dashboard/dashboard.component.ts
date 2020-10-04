import { Component, OnInit } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    
  }

  

  onNN(){
    // this.router.navigate([ '../dashboard/colorclassification' ] .then(() => {
    //   window.location.reload();}));
    this.router.navigate(["../dashboard/colorclassification"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });

  
  }

  onKNN(){
    // this.router.navigate([ '../dashboard/colorclassification' ] .then(() => {
    //   window.location.reload();}));
    this.router.navigate(["../dashboard/KNN"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });

  
  }

  onkMeans(){
    // this.router.navigate([ '../dashboard/colorclassification' ] .then(() => {
    //   window.location.reload();}));
    this.router.navigate(["../dashboard/kmeans"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });

  
  }


  onSA(){
    this.router.navigate(["../dashboard/SentimentalAnanlysis"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }

  onwv(){
    this.router.navigate(["../dashboard/Word2vec"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }

  onsound(){
    this.router.navigate(["../dashboard/Sound"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }

  onbodypix(){
    this.router.navigate(["../dashboard/Bodypix"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }
  onIC1(){
    this.router.navigate(["../dashboard/MobileNet"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }
  onIC2(){
    this.router.navigate(["../dashboard/image"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }
  onPose(){
    this.router.navigate(["../dashboard/posenet"]).then(()=>{
      // do whatever you need after navigation succeeds
      window.location.reload();
    });
  }
}
