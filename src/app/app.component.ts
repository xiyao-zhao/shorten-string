import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  collapse = true;

  string: string =
    'The Angular pipes are used to Transform the Data. For Example, the Date pipe formats the date according to locale rules. We can pass arguments to pipe and chain pipes. Angular Pipes takes data as input and formats or transform the data to display in the template. We use them to change the appearance of the data before presenting it to the user. The most common use case of pipes is displaying the dates in the correct format as per the user’s locale.';

  handleLongString() {
    this.collapse = !this.collapse;
  }
}
