import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public emailFormGroup!: UntypedFormGroup;
  public disabledButton = false;
  public responseMessage = "";

  constructor(private service: ApiServicesService, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.emailFormGroup = this.formBuilder.group({
      name: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.email),
      phoneNumber: new UntypedFormControl('', [ Validators.pattern('\d'), Validators.maxLength(13)]),
      body: new UntypedFormControl('', Validators.required),
      subject: new UntypedFormControl('')
    });
  }

  private updateButtonForm(): void {
    this.disabledButton = !this.disabledButton;
  }

  private resetForm(): void {
    this.emailFormGroup.reset();
    this.updateButtonForm();
  }

  private catchError(response: HttpErrorResponse): void {
    const jsonResponse = JSON.parse(response.error);
    const errors = jsonResponse.errors;

    if (errors.Name) {
      this.insertErrorMessages(errors.Name);
    }
    if (errors.Email) {
      this.insertErrorMessages(errors.Email);
    }
    if (errors.PhoneNumber) {
      this.insertErrorMessages(errors.PhoneNumber);
    }
    if (errors.Body) {
      this.insertErrorMessages(errors.Body);
    }

    this.updateButtonForm();
  }

  private insertErrorMessages(errors: Array<string>): void {
    errors.map((value: string) => {
      this.responseMessage = this.responseMessage + value;
    })
  }

  sendEmail(): void {
    this.responseMessage = "";
    this.updateButtonForm();

    this.service.sendEmail({ ...this.emailFormGroup.getRawValue() }).subscribe((data) => {
      this.resetForm();
      this.responseMessage = data;
    }, (error) => {
      this.catchError(error);
    });
  }
}
