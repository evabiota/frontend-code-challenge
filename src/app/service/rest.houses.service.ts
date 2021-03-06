import{Injectable} from'@angular/core';
// Importa objets from http library
import {Headers, Http, HttpModule, RequestOptions, Response} from '@angular/http';
// Import Observable class from rxjs library
import 'rxjs/add/operator/toPromise';
import { AdvertisementAsset } from '../model/advertisement.asset';
import { Advertisement } from '../model/advertisement';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RestHouseService {
  private baseUrl =  '/v1/advertisements';

  constructor(private http: Http) {
  }
  //Get houses info
  getHouseInfo(){

    return this.http.get(this.baseUrl)
    .map( (responseData) => {
          return responseData.json();
    })
    .map((data: Array<any>) => {
        const result: Array<Advertisement> = [];


    Object.keys(data).forEach(function (key){
        if(key === 'data'){
           console.log(data[key]);
           //here we do a for to obtain only the first 10
           //we have to get something like [key][0]...data[key][9]

            let i=0;
            while (i < 10){
              result.push(data[key][i]);
              i++;
            }

              result.push();

        }

    });


        return result;
    });

  }
}
