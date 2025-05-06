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

