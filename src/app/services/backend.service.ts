import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequestData } from '../shared/interfaces/irequest-data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns - Returns an Observable of the response body as a JSON object
   */
  getDataFromBackend(){
    return this.http.get('https://aldin-bijedic.developerakademie.net/backend-seitenalm/database.json');
  }

  /**
   * Returns an Observable<IRequestData> of the HttpResponse for the request, with a response body in the requested type.
   * 
   * @param body - Interface IRequestData
   * @returns - Observable<IRequestData>
   */
  saveDataToBackend(body: IRequestData): Observable<IRequestData> {
    return this.http.post<IRequestData>('https://aldin-bijedic.developerakademie.net/backend-seitenalm/save_json.php', body);
  }
}
