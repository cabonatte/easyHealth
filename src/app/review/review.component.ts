import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  classe = 'item';
  
  reviews = [
    {
      id: '1',
      msg: 'teste'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
