
class Nodo{
    constructor(dato){
        this.dato = dato;       // El valor que llega al nodo o con el cual se inicializa
        this.siguiente = null;  // El puntero o flecha que apunta al siguiente nodo
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null;
    }

    agregar(dato){
        const nuevoNodo = new Nodo(dato);

        //Si la lista está vacía, el nuevo nodo es la cabeza (head)
        if(this.cabeza == null){
            this.cabeza = nuevoNodo;
            return;
        }

        // Si lista no está vacía, vamos a recorrer la lista desde la cabeza (head) hasta el último nodo
        let nodoActual = this.cabeza; 
        while(nodoActual.siguiente !== null){
            nodoActual = nodoActual.siguiente;
        }

        //Conectamos el último nodo con el nuevo
        nodoActual.siguiente = nuevoNodo; //  [5->11]--->[11->25]--->[25->null]   ****En espera [x,null]
    }
}

const miLista = new ListaEnlazada(); // this.cabeza = [ this.dato = 5 , this.siguiente = 11 ]  
//nodoActual = [ this.dato = 5 , this.siguiente = null ]
miLista.agregar(5); // this.dato=5 this.siguiente=null 
miLista.agregar(11); // this.dato=11 this.siguiente=null
miLista.agregar(25);