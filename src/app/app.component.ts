import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  formR!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formR = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        lastName: '',
        country: ''
      }
    )

  }


}
