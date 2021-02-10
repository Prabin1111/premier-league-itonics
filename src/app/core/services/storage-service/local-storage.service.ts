import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get<T>(key: string): T | string | null {
    const item = localStorage.getItem(key);
    if(item) {
     return JSON.parse(item);
    }
    return  item;
  }

  set<T>(key: string, value: T | string | null ): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(): void {
    localStorage.clear();
  }

  removeBy(key: string): void {
    localStorage.removeItem(key);
  }

  checkByKey(key: string) : boolean{
     if(this.get(key)) {
      return true;
     } 
     return false;
  }

}
