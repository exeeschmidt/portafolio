import { ProductDescription } from './../../interfaces/product-description.interface';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductDescription;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(parametros => {
        this.productoService.getProducto(parametros.id)
          .subscribe(prod => {
            this.id = parametros.id;
            this.producto = prod;
          });
      });
  }

}
