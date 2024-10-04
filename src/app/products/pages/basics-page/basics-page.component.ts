import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameUpper: string = 'javier';
  public nameLower: string = 'JAVIER';
  public nameTitle: string = 'JaVIeR EStrADa';

  public customDate: Date = new Date();

}
