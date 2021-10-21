import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent implements OnInit {

  tracksTrending: TrackModel[] = [];
  tracksRandom: TrackModel[] = [];

  constructor(private trackServ: TrackService) {}

  ngOnInit(): void {
    this.trackServ
      .getAllTracks$()
      .subscribe((response: TrackModel[]) => (this.tracksTrending = response));

    this.trackServ
      .getAllTracks$()
      .subscribe((response: TrackModel[]) => (this.tracksRandom = response));

  }
}
