import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable(
  {
  providedIn: 'root'
  })

export class SpotifyService 
{
  getHeader(query: string) 
  {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQDcluEIg_6D5IN7WNgHUI3DFElS7MXCsbWNDNVIkbK4ch9K4RzNgdrs7V1lqL4bj-LjlWn7OEAHjHdQ-iutjoqJdr9O2PkGsXUaxNgb7cyYwix-QQbSzHx2zB9anMTMHe1SMaR63A');
      return this.http.get(url, {headers});
  }
  

    constructor(private http: HttpClient) { }

  searchMusic(str :string, type= 'artist') 
  {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = str + param;
      return this.getHeader(query);
  }
  getArtist(id: string)
  {
    const query = 'artists/${id}';
      return this.getArtist(query);
  }
}
