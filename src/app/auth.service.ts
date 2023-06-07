import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type User = {
  id: string;
  name: string;
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user = new BehaviorSubject<User | undefined>(undefined);

  constructor() {}

  login(): void {
    this.$user.next({
      id: 'unique-user-id-john-doe',
      name: 'John Doe',
      email: 'john.doe@email.com',
    });
  }

  logout(): void {
    this.$user.next(undefined);
  }
}
