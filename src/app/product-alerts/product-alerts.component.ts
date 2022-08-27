import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from "../products";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  @Input() produit! : Produit | undefined; // produit -> Classe Produit
  @Output() notifier = new EventEmitter();

  ngOnInit(): void {
  }

}
