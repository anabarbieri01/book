# Book

* Bootcamp dev-junior

    Modulo 3, capitulo 2

* Revisando para a prova de Angular - Eletiva Web


****************************************

Passos iniciais para o projeto:

* instalar o angular/cli 

    npm install -g @angular/cli

* Caso o computador não reconheça o ng, utilizar o comando set path: set path=%PATH%;

    C:\Users\Aluno\AppData\Roaming\npm

Iniciando o projeto angular:

* Comando para criar um novo projeto: 

    ng new Calcv3 --no-standalone

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?

    RESPOSTA: NO

* Comando para criar um novo componente: 

    ng g c nomeConteiner

* Comando para abrir a aplicação no localHost: 

    ng s -o


* Para caso não tenha a pasta node_modules (quando baixa o clone ela não vem, então precisa instalar novamente o npm)

    npm install

* Comando para instalar o bootstrap:

    ng add @ng-bootstrap/ng-bootstrap

****************Anotações*******************
* O arquico /app/book.ts serve para definir a estrutura de um objeto book (nele vai ter as variaveis de book), e permitir manipular esse objeto na interface.

* No arquivo /components/book.component.ts criamos o objeto book com os dados apartir de uma interface.

* em /componentes/book.component.hmtl , exbimos os dados do objeto book.

* components/books -> para mostrar uma lista de libros, atraves da criação de um array.

* Em /components/books/books.component.HMTL é usado a diretiva ngFor que é usado para mostrar os dados do array de books de forma automatica

* Para utilizar Formularios no angular o primeiro passo é importar o modulo dele no app.module.ts

* Em book.component.html montamos um formulário para cadastro de livros.

* Em book.component.hmtl,  [(ngModel)]="book.title" faz a conexão entre o formulário e os dados do objeto da interface.

* Em book.component.ts ->   book : Book = {} as Book;
    serve para inicializar um objeto vazio, mesmo ele sendo campo obrigatório (essa é uma das formas de fazer).

Passos para salvar os dados do form:

* Em book.componet.ts, usamos o @Input para indicar que os dados do componete vem de fora.

* em book.component.ts (filho), usamos o *Output* para Envia os dados do Filho(book) para o pai(books), assim conseguimos gravar os dados inserido no form de cadastro, na tabela de livros.

    *   save(){
    this.saveEmitter.emit();//Evento enviado
    } --> É o evento criado para ser acionado quando clicar no botão Salvar.

* em Books.component.ts (pai)
    *  book : Book = {} as Book; //para indicar que o book irá receber os dados

    *  saveBook(){
    this.book.id = this.books.length + 1; //id é gerado pelo sistema
    this.books.push(this.book); //salva os dados no array
    this.book = {} as Book; //limpa os dados do form após salvar
  }

 * Remover e alterar dados da tabela:


