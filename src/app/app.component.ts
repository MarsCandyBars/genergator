import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainGeneratorComponent } from './main-generator/main-generator.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainGeneratorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'genergator';
}
