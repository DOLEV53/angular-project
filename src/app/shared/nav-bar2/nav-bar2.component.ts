import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.css']
})
export class NavBar2Component {
   @Input() headlineName = '';
   @Input() icons = '';
    // developer = 'bi bi-person-fill';

   
}
