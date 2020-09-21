import { TemplateBindingParseResult } from '@angular/compiler';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CarData } from '../models/car-data'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl: string = environment.baseUrl
    constructor(private http: HttpClient) { }


getAllCars(): Observable<CarData> {
  return this.http.get<CarData>(this.baseUrl + "cars/index");
  }
}
