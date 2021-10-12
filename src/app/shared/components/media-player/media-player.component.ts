import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'Gioli & Assi',
    name: 'Bebe (Oficial)',
    url: '',
    _id: 1
  }

  listObservers$ : Subscription[] = []

  constructor( private multimediaServ: MultimediaService ){}

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaServ.callback.subscribe(
      (response: TrackModel) => {
        console.log('Play ', response);

      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe())
  }

}
