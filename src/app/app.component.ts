import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)
  const original = descriptor.value
  descriptor.value= function(...args) {
    console.log("this function was hacked")
    return descriptor
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vault18';

  constructor() {
    this.aSimpleMethod()
  }

  @log
  aSimpleMethod() {
    console.log("hey there")
  }
}
