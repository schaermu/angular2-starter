import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styles: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'Hello world!';
}
