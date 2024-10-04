import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../shared/footer/footer.component";
import Swiper from 'swiper/bundle';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLink, FooterComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements AfterViewInit {
  swiper: any;

  ngAfterViewInit() {
    this.initSwiper();
    this.swiper.update();  // Force la mise à jour de Swiper
  }

  initSwiper() {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 4.5,
      spaceBetween: 10,
      loop: true,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      }
    });
  }
}
