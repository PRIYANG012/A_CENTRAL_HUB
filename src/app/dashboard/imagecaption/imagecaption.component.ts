import { Component, OnInit } from '@angular/core';
declare var $: any;
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imagecaption',
  templateUrl: './imagecaption.component.html',
  styleUrls: ['./imagecaption.component.css']
})
export class ImagecaptionComponent implements OnInit {
  selectedFile: File;
  // productForm: FormGroup;
  fileToUpload: any;
  imageUrl: any;
  imagecaption=[];
  captionprobability=[];
  iimgFront;
  imgBack;
  constructor(
    private http: HttpClient) { }

    private onUpload() {
      const fd = new FormData();
      fd.append('image', this.selectedFile);
      fd.append('type', 'image/jpeg');
      this.http.post('http://max-image-caption-generator.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', fd)
        .subscribe(data => {

         console.log(data)
         for(let i=0;i<data["predictions"].length;i++){
          this.imagecaption[i]=data["predictions"][i]["caption"]
          this.captionprobability[i]=data["predictions"][i]["probability"]}
        }

        );
    }

    
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
  
      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
    
    onFileSelected(event) {
      
      this.selectedFile = <File>event.target.files[0];
      
      
      this.onUpload();
    }


  ngOnInit(): void {
    $("#loader").fadeTo(5000,1).fadeOut(1000);

    
    
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
