import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ServicesComponent } from './services/services.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BetonComponent } from './services/beton/beton.component';
import { BtpComponent } from './services/btp/btp.component';
import { ImmobilierComponent } from './services/immobilier/immobilier.component';

export const routes: Routes = [
  { path:"", redirectTo:"accueil", pathMatch:"full" },
  { path:"accueil", component:AccueilComponent },
  { path:"realisations", component:RealisationsComponent },
  { path:"services", component:ServicesComponent },
  { path:"services/beton", component:BetonComponent },
  { path:"services/btp", component:BtpComponent },
  { path:"services/immobilier", component:ImmobilierComponent },
  { path:"realisations", component:RealisationsComponent },
  { path:"a-propos", component:AProposComponent },
  { path:"blog", component:BlogComponent },
  { path:"contact", component:ContactComponent}
];
