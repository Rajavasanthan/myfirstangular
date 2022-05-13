import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstangular';
  timer = 0
  isButtonDisabled = false;
  username = "Person 1"
  constructor(){
    setTimeout(() => {
      this.isButtonDisabled = true
    },3000)
  }

  postMessage(){
    alert("Hello World")
  }
}


// Data Binding
  // One Way Data Binding
      // Property Data Binding
        // Sending Value from TS to HTML
      // Event Data Binding
        // Sending Action from HTML to TS
  
  // Two Way Data Binding
    // Both HTML <-> TS
