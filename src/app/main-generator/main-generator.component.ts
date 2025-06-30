import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-generator',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './main-generator.component.html',
  styleUrl: './main-generator.component.css'
})

export class MainGeneratorComponent {
  length: number = 0;
  result = '';
  mustInclude: any = "";

  mainGeneration() {
    this.length = this.length;
    this.mustInclude = this.mustInclude;
    this.result = '';

    const lengthValidity = typeof this.length === "number" || this.length === null;
    const mustIncludeValidity = this.mustInclude.length === 1 || this.mustInclude.length === 0;

    if (this.mustInclude.length > 1 || this.mustInclude < 0) {
      alert("You may only include a single character in the Must Include field");
      throw new Error("More than a single character was input into the Must Include field");
    } else if (typeof this.length != "number" || null) {
      alert("You may only input numbers into the Length field");
      throw new Error("A non-numeric value was input into the Length field")
    } else if (lengthValidity && mustIncludeValidity) {
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    
      let charactersLength = characters.length;
      for (let i = 0; i < this.length; i++) {
        this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      if (this.mustInclude) {
        let resultArray = this.result.split('');
        resultArray[Math.floor(Math.random() * this.length)] = this.mustInclude;
        this.result = resultArray.join("");
      }
    } 
  }
}
