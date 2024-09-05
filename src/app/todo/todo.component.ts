import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';

// Define the structure of a Todo item
interface Todo {
  id: number;         // Unique identifier for each todo
  text: string;       // The todo text or description
  completed: boolean; // Flag indicating whether the todo is completed or not
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf, HeaderComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  // Component properties
  newTodo: string = ''; // Holds the current value of the input field for a new todo
  todos: Todo[] = [];   // Array to store all the todos
  editingIndex: number | null = null; // Tracks the index of the todo being edited, if any

  constructor(private titleService:Title) {
    this.loadTodos(); // Load todos from local storage when the component initializes
  }

  ngOnInit(): void {
    this.titleService.setTitle('MultiMate | Todo')
  }

  // Method to add a new todo or update an existing one
  addTodo() {
    if (this.newTodo.trim()) { // Check if the input is not just whitespace
      if (this.editingIndex !== null) { // If editing an existing todo
        this.todos[this.editingIndex].text = this.newTodo; // Update the todo text
        this.editingIndex = null; // Reset the editing index
      } else {
        // Add a new todo to the list
        this.todos.push({
          id: Date.now(), // Use the current timestamp as a unique ID
          text: this.newTodo, // Set the text to the input value
          completed: false // New todos are not completed by default
        });
      }
      this.newTodo = ''; // Clear the input field
      this.saveTodos(); // Save the updated todos list to local storage
    }
  }

  // Method to delete a todo by its index
  deleteTodo(index: number) {
    this.todos.splice(index, 1); // Remove the todo from the array
    this.saveTodos(); // Save the updated todos list to local storage
  }

  // Method to start editing a todo
  editTodo(index: number) {
    this.newTodo = this.todos[index].text; // Set the input field to the todo's text
    this.editingIndex = index; // Store the index of the todo being edited
  }

  // Method to toggle the completion status of a todo
  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed; // Flip the completed status
    this.saveTodos(); // Save the updated todos list to local storage
  }

  // Method to clear all completed todos from the list
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed); // Keep only uncompleted todos
    this.saveTodos(); // Save the updated todos list to local storage
  }

  // Method to save the todos list to local storage
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos)); // Convert the todos array to a JSON string and save it
  }

  // Method to load the todos list from local storage
  loadTodos() {
    const savedTodos = localStorage.getItem('todos'); // Retrieve the todos from local storage
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos); // Parse the JSON string back to an array of todos
    }
  }
}
