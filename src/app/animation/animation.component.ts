import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('myAnimation',[
      state('smaller',style({
        transform: 'scale(1)'
      })),
      state('larger',style({
        transform: 'scale(3)'
      })),
      transition('smaller <=> larger',animate('300ms ease-in'))
    ]),
    trigger('flipCardTrigger',[
      state('front',style({
        transform: 'rotateY(0)'
      })),
      state('back',style({
        transform: 'rotateY(180deg)'
      })),
      transition('front => back', animate('500ms ease-in')),
      transition('back => front', animate('500ms ease-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  state: string = 'smaller';
  cardFace: string = 'front';
  constructor() { }

  ngOnInit() {
  }

  animate(){
    this.state = this.state == 'larger'? 'smaller' : 'larger';
  }

  toggleCard(){
    console.log("toggle me");
    this.cardFace = this.cardFace == 'front'? 'back' : 'front';
  }

}
