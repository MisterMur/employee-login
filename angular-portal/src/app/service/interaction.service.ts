import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _id = new BehaviorSubject<any>(0);
  id$ = this._id.asObservable();

  private _firstName = new BehaviorSubject<string>('');
  firstName$ = this._firstName.asObservable();

  private _lastName = new BehaviorSubject<string>('');
  lastName$ = this._lastName.asObservable();

  private _address = new BehaviorSubject<string>('');
  address$ = this._address.asObservable();

  private _state = new BehaviorSubject<string>('');
  state$ = this._state.asObservable();

  private _city = new BehaviorSubject<string>('');
  city$ = this._city.asObservable();

  private _zip = new BehaviorSubject<string>('');
  zip$ = this._zip.asObservable();

  private _cellPhone = new BehaviorSubject<string>('');
  cellPhone$ = this._cellPhone.asObservable();

  private _homePhone = new BehaviorSubject<string>('');
  homePhone$ = this._homePhone.asObservable();

  private _email = new BehaviorSubject<string>('');
  email$ = this._email.asObservable();

  private _title = new BehaviorSubject<string>('Edit');
  title$ = this._title.asObservable();

  constructor() { }

  setId(id: any) {
    this._id.next(id);
  }

  getId() {
    return this.id$;
  }

  setFirstName(firstName: string) {
      this._firstName.next(firstName)
    }

  getFirstname() : Observable<string> {
    return this.firstName$;
  }
  
  setLastName(lastName: string) {
    this._lastName.next(lastName);
  }

  getLastName(): Observable<string> {
    return this.lastName$;
  }

  setAddress(address: string) {
    this._address.next(address);
  }

  getAddress(): Observable<string> {
    return this.address$;
  }

  setState(state: string) {
    this._state.next(state);
  }

  getState(): Observable<string> {
    return this.state$;
  }

  setCity(city: string) {
    this._city.next(city);
  }

  getCity(): Observable<string> {
    return this.city$;
  }

  setZip(zip: string) {
    this._zip.next(zip);
  }

  getZip(): Observable<string> {
    return this.zip$;
  }

  setHomePhone(homePhone: string) {
    this._homePhone.next(homePhone);
  }

  getHomePhone(): Observable<string> {
    return this.homePhone$;
  }

  setCellPhone(cellPhone: string) {
    this._cellPhone.next(cellPhone);
  }

  getCellPhone(): Observable<string> {
    return this.cellPhone$;
  }

  setEmail(email: string) {
    this._email.next(email);
  }

  getEmail(): Observable<string> {
    return this.email$;
  } 

  setTitle(title: string) {
    this._title.next(title);
  }

  getTitle(): Observable<string> {
    return this.title$;
  }

}
