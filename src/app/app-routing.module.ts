import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
//para criar as rotas precisa importa os componentes dela primeiro

const routes: Routes = [
  {path: 'book', component: BookComponent },
  {path: 'books', component: BooksComponent}
]; //criação/configuração das rotas para direcionar os componetes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
