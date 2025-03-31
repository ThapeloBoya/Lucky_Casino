import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JackpotDetails } from '../contents/models/jackpot-details';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiEndPoint = "https://api.mrzeebet.com/api"; // Ensure this is correct

  constructor(private httpClient: HttpClient) {}

  getJackpots(): Observable<JackpotDetails[]> {
    console.log('Fetching jackpots from the API...');
    return this.Get<JackpotDetails[]>('/jackpot/getcasinojackpot?casinoid=105').pipe(
      catchError(error => {
        console.error('Error fetching jackpots:', error);
        return of([]); // Return empty array on error
      })
    );
  }

  checkCountryCodeLicense(countryCode: string): Observable<any> {
    return this.GetNoType(`${this.apiEndPoint}/casinogenerics/checkcountrylicense?casinoid=105&countryCode=${countryCode}`);
  }

  getDownloadFile(): Observable<Blob> {
    return this.GetBlob('/casinodownload/getcasinodownloadfile?casinoid=105');
  }

  getIpAddress(): Observable<any> {
    return this.GetNoType('https://api.ipify.org/?format=json');
  }

  getGeoFromIPAddress(ipaddress: string): Observable<any> {
    return this.GetNoType(`https://ipinfo.io/${ipaddress}?token=72808d0f35dbb9`);
  }

  getCasinoLocalAffiliateByGaId(gaId: number): Observable<number> {
    return this.Get<number>(`/affiliates/getlocalaffid?casinoid=105&gaID=${gaId}&skinId=1`);
  }

  protected Post<T>(path: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.apiEndPoint + path, body, httpOptions).pipe(
      map((res: T) => res),
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return of({} as T);
      })
    );
  }

  protected Get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(this.apiEndPoint + path, httpOptions).pipe(
      map((res: T) => res),
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return of({} as T);
      })
    );
  }

  protected GetNoType(path: string): Observable<any> {
    return this.httpClient.get(path).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return of({});
      })
    );
  }

  protected GetBlob(path: string): Observable<Blob> {
    return this.httpClient.get<Blob>(this.apiEndPoint + path, httpOptions).pipe(
      map((res: Blob) => res),
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return of(new Blob([]));
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      console.error(`Client-side error: ${error.error.message}`);
    } else {
      console.error(`Server-side error: ${error.status}, ${error.message}`);
    }
  }
}
