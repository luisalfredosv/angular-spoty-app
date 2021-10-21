import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() track!: TrackModel;
  @Input() mode: 'small' | 'big' = 'small'

  constructor(private multimediaServ: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    this.multimediaServ.trackInfo$.next(track)
  }

}
