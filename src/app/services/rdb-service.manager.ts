import { Injectable } from '@angular/core';
import * as Hz from '@horizon/client';

@Injectable()
export class Horizon extends Function {
  private _hz;

  constructor() {
    super('...args', 'return this._hz(...args)');
    this._hz = new Hz({host: 'localhost:8181'});
    return this.bind(this); 
  }
}