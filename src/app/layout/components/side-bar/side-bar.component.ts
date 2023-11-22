import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface ListItems {
  name: string;
  icon: string;
  onClick?: ()=>void;
}



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})

export class SideBarComponent implements OnInit {
  
  listItems : ListItems[]
  constructor() { 
    this.listItems = [
      {name: 'Finder', icon: 'assets/img/finder.png'},
      {name: 'Calculator', icon: 'assets/img/calculator.png'},
      {name: 'Calendar', icon: 'assets/img/calendar.png'},
      {name: 'VSCode', icon: 'assets/img/vscode.png'},
      {name: 'App Store', icon: 'assets/img/appstore.png'},
      {name: 'Safari', icon: 'assets/img/safari.png'},
      {name: 'Setting', icon: 'assets/img/setting.png'},
      {name: 'Github', icon: 'assets/img/github.png'},
      {name: 'Facebook', icon: 'assets/img/facebook.png'},
    ]
  }
 
  ngOnInit(): void {
    console.log("SideBarComponent");
  }

}
