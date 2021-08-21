import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosBasicosService {

  constructor( private http:HttpClient ) { }

  getBasicsData(id:any){
    return this.http.get(`${environment.base_url}/basicData/${id}`);
  }

  updateBasicData(data, id){
    return this.http.post(`${environment.base_url}/updatebasicData/${id}`, data);
  }

}
