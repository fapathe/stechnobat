import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-immobilier',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './immobilier.component.html',
  styleUrl: './immobilier.component.css'
})
export class ImmobilierComponent {

}
