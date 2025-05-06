import { Component } from '@angular/core';
import { Book } from '../../book'; //importando a inteface book.ts
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book : Book = {} as Book; //para indicar que o book irá receber os dados

  books: Book[] = [//criando um array para mostra a lista de books
    {
      id: 1,
      title: "Java 24 horas",
      author: "Ana",
      price: 40.00
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Fernanda Maria",
      price: 30.00
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Juliana Silva",
      price: 35.50
    },
    {
      id: 4,
      title: "HTML 24 horas",
      author: "Juliana Silva",
      price: 35.50
    },
    {
      id: 5,
      title: "CSS 24 horas",
      author: "Juliana Silva",
      price: 35.50
    }

  ]

}
