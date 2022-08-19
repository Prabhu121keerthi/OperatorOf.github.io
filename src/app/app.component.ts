import { Component } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Of Operator';

  ngOnInit() { 
    const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7],"Hello World");
    obsof5.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
}
 
}
