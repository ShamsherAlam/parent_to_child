import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-to-child';
  data = [
    {title:"title 1",content:"content 1"},
    {title:"title 2",content:"content 2"},
    {title:"title 3",content:"content 3"},
    {title:"title 4",content:"content 4"},
    {title:"title 5",content:"content 5"}
  ];
}
