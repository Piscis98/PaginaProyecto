import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(key: string, data: any){
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }

  getItem(key: string){
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e);
    }
  }

  removeItem(key: string): void
{
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error al remover',e);
  }
}

clearStorage(){
  try {
    localStorage.clear();
  } catch (e) {
    console.error('Error al remover',e);
  }
}

}
