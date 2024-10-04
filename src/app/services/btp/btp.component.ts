import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-btp',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './btp.component.html',
  styleUrl: './btp.component.css'
})
export class BtpComponent {

}
