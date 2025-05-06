//Vai definir a estrutura de um objeto book e permitir manipular esse objeto
export interface Book{
    id : number;
    title : string;
    author : string;
    price : number;
//  price ?: number;
    //a ? faz com que os dados não sejam obrigatórios

}