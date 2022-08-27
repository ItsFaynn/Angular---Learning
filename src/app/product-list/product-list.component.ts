import { Component } from '@angular/core';

import { produits } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  produits = produits; // Avoir accès à la liste des produits à partir de product-list.html. On la déclare ici

  share() { // Méthode permettant d'afficher un pop up indiquant que le produit a été partagé
    window.alert('Le produit a été partagé avec succès!');
  };

  onNotifier(){
    window.alert("Vous serez avertis lorsque le produit sera en rabais.");
  };
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/