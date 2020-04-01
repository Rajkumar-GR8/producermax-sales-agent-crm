import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-soa-form',
  templateUrl: './sign-soa-form.component.html',
  styleUrls: ['./sign-soa-form.component.css']
})
export class SignSoaFormComponent implements OnInit {
  soasign = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}