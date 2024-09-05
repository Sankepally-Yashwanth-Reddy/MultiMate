import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {

  constructor(private titleService: Title) { } // Corrected naming convention

  ngOnInit(): void {
    this.titleService.setTitle('MultiMate | Calculator');
  }

  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: string, secondOp: number): number | null {
    switch (op) {
      case '+':
        return this.firstOperand! + secondOp;
      case '-':
        return this.firstOperand! - secondOp;
      case '*':
        return this.firstOperand! * secondOp;
      case '/':
        return secondOp === 0 ? null : this.firstOperand! / secondOp;
      case '=':
        return secondOp;
      default:
        return null;
    }
  }

  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = result !== null ? String(result) : 'Error';
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
