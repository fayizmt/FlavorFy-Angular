import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[]=[];
  constructor(private foodService:FoodService,private route:ActivatedRoute){}
ngOnInit(): void {
  interface Params {
    [key: string]: any;
    tag?: string;
    searchTerm?:string;
  }
  this.route.params.subscribe(params=>{
    if (params['searchTerm']) 
      this.foods = this.foodService.getAll().filter(food => 
        food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
      );
    else if(params['tag'])
      this.foods = this.foodService.getAllFoodByTag(params['tag']);
    
    else
    this.foods = this.foodService.getAll();

  })
}
}
