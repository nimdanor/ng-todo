import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

const API_URL = 'https://jsonplaceholder.typicode.com/users';


@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUser?: User;

  constructor(
    private readonly http: HttpClient
  ) {}

  getCurrentUser() {
    return this.currentUser;
  }

  async signIn(username: string): Promise<void> {
      /*
      // VERSION OBSERVABLE
      this.http.get<User>(API_URL + '/?username=' + username).subscribe(result => {
         this.currentUser = result;
      })
      */

      /*

        try {
            await A
            await B
        } catch(error) {

        }

      ¨*/
    const response = await this.http.get<User[]>(API_URL + '/?username=' + username).toPromise();
    if (response.length === 0) {
      throw new Error();
    }

    this.currentUser = response[0];
  }
}
