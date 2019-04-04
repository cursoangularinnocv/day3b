import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.scss']
})
export class MobilePhoneComponent implements OnInit {
  @Input() id;
  @Input() productName;
  @Input() productImage;
  @Input() price;
  @Input() isActive;
  @Output() onMobileChosen: EventEmitter = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  buyThisPhone() {
    console.log(this.id)
    this.onMobileChosen.emit(this.id)
  }

}
