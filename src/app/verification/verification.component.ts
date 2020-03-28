import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

//export type EditorType = 'captcha' | 'agent';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  validation = new FormControl('');
  editor = 'captcha';

  constructor() { }

  checkValue() {
    // TODO: Use EventEmitter with form value
   // console.warn(this.validation.value);
    //this.editor = this.validation.value;
    this.editor = this.capachaValue('');
    //console.log("TEE :"+this.validation.value+ " --- "+this.editor);
    //window.alert(this.editor);
    if( this.validation.value === this.editor) {
      window.alert("Captcha validation success!");
    } else {
      window.alert("Plz check captcha :(");
    }
  }

  capachaValue(code){
   //console.log('param val:: '+ code);
    var capachaValue;
    if(code !=""){
      this.editor  = code;
    }
    //console.log("got Value:"+ this.editor);
    return this.editor;
  }

  ngOnInit() {
    var code = this.addRecaptchaScript();
    console.log(" ONInit:"+code);
    this.capachaValue(code);
  }

  addRecaptchaScript() {
    //var code;
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthOtp = 2;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 340;
    canv.height = 100;
    var ctx = canv.getContext("2d");
    ctx.font = "80px verdana";
    ctx.strokeText(captcha.join(""), 10, 70);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
    return captcha.join("");
  }

}