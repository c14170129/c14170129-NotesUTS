import { Component, OnInit } from '@angular/core';
import { Notes } from './notes.model';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes: Notes[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAllNotes();
  }

}
