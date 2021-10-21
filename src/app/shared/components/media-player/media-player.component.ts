import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')

  listObservers$ : Subscription[] = []
  state: string = 'paused'

  constructor( public multimediaServ: MultimediaService ){}

  ngOnInit(): void {
    const observer1$ = this.multimediaServ.playerStatus$.subscribe( status => this.state = status)

    this.listObservers$ = [observer1$]
  }

  handlePosition(event: MouseEvent){
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width} = elNative.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width
    this.multimediaServ.seekAudio(percentageFromX)
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe())
  }

}
