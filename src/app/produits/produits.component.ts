import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService,
    public authService: AuthService )
     {
      this.produits = produitService.listeProduits();
     }

  ngOnInit(): void {
  }
  supprimerProduit(prod:Produit)
  {
      //console.log(prod.nomProduit);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(prod);

  }


}
