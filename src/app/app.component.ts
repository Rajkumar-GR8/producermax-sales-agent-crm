import { Component } from '@angular/core';

export type EditorType = 'validation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  editor: EditorType = 'validation';

  /* get showValidationForm() {
    return this.editor === 'validation';
  } */
}
