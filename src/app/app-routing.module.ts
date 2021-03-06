import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//Ici on etablie les routes pour la navigation a travers nos different componnent
{path:"produits",component: ProduitsComponent },
{path:"add-produit",component:AddProduitComponent },
{path:"add-produit",component:AddProduitComponent },
{path:"", redirectTo:"produits",pathMatch:"full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
