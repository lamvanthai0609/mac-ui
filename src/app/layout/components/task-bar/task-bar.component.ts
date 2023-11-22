import { Component, OnInit } from '@angular/core';
import { faBatteryFull , faAppleWhole} from '@fortawesome/free-solid-svg-icons';
import { actionList } from './dummy';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
})
export class TaskBarComponent implements OnInit {
  faApple = faAppleWhole
  faBatteryFull = faBatteryFull
  actionList = actionList
  constructor() { }

  ngOnInit(): void {
    console.log("TaskBarComponent");
  }

}
