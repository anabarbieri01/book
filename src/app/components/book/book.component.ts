import { Component } from '@angular/core';
import { Book } from '../../book';//esta importando a inteface Book.ts

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  //objeto book, com os dados para a interface
  book : Book = {} as Book; //para poder inicializar um obejtos vazio, sem informções no form de cadastro



}
