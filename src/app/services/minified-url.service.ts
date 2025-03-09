import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { minifiedUrl } from '../models/url.model';

@Injectable({
  providedIn: 'root',
})
export class MinifiedUrlService {
  private readonly http = inject(HttpClient);

  public getMinifiedUrls(): Observable<minifiedUrl[]> {
    return this.http.get<minifiedUrl[]>(`${environment.BASE_URL}`);
  }

  public minifyUrl(longUrl: string): Observable<minifiedUrl> {
    return this.http.post<minifiedUrl>(`${environment.BASE_URL}`, {
      longUrl,
    });
  }

  public deleteMinifiedUrl(id: string) {
    return this.http.delete(`${environment.BASE_URL}/${id}`);
  }
}
