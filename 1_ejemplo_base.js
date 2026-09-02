// 1. Definir la clase que representa al Nodo (Node)
class Nodo{
    constructor(data){
        this.data = data; // El valor que almacenamos 
        this.next = null; // La referencia al siguiente nodo (inicia vacía)
    }
}

// 2. Definir nuestra lista enlazada, la que administra los nodos
class ListaEnlazada{
    constructor(){
        this.head = null; //Al crearse, la lista está vacía
    }

    // Método para agregar un elemento (Nodo) al final
    agregar(data){
        const nuevoNodo = new Nodo(data)
        console.log("nuevo cambio para github");
        
        // Si la lista está vacía, el nuevo nodo es la cabeza (head)
        if(this.head == null){
            this.head = nuevoNodo;
            return;
        }

        // Si la lista no está vacía, recorremos desde la cabeza (head) 
        // hasta el último
        let actualNodo = this.head
        while(actualNodo.next !== null){
            actualNodo = actualNodo.next
        }

        // Conectamos el último nodo con el nuevo
        actualNodo.next = nuevoNodo;
    }

    // Metodo para imprimir la lista en consola
    imprimir(){
        let actual = this.head;
        let resultado = "";
        while(actual !== null){
            resultado += `${actual.data} -> `;
            actual = actual.next;
        }
        console.log(resultado + "null");
    }
}

const miLista = new ListaEnlazada();
miLista.agregar(5);
/*Primer nodo
this.head = null
nuevoNodo { data = 5 , next = null }
this.head = { data = 5 , next = null }
actualNodo = { data = 5 , next = nuevoNodo }
data 5, next null
*/

miLista.agregar(11);
/*Segundo nodo
this.head = { data = 5 , next = null }
nuevoNodo { data = 11 , next = null }
actualNodo = { data = 5 , next = { data = 11 , next = null } }
data 5, next {11, null}
*/

miLista.agregar(40);
/*Tercer nodo
this.head = { data = 5 , next = null }
nuevoNodo { data = 40 , next = null }
actualNodo = { data = 11 , next = { data = 40 , next = null } } }
data 11, next {40,null}
*/

miLista.imprimir();