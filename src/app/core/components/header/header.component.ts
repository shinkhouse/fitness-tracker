import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  public isAuth: boolean = false;
  public authSubscription: Subscription = new Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.auth.authChange.subscribe((res) => {
      this.isAuth = res;
    })
  }

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.auth.logout();
  }

}
