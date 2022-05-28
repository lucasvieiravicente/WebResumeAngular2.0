import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public emailFormGroup!: FormGroup;

  constructor(private service: ApiServicesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.emailFormGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phoneNumber: new FormControl('', [ Validators.pattern('\d'), Validators.maxLength(13)]),
      body: new FormControl('', Validators.required),
      subject: new FormControl('')
    });
  }

  sendEmail(): void {
    this.service.sendEmail({ ...this.emailFormGroup.getRawValue() }).subscribe();
  }

}
