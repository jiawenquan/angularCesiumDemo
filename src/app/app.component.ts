import {Component, OnInit} from '@angular/core';
declare var Cesium
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCesiumDemo';

  ngOnInit() {
    console.log('-----------------ngOnInit-------------------');
    const viewer = new Cesium.Viewer('cesiumContainer');
  }

}
