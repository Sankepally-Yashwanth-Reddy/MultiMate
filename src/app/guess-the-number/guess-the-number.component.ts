import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guess-the-number',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit {
  public number: number | null = null; // Change to allow null
  public message: string = '';
  public tries: number = 0;
  private randomNumber: number = this.generateRandomNumber();

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('MultiMate | Guess The Number');
  }

  checkNumber() {
    if (this.number === null) {
      this.message = 'Please enter a number';
      return;
    }
    this.tries++;
    if (this.number === this.randomNumber) {
      this.message = `Congratulations! You guessed the correct number in ${this.tries} tries.`;
    } else if (this.number > this.randomNumber) {
      this.message = "Your guess is too high";
    } else {
      this.message = "Your guess is too low";
    }
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  resetGame(): void {
    this.randomNumber = this.generateRandomNumber();
    this.message = '';
    this.number = null; // Set to null
    this.tries = 0;
  }
}
