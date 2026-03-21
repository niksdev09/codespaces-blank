import { Component } from '@angular/core';

interface Book {
  id: number | null;
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  myName: string = "Никита"
  todo: string[] = [
    "Купить молоко",
    "Пойти в магазин",
    "Сделать домашку",
    "Пойти на тренировку",
    "Пойти спать"
  ]
  newBook: Book = {
    id: null,
    title: "",
    author: "",
    description: ""
  };

  books: Book[] = [
    {
      id: 1,
      title: "Книга 1",
      author: "Пушкин А.С.",
      description: "Описание книги 1"
    },
    {
      id: 2,
      title: "Книга 2",
      author: "Толстой Л.Н.",
      description: "Описание книги 2"
    },
    {
      id: 3,
      title: "Книга 3",
      author: "Достоевский Ф.М.",
      description: "Описание книги 3"
    }
  ];
  btnClick() {
    this.books.push({
      id: this.books.length + 1,
      title: this.newBook.title,
      author: this.newBook.author,
      description: this.newBook.description
    });
    this.newBook = {
      id: null,
      title: "",
      author: "",
      description: ""
    };

  };
  btnClick2() {
    this.myName = this.myName + "?";
  }
}
