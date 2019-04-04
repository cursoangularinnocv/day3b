import { Component } from '@angular/core';
interface MobilePhone {
  id: number;
  productName: string;
  productImage: string;
  price: number;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-comunication';
  chosenMobile: MobilePhone = {
    id: undefined,
    productName: undefined,
    productImage: undefined,
    price: 0,
    isActive: true
  };
  mobilePhones: Array<MobilePhone> = [
    {
      id: 1,
      productName: 'LG G8',
      productImage: 'https://images-na.ssl-images-amazon.com/images/I/71oJ1lPSIhL._SY550_.jpg',
      price: 600,
      isActive: true
    },
    {
      id: 2,
      productName: 'iPhone 8',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419778',
      price: 800,
      isActive: true
    },
    {
      id: 3,
      productName: 'LG G9',
      productImage: 'https://images-na.ssl-images-amazon.com/images/I/71oJ1lPSIhL._SY550_.jpg',
      price: 700,
      isActive: true
    },
    {
      id: 4,
      productName: 'iPhone XS',
      productImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419778',
      price: 1100,
      isActive: true
    }
  ];

  chooseMobile(mobileChosenId) {
    console.log(`event from app component, value is ${mobileChosenId}`)

    this.chosenMobile = this.mobilePhones.filter(phone => phone.id === mobileChosenId)[0];
  }
}
