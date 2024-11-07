

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter}}</h3>

  <button (click)="handleClick(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="handleClick(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  private _initCounter: number = 10

  public counter: number = this._initCounter;

  handleClick(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = this._initCounter
  }

}
