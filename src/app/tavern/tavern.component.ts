import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.css']
})
export class TavernComponent implements OnInit {
  tavern = [
    {
      Title: "Две легла",
      Description: "Самостоятелна баня и тоалетна...",
      Image: "./assets/images/tavern/06l.jpg",
      Price: 29.95
    }, 
    {
      Title: "King Size Bed",
      Description: "Всичко включено.....",
      Image: "./assets/images/tavern/images (1).jpeg",
      Price: 39.22
    }, 
    {
      Title: "Ергенска спалня",
      Description: "Джакузи и тераса",
      Image: "./assets/images/tavern/images.jpeg",
      Price: 41.15
    },
    {
      Title: "Семейна стая за 4 човека",
      Description: "Самостоятелна кухня и паркинг",
      Image: "./assets/images/tavern/367661620920142ecb14a1d9d7137ebda811.jpg",
      Price: 41.15
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
