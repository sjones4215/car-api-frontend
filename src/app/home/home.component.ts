import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../models/car'
import { CarData } from '../models/car-data'
import { CarService } from '../services/car.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  cars: Car[] = [ ]
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveAllCars()
  }

  retrieveAllCars(){
  this.carService.getAllCars().subscribe(data =>{
    debugger
    })
  }

}
