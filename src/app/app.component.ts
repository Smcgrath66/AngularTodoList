import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Crash ToDo List';

  constructor() {
    this.title = 'No Zeros Dumbass';
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
