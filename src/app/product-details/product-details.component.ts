import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  ngOnInit() {
    this.hellllll() 
  }
  hello = [1, 2]
  
  hellllll() {
    console.log("clickckkckck")
  }
}
