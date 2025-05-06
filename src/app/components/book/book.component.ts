import { Component } from '@angular/core';
import { Book } from '../../book';//esta importando a inteface Book.ts

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book : Book = { //objeto book, com os dados para a interface
    id: 1,
    title: "Angular",
    author: "A",
    price: 5.00
  }

  

}
