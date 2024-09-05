import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, NgIf, NgFor, EditorModule,],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  text: string | undefined;
  storedNotes: { content: string, editing: boolean }[] = [];
  selectedNote: string | undefined;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("MultiMate | Notes");

    // Load notes from localStorage on init
    const savedNotes = localStorage.getItem('storedNotes');
    if (savedNotes) {
      this.storedNotes = JSON.parse(savedNotes);
    }
  }

  saveNote() {
    if (this.text) {
      this.storedNotes.push({ content: this.text, editing: false });
      this.text = ''; // Clear the textarea after saving
      this.updateLocalStorage();  // Save to localStorage
    }
  }

  editNote(index: number) {
    this.storedNotes[index].editing = true;
    this.text = this.storedNotes[index].content;
  }

  saveEditedNote(index: number) {
    if (this.text) {
      this.storedNotes[index].content = this.text;
      this.storedNotes[index].editing = false;
      this.text = ''; // Clear after editing
      this.updateLocalStorage();  // Save to localStorage
    }
  }

  deleteNote(index: number) {
    this.storedNotes.splice(index, 1);
    this.updateLocalStorage();  // Update localStorage after deletion
  }

  viewMore(noteContent: string) {
    this.selectedNote = noteContent;
  }

  updateLocalStorage() {
    localStorage.setItem('storedNotes', JSON.stringify(this.storedNotes));
  }
}
