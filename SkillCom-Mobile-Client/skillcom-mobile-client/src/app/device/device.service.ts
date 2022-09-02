import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of, throwError, catchError } from 'rxjs';
import { Plan } from '../plan/plan';
import { environment } from 'src/environments/environment';
import { Device } from './device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  newPlan: Plan = {"id":69,"planName":"TestPlan","monthlyPrice":69};

  private deviceUrl: string = `${environment.apiUrl}/Devices`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  newDevice!: Device;
  // tempDeviceData: Device[] = [
  //   {"id":1,"phoneNumber":"1","price":1200,"type":"iPhone13"},
  //   {"id":2,"phoneNumber":"2","price":1150,"type":"Pixel6a"},
  //   {"id":3,"phoneNumber":"3","price":150,"type":"JitterBug"},
  //   {"id":4,"phoneNumber":"4","price":980,"type":"GalaxyS22"},
  //   {"id":5,"phoneNumber":"5","price":850,"type":"iPhone12"},
  //   {"id":6,"phoneNumber":"6","price":300,"type":"Nokia"}
  // ]

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl,this.httpOptions)
  }
}
