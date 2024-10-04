import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
