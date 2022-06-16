import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  componentAlive: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy() {
    this.componentAlive = false;
  }
  logoutHandler() {
    this.router.navigate(['']);
  }
}
