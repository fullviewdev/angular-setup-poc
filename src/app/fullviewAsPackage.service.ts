import { Injectable } from '@angular/core';
import { AuthService, User } from './auth.service';

@Injectable()
export class FullviewAsPackageService {
  // the 'orgId' value can be found at https://app.fullview.io/setup as the value of the 'data-org' script attribute
  private orgId = 'orgId';
  private fullview =

  constructor(private authService: AuthService) {
    this.injectFullviewScript();

    this.authService.$user.subscribe((user) => this.syncUserData(user));
  }

  // call this method to inject the Fullview script into the document
  // this method should be called as early as possible in the application lifecycle
  private injectFullviewScript(): void {
    const script = window.document.createElement('script');

    script.async = true;
    script.src = 'https://install.fullview.io';
    script.dataset['org'] = this.orgId;

    document.head.appendChild(script);
  }

  // call this method to sync your user data with Fullview
  // this method should be called whenever your user data changes
  // this includes the moment the user logs in or logs out
  private syncUserData(user: User | undefined): void {
    // this represents the moment the user logs out
    if (!user) {
      window.$fvIdentity = undefined;
      return;
    }

    // this represents the moment the user authenticates or the user data changes
    // for a complete list of available user properties, see https://app.fullview.io/setup
    window.$fvIdentity = {
      id: user.id, // Required - anything unique in your organisation
      name: user.name, // Required - visible in Fullview dashboard
      email: user.email, // Optional - visible in Fullview dashboard
    };
  }
}
