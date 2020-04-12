import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

//TODO custom input validator
export class FeedbackComponent {
  feedbackForm = this.fb.group({
    nameFormControl: [''],
    emailFormControl: ['', Validators.email ],
    feedbackFormControl: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }
  
  onSubmit() {
    //TODO post to backend
    console.warn(this.feedbackForm.value);
  }
}
