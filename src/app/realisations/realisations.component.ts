import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.css'
})
export class RealisationsComponent {

}
