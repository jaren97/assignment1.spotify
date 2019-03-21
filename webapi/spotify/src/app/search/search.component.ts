import { Component, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../modal/LsArtists';
import { Subject } from 'rxjs';


@Component(
  {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})


export class SearchComponent  
{
  searchStr: string;
  id: string;
  artists: Artist[];
  resultsearch = null;
  searchkeyupstreams$ =new Subject();
  @Output() emitSearchKey = new EventEmitter();

  constructor(private SpotifyService: SpotifyService){}
  
  searchMusic() 
  {
    this.SpotifyService.searchMusic(this.searchStr)
      .subscribe((response: any) => 
      {
        console.log(response);
        this.resultsearch = response.artists.items;
        console.log(this.resultsearch, "Data Collected"); 
      },
        err => 
        {
          console.log(err); 
        },
        () =>
          console.log("completed")); 
        }

}
