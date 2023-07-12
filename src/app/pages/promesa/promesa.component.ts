import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  private readonly USERS_API: string = 'https://reqres.in/api/users';

  constructor() { }

  public ngOnInit(): void {
    this._initializeUsers();
  }

  /*example easy how does work the promise*/
 /* private _initialize(): void {
    const promise = new Promise( (resolve, reject) => {
      if(false){
        resolve('Hello World');
      }else{
        reject('Algo salio mal');
      }
    });

    promise.then( (message) => {
      console.log(message);
    })
      .catch( error => console.log('Error en la promesa : ', error));

    console.log('fin del init');

  }*/

  private _initializeUsers(): void{
    this._getUsuarios().then( users => {
      console.log(users);
    })
  }

  private _getUsuarios(): Promise<User[]> {
    return new Promise<User[]>(resolve => {
      fetch(this.USERS_API)
        .then(resp => resp.json())
        .then(body => resolve( body.data));
    })
  }
}
