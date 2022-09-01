import { Injectable } from '@angular/core';
import { Produit } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  panier: Produit[] = [] // panier contenant une liste de produits
  constructor() { }

  // Ajouter un article au panier
  ajouterPanier(produit : Produit){
    this.panier.push(produit);
  }

  // Afficher le panier
  getPanier(){
    return this.panier;
  }

  // Vider le contenu du panier
  viderPanier(){
    this.panier = [];
    return this.panier;
  }
}
