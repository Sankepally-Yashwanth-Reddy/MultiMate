import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
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
  nextId: number = 1;
  currentUser: Partial<User> = {};
  isEditing: boolean = false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("MultiMate | CRUD Test");
  }

  onSubmit() {
    if (this.isEditing) {
      this.updateUser(this.currentUser as User);
    } else {
      this.addUser(this.currentUser as User);
    }
    this.resetForm();
  }

  addUser(user: User) {
    if (!user.id) {
      user.id = this.nextId++;
    }
    this.users.push(user);
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  editUser(user: User) {
    this.currentUser = { ...user };
    this.isEditing = true;
  }

  updateUser(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  cancelEdit() {
    this.resetForm();
  }

  resetForm() {
    this.currentUser = {};
    this.isEditing = false;
  }
}
