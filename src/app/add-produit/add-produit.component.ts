import { ProduitService } from './../services/produit.service';
import { Produit } from './../model/produit.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  message ;

  constructor(private produitService: ProduitService) { }
   addProduit()
  {
     //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message ="Produit" + this.newProduit.nomProduit +"ajouter avec succes";
   }
  ngOnInit(): void {
  }


}
