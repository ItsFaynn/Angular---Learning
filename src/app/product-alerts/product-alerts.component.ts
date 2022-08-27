import { Component, OnInit, Input } from '@angular/core';
import { Produit } from "../products";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  @Input() produit! : Produit; // produit -> Classe Produit

  ngOnInit(): void {
  }

}
