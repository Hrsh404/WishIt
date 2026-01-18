import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:8080/wishIt/auth/register'; // Spring Boot base URL, DO not touch Fucking API.
  private baseUrl = 'http://localhost:8080/wishIt/auth';

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      this.loggedInUser.next(JSON.parse(savedUser));
    }
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  private loggedInUser = new BehaviorSubject<any>(null);

  loggedInUser$ = this.loggedInUser.asObservable();

  login(user: any): Observable<any> {
    if (user.username === 'aswin' && user.password === 'password') {

      const userData = {
          username: user.username,
          role: 'USER'
      };

      this.loggedInUser.next(userData);
      localStorage.setItem('loggedInUser', JSON.stringify(userData));

      return of({
        success: true,
        message: 'Login successful',
        user: userData
      });

    } else {
      return throwError(() => ({
        success: false,
        message: 'Username and password does not match'
      }));
    }
  }

  getLoggedInUser() {
    return this.loggedInUser.value;
  }

  logout(): void {
    this.loggedInUser.next(null);
    localStorage.removeItem('loggedInUser');
  }
}
