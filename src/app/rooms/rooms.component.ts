import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms = [
    {
      Title: "Две легла",
      Description: "Самостоятелна баня и тоалетна...",
      Image: "../../assets/images/Bedroom1-Beds-61134884.jpg",
      Price: 29.95
    }, 
    {
      Title: "King Size Bed",
      Description: "Всичко включено.....",
      Image: "../../assets/images/corinthia-kartoum-executive-room-2726875311.jpg",
      Price: 39.22
    }, 
    {
      Title: "Ергенска спалня",
      Description: "Джакузи и тераса",
      Image: "../../assets/images/th-378557538.jpg",
      Price: 41.15
    },
    {
      Title: "Семейна стая за 4 човека",
      Description: "Самостоятелна кухня и паркинг",
      Image: "../../assets/images/th-2283780811.jpg",
      Price: 41.15
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
