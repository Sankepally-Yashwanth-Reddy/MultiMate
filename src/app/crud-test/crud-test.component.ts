import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;              // Unique identifier for the user
  firstName: string;       // User's first name
  lastName: string;        // User's last name
  email: string;           // User's email address
  role: 'Admin' | 'Employee' | 'Manager';  // User's role in the company
  isActive: boolean;       // Whether the user is currently active
  dateJoined: Date;        // Date the user joined the company
}


@Component({
  selector: 'app-crud-test',
  standalone: true,
  imports: [HeaderComponent, NgFor, NgIf, CommonModule, FormsModule],
  templateUrl: './crud-test.component.html',
  styleUrl: './crud-test.component.css'
})
export class CrudTestComponent implements OnInit {
  users: User[] = [];

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle("MultiMate | CRUD Test")
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
