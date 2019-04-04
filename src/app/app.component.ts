import { Component } from '@angular/core';
import { NgxFeedbackService } from 'ngx-feedback';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private readonly feedbackService: NgxFeedbackService) {}
    title = 'ngx-feedback-lib';
}
