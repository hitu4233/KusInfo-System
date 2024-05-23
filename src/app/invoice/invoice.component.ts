import { Component, OnInit, HostListener } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import * as html2pdf from 'html2pdf.js';
declare var html2pdf: any;
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent  {
  invoiceNumber: string = 'INV-001';
  currentDate: Date = new Date();
  customerName: string = 'John Doe';
  customerAddress: string = '123 Main Street, City, Country';

 items=[]
g: any;
aksjka: any;

  constructor() { }

  ngOnInit(){
    this.items = [{ name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 }, { name: 'Item 1', description: 'Description 1', quantity: 2, unitPrice: 50 }, { name: 'Item 2', description: 'Description 2', quantity: 1, unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },{ name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },
       { name: 'Item 1',description:'Description 1',quantity: 2,unitPrice: 50 },{ name:'Item 2',description: 'Description 2',quantity: 1,unitPrice: 30 },

    // Add more items as needed
  ];
  }
  showValue
  buttonfortest(value) {
    this.showValue = value
    console.log(value)
  }
  downloadPDF() {
    debugger
    console.log("hello")
     var element = document.getElementById('contentToConvert');
html2pdf(element);;

    const options = {
      margin: 10,
      filename: 'exported-document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf()
      .from(element)
      .set(options)
      .outputPdf()
      .then((pdfOutput) => {
        // Use the pdfOutput as needed, or trigger a download
        pdfOutput.save();
      });
  }
  myFunc():any{
  console.log('clicked');
}
  hello() {
    console.log("shfdjh")
  }
  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  }
}