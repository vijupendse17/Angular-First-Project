import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-sample',
  template: `
  <div class="card">
  <h3 class="card-header">Our Team</h3>
  <div class="card-block">
   <div class="row">
   <div class="col">
     <img src="./assets/img/vijay.png" >
   </div>
   <div class="col">
     <div class="tex">
      Text messaging, or texting, is the act of composing and sending electronic messages, typically
      consisting of alphabetic and numeric characters, between two or ...
     </div>
   </div>
  </div>
  </div>
  </div>
  `,
  styles: []
})
export class InnerSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
