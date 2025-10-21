import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewerComponent } from './viewer/viewer.component';

export class AppModule {}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private scrollEnabled = false;
  title = 'my-web-portfolio';

  constructor() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    this.resetScrollPosition();
    this.disableScrolling();
    this.setupPageVisibilityHandler();
  }

  scrollToExplore() {
    this.enableScrolling();

    const contentSection = document.querySelector('.content-section');
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  private disableScrolling() {
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('scroll-enabled');
    this.scrollEnabled = false;
    if (this.scrollEnabled) {
      console.log('Scrolling disabled');
    }
  }

  private enableScrolling() {
    document.body.style.overflow = 'auto';
    document.body.classList.add('scroll-enabled');
    this.scrollEnabled = true;
  }

  private resetScrollPosition() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  private setupPageVisibilityHandler() {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.resetScrollPosition();
        this.disableScrolling();
      }
    });

    window.addEventListener('focus', () => {
      this.resetScrollPosition();
      if (!this.scrollEnabled) {
        this.disableScrolling();
      }
    });
  }
}
