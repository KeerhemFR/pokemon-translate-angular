import { Component } from '@angular/core';

import * as content from '../../../data/content.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  content: any = content;
}
