import { IngredientModel } from "./ingredient.model";

export class RecipeModel {
    public _id?: string;
    public name: string;
    public description: string
    public imagePath: string;
    public ingredients?: IngredientModel[];

    constructor(n: string, d: string, ip: string, ing: IngredientModel[]) {
        this.name = n;
        this.description = d;
        this.imagePath = ip;
        this.ingredients = ing;
    }
}