import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // typewriter_text = "nutricionistas";
  // typewriter_display: string = "";

  constructor() { }
  
  // typingCallback(that) {
  //   let total_length = that.typewriter_text.length;
  //   let current_length = that.typewriter_display.length;
  //   if (current_length < total_length) {
  //     that.typewriter_display += that.typewriter_text[current_length];
  //   } else {
  //     that.typewriter_display = "";
  //   }
  //   setTimeout(that.typingCallback, 100, that);
  // }
  
  ngOnInit() {
    // this.typingCallback(this);
  }

}
