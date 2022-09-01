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
    {"id":1,"phoneNumber":"1","price":1200,"type":"iPhone13"},
    {"id":2,"phoneNumber":"2","price":1150,"type":"Pixel6a"},
    {"id":3,"phoneNumber":"3","price":150,"type":"JitterBug"},
    {"id":4,"phoneNumber":"4","price":980,"type":"GalaxyS22"},
    {"id":5,"phoneNumber":"5","price":850,"type":"iPhone12"},
    {"id":6,"phoneNumber":"6","price":300,"type":"Nokia"}
  ];
}
