import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://i.scdn/image/ab67616d000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assi',
    name: 'Bebe (Oficial)',
    url: '',
    _id: 1
  }

  ngOnInit(): void {
  }

}
