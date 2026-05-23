import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-finished-process',
  templateUrl: './finished-process.component.html',
  styleUrls: ['./finished-process.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class FinishedProcessComponent  implements OnInit {
  @Input() iconName!: string; 
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) buttonText!: string;

  @Output() onSubmit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
