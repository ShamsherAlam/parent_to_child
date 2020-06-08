import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-to-child';
  data1 = [
    {title:"Are you on a call?",content:"content 1"},
    {title:"Are you on a call?",content:"content 2"},
    {title:"Are you on a call?",content:"content 3"},
    {title:"Are you on a call?",content:"content 4"},
    {title:"Are you on a call?",content:"content 5"}
  ];
  dummy:string="dummyData";
}
