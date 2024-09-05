import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit {

  constructor(private titleService: Title) {

  }

  ngOnInit():void {
    this.titleService.setTitle('Multimate | Random Number Generator')
  }

  minValue: number = 0;
  maxValue: number = 100;
  randomNumber:number = 0;

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
  }
}
