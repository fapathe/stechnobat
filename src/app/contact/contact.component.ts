import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor() { }

  public sendEmail(): void {
    const form = {
      prenoms: (document.getElementById('prenoms') as HTMLInputElement).value,
      nom: (document.getElementById('nom') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      telephone: (document.getElementById('telephone') as HTMLInputElement).value,
      adresse: (document.getElementById('adresse') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLInputElement).value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Votre email a été envoyé avec succès!');
      }, (error) => {
        console.error(error.text);
        alert('Erreur lors de l\'envoi de l\'email.');
      });
  }
}
