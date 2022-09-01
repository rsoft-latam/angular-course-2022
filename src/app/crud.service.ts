import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { 

    this.http.get('http://upb.com/user?size=30&limit=40&filter=valdez')
    .subscribe(res => {
      console.log('respuesta', res)
      // [{id:1 ,name: 'juan', age: '10}, {}........]
    })

    this.http.post('http://upb.com/user', {name: 'juan', age: '10'})
    .subscribe(res => {
      // id: 1
      console.log('respuesta', res)
    })

    this.http.put('http://upb.com/user', {id:1 ,name: 'juan', age: '10'})
    .subscribe(res => {
      console.log('respuesta', res)
    })

    this.http.patch('http://upb.com/user', {id:1 ,name: 'juan'})
    .subscribe(res => {
      console.log('respuesta', res)
    })

    this.http.delete('http://upb.com/user?id=1')
    .subscribe(res => {
      console.log('respuesta', res)
    })

  }

}