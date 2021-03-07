import { ProduitService } from './../services/produit.service';
import { Produit } from './../model/produit.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
  // console.log(this.activatedRoute.snapshot.params.id); //Pour verifier que notre methode marche ici on recoit le id du produit selectionner dans la console

  //Pour verifier que notre methode marche ici on recoit tous les element du tableau de produit selectionner dans la console
  this.currentProduit = this.produitService.consulterProdui(this.activatedRoute.snapshot.params.id);
  console.log(this.currentProduit);
  }

  updateProduit()
  {
    //console.log(this.currentProduit)
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
