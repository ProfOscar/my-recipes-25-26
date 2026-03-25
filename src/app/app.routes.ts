import { Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: Recipes,
        children: [
            { path: 'new', component: RecipeEdit },
            { path: ':id', component: RecipeDetail }
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingList
    }
];
