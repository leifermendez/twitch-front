import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cover',
  templateUrl: './section-cover.component.html',
  styleUrls: ['./section-cover.component.css']
})
export class SectionCoverComponent implements OnInit {

  covers: Array<any> = []


  constructor() { }

  ngOnInit(): void {
    this.covers = [
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Sports-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Pok%C3%A9mon%20FireRed/LeafGreen-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Clash%20Royale-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Talk%20Shows%20&%20Podcasts-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Rust-188x250.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Music-285x380.jpg'
      },
      {
        img: 'https://static-cdn.jtvnw.net/ttv-boxart/Brawl%20Stars-285x380.jpg'
      }

    ]
  }

}
