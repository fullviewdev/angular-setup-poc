import { Component } from '@angular/core';
import { FullviewService } from './fullview.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private fullviewService: FullviewService
  ) {}
}
