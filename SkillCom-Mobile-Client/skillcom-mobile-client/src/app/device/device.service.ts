import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private userUrl: string = `${environment.apiUrl}/Device`
  constructor(private http: HttpClient) { }
  
  tempDeviceData: Device[] = [
    {"id":1,"phoneNumber":"232-137-8544","price":1200,"type":"iPhone13"},
    {"id":2,"phoneNumber":"123-532-8665","price":1150,"type":"Pixel6a"},
    {"id":3,"phoneNumber":"Default","price":150,"type":"JitterBug"},
    {"id":4,"phoneNumber":"Default","price":980,"type":"GalaxyS22"},
    {"id":5,"phoneNumber":"Default","price":850,"type":"iPhone12"},
    {"id":6,"phoneNumber":"Default","price":300,"type":"Nokia"}
  ];
}
