import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit, produits } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { } // Injection de ActiviatedRoute dans le constructeur. Route privé en tant qu'argument

  produit: Produit | undefined // Définition de la propriété produit

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('produitId'));
  
    // Find the product that correspond with the id provided in route.
    this.produit = produits.find(produits => produits.id === productIdFromRoute);
  }

}


// The route parameters correspond to the path variables you define in the route. To access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. The URL that matches the route provides the productId . Angular uses the productId to display the details for each unique product.
