import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAlltags():Tag[]{
    return[
      
        {name:"All",count:10},
        // {name:"FastFood",count:10},
        // {name:"ChickenKondattam",count:1},
        {name:"Lunch",count:4},
        {name:"Meal",count:2},
        {name:"Dinner",count:6},
        {name:"Snack",count:1},
        {name:"breakFast",count:1},
        {name:"Grevi",count:3},
        {name:"Burger",count:1},
        {name:"Pizza",count:1},
        // {name:"Pasta",count:1},
        // {name:"Tikka",count:1},
        // {name:"Paneer Butter Masala",count:1},
        // {name:"Club Sandwich",count:1},
        // {name:"Chicken Kandhari",count:1},
        // {name:"Sadhya",count:1},
        {name:"Veg",count:1},
        {name:"Sandwich",count:1},


    ]
  }

  getAllFoodByTag(tag:string):Food[]{
    
      return tag=='All'?
      this.getAll():
      this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:"Paneer Butter Masala ",
        cookTime:'15-20',
        price:399,
        favorite:false,
        orgins:['Kerala','South India'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food9.jpeg',
        tags:['FastFood','Grevi','Dinner']
      },
      {
        id:2,
        name:"Burger",
        cookTime:'10-15',
        price:120,
        favorite:true,
        orgins:['Germany','US'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food6.jpeg',
        tags:['FastFood','Burger','Lunch']
      },
      {
        id:3,
        name:"Club Sandwich",
        cookTime:'10-15',
        price:90,
        favorite:false,
        orgins:['Germany','US'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food11.jpeg',
        tags:['FastFood','Sandwich','Lunch']
      },
      
      {
        id:4,
        name:"Pizza",
        cookTime:'10-20',
        price:299,
        favorite:true,
        orgins:['italy'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food4.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:5,
        name:"Butter Chicken",
        cookTime:'10-20',
        price:460,
        favorite:true,
        orgins:['Kerala'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food5.jpeg',
        tags:['FastFood','Grevi','Dinner']
      },
      {
        id:6,
        name:"Biriyani",
        cookTime:'10-20',
        price:120,
        favorite:true,
        orgins:['Kerala'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food15.jpeg',
        tags:['Meal','Lunch']
      },
      {
        id:7,
        name:"Chikken Kondattam",
        cookTime:'10-20',
        price:450,
        favorite:false,
        orgins:['South India'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food.jpeg',
        tags:['FastFood','ChickenKondattam','Dinner']
      },
      {
        id:8,
        name:"Chicken Kandhari",
        cookTime:'15-20',
        price:450,
        favorite:false,
        orgins:['Kerala','South India'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food10.jpeg',
        tags:['FastFood','Grevi','Dinner']
      },
      {
        id:9,
        name:"Vada Chamandhi",
        cookTime:'10-20',
        price:30,
        favorite:false,
        orgins:['South India'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food3.jpeg',
        tags:['FastFood','Snack','BreakFast']
      },
      {
        id:10,
        name:"Sadhya",
        cookTime:'10-20',
        price:120,
        favorite:false,
        orgins:['Kerela','South India'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food12.jpeg',
        tags:['Veg','Meal','Lunch']
      },
      {
        id:11,
        name:"Tikka",
        cookTime:'10-15',
        price:99,
        favorite:true,
        orgins:['Japan','Korea'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food13.jpeg',
        tags:['FastFood','Tikka','Dinner']
      },
      {
        id:12,
        name:"Pasta",
        cookTime:'10-15',
        price:130,
        favorite:false,
        orgins:['Germany','US'],
        stars:4.5,
        imageUrl:'/assets/images/foods/food14.jpeg',
        tags:['FastFood','Pasta','Dinner']
      },
      


    ]
  }
}
