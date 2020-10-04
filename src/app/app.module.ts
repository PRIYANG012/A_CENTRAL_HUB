import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetstartedComponent } from './dashboard/getstarted/getstarted.component';
import { NavasideComponent } from './dashboard/navaside/navaside.component';
import { KNNComponent } from './dashboard/knn/knn.component';
import { IMAGECLASSIFICATIONMOBILEComponent } from './dashboard/imageclassificationmobile/imageclassificationmobile.component';
import { SoundclassificationComponent } from './dashboard/soundclassification/soundclassification.component';
import { SentimentalMovieReviewsComponent } from './dashboard/sentimental-movie-reviews/sentimental-movie-reviews.component';
import { Word2VectextComponent } from './dashboard/word2-vectext/word2-vectext.component';
import { BodypixComponent } from './dashboard/bodypix/bodypix.component';
import { PosenetComponent } from './dashboard/posenet/posenet.component';
import { KmeansComponent } from './dashboard/kmeans/kmeans.component';
import { NeuralnetcolorComponent } from './dashboard/neuralnetcolor/neuralnetcolor.component';
import { ImagecaptionComponent } from './dashboard/imagecaption/imagecaption.component';
import { MLStartedComponent } from './dashboard/mlstarted/mlstarted.component';
import { MLsupervisedComponent } from './dashboard/mlsupervised/mlsupervised.component';
import { MLunsupervisedComponent } from './dashboard/mlunsupervised/mlunsupervised.component';
import { MLreinforcementComponent } from './dashboard/mlreinforcement/mlreinforcement.component';
import { UsingAPIComponent } from './dashboard/using-api/using-api.component';
import { UsingJSComponent } from './dashboard/using-js/using-js.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    
    GetstartedComponent,
    NavasideComponent,
    KNNComponent,
    IMAGECLASSIFICATIONMOBILEComponent,
    SoundclassificationComponent,
    SentimentalMovieReviewsComponent,
    Word2VectextComponent,
    BodypixComponent,
    PosenetComponent,
    KmeansComponent,
    NeuralnetcolorComponent,
    ImagecaptionComponent,
    MLStartedComponent,
    MLsupervisedComponent,
    MLunsupervisedComponent,
    MLreinforcementComponent,
    UsingAPIComponent,
    UsingJSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomeComponent, 
        
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '', // child route path
            component: MLStartedComponent // child route component that the router renders
          },
          {
            path: 'UsingJS', // child route path
            component: GetstartedComponent // child route component that the router renders
          },
          {
            path: 'KNN', // child route path
            component: KNNComponent // child route component that the router renders
          },
          {
            path: 'MobileNet', // child route path
            component: IMAGECLASSIFICATIONMOBILEComponent // child route component that the router renders
          },
          {
            path: 'Sound', // child route path
            component: SoundclassificationComponent // child route component that the router renders
          },
          {
            path: 'SentimentalAnanlysis', // child route path
            component: SentimentalMovieReviewsComponent // child route component that the router renders
          },
          {
            path: 'Word2vec', // child route path
            component: Word2VectextComponent // child route component that the router renders
          },
          {
            path: 'Bodypix', // child route path
            component: BodypixComponent // child route component that the router renders
          },
          {
            path: 'posenet', // child route path
            component: PosenetComponent // child route component that the router renders
          },
          {
            path: 'kmeans', // child route path
            component: KmeansComponent // child route component that the router renders
          },
          {
            path: 'colorclassification', // child route path
            component: NeuralnetcolorComponent // child route component that the router renders
          },
          {
            path: 'image', // child route path
            component: ImagecaptionComponent // child route component that the router renders
          },
          {
            path: 'MLBasics', // child route path
            component: MLStartedComponent // child route component that the router renders
          },
          {
            path: 'usingAPI', // child route path
            component: UsingAPIComponent // child route component that the router renders
          },
        ]
      }
    ],{
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
