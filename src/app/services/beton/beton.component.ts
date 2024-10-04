import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beton',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './beton.component.html',
  styleUrl: './beton.component.css'
})
export class BetonComponent {

}
