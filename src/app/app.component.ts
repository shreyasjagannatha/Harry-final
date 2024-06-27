import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[CurrencyPipe]
})
export class AppComponent {
  title = 'harry-potter-movies';
}
