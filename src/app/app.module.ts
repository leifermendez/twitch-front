import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CarouselModule } from "ngx-carousel-lib";

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionVideoComponent } from './section-video/section-video.component';
import { SectionCoverComponent } from './section-cover/section-cover.component';
import { HomeComponent } from './home/home.component';

import { SectionLiveComponent } from './section-live/section-live.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    MenuComponent,
    SidebarComponent,
    SectionVideoComponent,
    SectionLiveComponent,
    SectionCoverComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule, //TODO: <----
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
