import { Injectable } from '@angular/core';
import { Notes } from './notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Notes[] = [
    {
      id: 'r1',
      title: 'Cat',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg',
      content: 'The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.[6]',
      createdAt: '13 April 2021',
      notesGrade: '100/100'
    },
    {
      id: 'r2',
      title: 'Dog',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg',
      content: 'The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog\'s nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquely attuned to human behavior,[9] enabling an abundant cosmopolitan distribution[10] and the ability to thrive on a starch-rich diet that would be inadequate for other canids.[11]',
      createdAt: '13 April 2021',
      notesGrade: '100/100'
    }
  ]

  constructor() { }

  getAllNotes() {
    return [...this.notes];
  }

  getNote(noteId: string) {
    return {...this.notes.find(note => {
      return note.id === noteId;
    })};
  }

  deleteNote(noteId: string) {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }
}
