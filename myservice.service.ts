import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  myparlour="Anushka";
  constructor() { }
  getdepartment(){
    return this.myparlour;
  }
}
