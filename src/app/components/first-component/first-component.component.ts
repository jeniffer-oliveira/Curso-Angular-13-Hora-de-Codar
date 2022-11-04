import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Jeniffer";
  age: number = 20;
  job: string = "Estudante";
  hobbies = ["Ler", "Ouvir música", "Estudar"];
  car = {
    name: "Polo",
    year: 2019,
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}
