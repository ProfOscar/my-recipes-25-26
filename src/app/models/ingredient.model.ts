export class IngredientModel {
    public _id?: string
    public name: string;
    public amount: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.amount = a;
    }
}