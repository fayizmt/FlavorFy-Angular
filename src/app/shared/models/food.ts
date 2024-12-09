export class Food{
    id!:number;
    name!:String;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    orgins!:string[];
    cookTime!:string;
}