import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerWidth = '200px';

  toggleHeaderWidth() {
    if(this.headerWidth === '200px') {
      this.headerWidth = '0';
    } else {
      this.headerWidth = '200px'

    }
  }
}
