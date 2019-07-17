import { HttpClient }    from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import 'rxjs-compat'
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private http:HttpClient){
  }

  getUser(username:string):Observable<any>{
    return this.http.get(`https://api.github.com/users/${username}`)
      .pipe(map((response: Response)=> response.json()))


  }
}

