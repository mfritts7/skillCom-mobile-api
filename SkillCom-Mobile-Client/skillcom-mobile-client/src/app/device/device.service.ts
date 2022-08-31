import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from './device';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { from,of,throwError,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private userUrl: string = `${environment.apiUrl}/Device`
  private deviceUrl: string = 'https://localhost:7080/api/Devices'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    console.log("retrieving devices")
    return this.http.get<Device[]>(this.deviceUrl,this.httpOptions)
    
  }
  
  tempDeviceData: Device[] = [
    {"id":1,"phoneNumber":"232-137-8544","price":1200,"type":"iPhone13"},
    {"id":2,"phoneNumber":"123-532-8665","price":1150,"type":"Pixel6a"},
    {"id":3,"phoneNumber":"Default","price":150,"type":"JitterBug"},
    {"id":4,"phoneNumber":"Default","price":980,"type":"GalaxyS22"},
    {"id":5,"phoneNumber":"Default","price":850,"type":"iPhone12"},
    {"id":6,"phoneNumber":"Default","price":300,"type":"Nokia"}
  ];
}
