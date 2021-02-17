import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiGatewayService } from '../apiGateway.service';

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

  constructor(private apiGatewayService: ApiGatewayService, private fb: FormBuilder) { }
  
  onSubmit() {
    this.apiGatewayService.submitFeedback(JSON.stringify(this.feedbackForm.value));
    console.warn(JSON.stringify(this.feedbackForm.value));
    // TODO lets let the user know if it posted successfully
  }
}
