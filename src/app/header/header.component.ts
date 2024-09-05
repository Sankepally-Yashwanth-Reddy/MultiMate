import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {

  }

  toggleNavbar() {
    const navbar = document.getElementById('navbarSupportedContent');
    if (this.isNavbarCollapsed) {
      this.renderer.setStyle(navbar, 'height', 'auto');
    } else {
      this.renderer.setStyle(navbar, 'height', '0');
    }
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  home() {
    this.router.navigate(['/home'])
  }

  todo() {
    this.router.navigate(['/todo'])
  }

  agGrid() {
    this.router.navigate(['/ag-grid'])
  }

  calculator() {
    this.router.navigate(['/calculator'])
  }

  guessTheNumber() {
    this.router.navigate(['/guess-the-number'])
  }

  randomNumberGenerator() {
    this.router.navigate(['/random-number-generator'])
  }

  vote() {
    this.router.navigate(['/vote'])
  }

  notes() {
    this.router.navigate(['/notes']);
  }

}
