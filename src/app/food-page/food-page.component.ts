import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food! : Food
constructor(private activatedroute:ActivatedRoute,
  private foodservice:FoodService,
  private cartService:CartService,
  private router:Router){
    activatedroute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodservice.getFoodById(params['id'])
  })
  }

ngOnInit(): void {
}

addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}

}
