import { Component, EventEmitter, Input, Output} from '@angular/core'; //tem que importa o Input para usa-lo
import { Book } from '../../book';//esta importando a inteface Book.ts

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()//para indicar que a informação dessa classe vem de fora, nesse caso vai vim do formulário de cadastro do Books 
  
 
  //objeto book, com os dados para a interface
  book : Book = {} as Book; //para poder inicializar um obejtos vazio, sem informções no form de cadastro

  @Output() //Envia os dados do Filho(book) para o pai(books)
  saveEmitter = new EventEmitter(); //toda vez que o save é chamado o pai é avisado


  save(){
    this.saveEmitter.emit();//Evento enviado
  
  }

}
