import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente17 } from './componente17/componente17.js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente17],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('app-scrum-deploy');
}
