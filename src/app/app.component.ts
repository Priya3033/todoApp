import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
//   constructor() {
//     setTimeout(() => {
//       this.title = "changed title"  // changes here will automatically reflect in app.component.html without reloading
//     }, 2000); // after how much time the change will displyed 
//   }
 }
