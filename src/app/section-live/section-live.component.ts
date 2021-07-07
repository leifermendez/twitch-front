import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from "ngx-carousel-lib";

@Component({
  selector: 'app-section-live',
  templateUrl: './section-live.component.html',
  styleUrls: ['./section-live.component.css']
})
export class SectionLiveComponent implements OnInit {
  @ViewChild('topCarousel1') topCarousel: CarouselComponent | any;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSlide(direction = 1) {
    (direction < 0) ? this.topCarousel.slideNext() : this.topCarousel.slidePrev()

  }
}
