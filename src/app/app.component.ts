import { Component, OnInit } from '@angular/core';
import { RestHouseService } from './service/rest.houses.service';
import { Advertisement } from './model/advertisement';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  advertisement: Advertisement[] = [];

  ngOnInit() {
   this.getHouseInfo();
  }

  constructor(private restHouseService: RestHouseService) { }

  getHouseInfo(){
    this.restHouseService.getHouseInfo()
      .subscribe(res => {
      this.advertisement = res;
  });
  }
}
