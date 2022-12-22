import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.scss']
})
export class LawyerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  details=[
    {
      name : "Aslam",
      image: "./assets/service/avtar.png",
      number:"+91 9867543456",
      language:"Tamil, English, Malayalam",
      practice:"Civil, Criminal, Corporate",
      mail:" demo3@gmail.com",
      place:"Kumbakonam, TN",
      experience:"5Years"

    },

    {
      name : "Bhuvanesh",
      image: "./assets/service/avtar.png",
      number:"+91 9087654321",
      language:"Tamil, English, Hindi",
      practice:"Civil, Criminal, Bussiness",
      mail:" demo3@gmai2.com",
      place:" Karur, TN",
      experience:"4Years"

    },
    {
      name : "Charles",
      image: "./assets/service/avtar.png",
      number:"+91 9867543456",
      language:"Tamil, English, Malayalam",
      practice:"Civil, Criminal, Corporate",
      mail:" demo3@gmail.com",
      place:"Chennai, TN",
      experience:"3Years"

    },

    {
      name : "Dharmadurai",
      image: "./assets/service/avtar.png",
      number:"+91 956787343",
      language:"Tamil, English, Telugu",
      practice:"Family, Criminal, Corporate",
      mail:" demo4@gmai3.com",
      place:"Trichy, TN",
      experience:"9Years"

    },

    {
      name : "Eliyas",
      image: "./assets/service/avtar.png",
      number:"+91 9866544321",
      language:"Tamil, English, Malayalam",
      practice:"Bussiness, Criminal, Corporate",
      mail:" demo5@gmail.com",
      place:"Pudukkottai, TN",
      experience:"7Years"

    },

   
  ]
}
