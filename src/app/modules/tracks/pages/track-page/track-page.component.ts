import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending : TrackModel[] = [];
  tracksRandom : TrackModel[] = [];

  listObserver$: Subscription[] = []

  constructor(private trackServ: TrackService) { }

  ngOnInit(): void {
    const observer1$ = this.trackServ.dataTracksTrending$.subscribe(response => this.tracksTrending = response)

    const observer2$ = this.trackServ.dataTracksRandom$.subscribe(response => this.tracksRandom = response)

    this.listObserver$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach( u => u.unsubscribe())
  }

}
