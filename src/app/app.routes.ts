import { Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeStart } from './recipes/recipe-start/recipe-start';

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
            { path: '', component: RecipeStart },
            { path: 'new', component: RecipeEdit },
            { path: ':id', component: RecipeDetail },
            { path: ':id/edit', component: RecipeEdit }
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingList
    }
];
