import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  form = new FormGroup({});
  submited = false;
  // regular expression for name and email
  private name: RegExp = new RegExp(/^([A-Za-z]{1,}(\s){1})([a-zA-Z]{1,})(\s{1}[a-zA-Z]{1,})?$/);
  private emailPattern = new RegExp(/^([a-zA-Z0-9_\.\-]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ["", [
        Validators.required,
        Validators.pattern(this.name),
      ]],
      email: ["", [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]],

      phoneNo: [, [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]],
      password: [, [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([^\s]).{7,10}$/)
      ]]
    });
  }

  get fD() { return this.form.controls }

  onSubmit() {
    //  submittion to true
    this.submited = true;
    if (this.form.valid) {
      alert("Done")
      //  reset form 
      this.form.reset()
    }
  }
}


