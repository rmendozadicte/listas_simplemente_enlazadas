class Producto{
    constructor(item){
        this.producto = item; // Ejemplo: Pan
        this.next = null;     // Apunta al siguiente producto de la lista
    }
}

class ListaDeCompras{
    constructor(){
        this.head = null;
    }

    agregar(item){
        const nuevoProducto = new Producto(item);

        if( this.head === null ){
            this.head = nuevoProducto;
            return;
        }

        // Nos ubicamos en el primer producto
        let productoActual = this.head;
        while(productoActual.next !== null){
            productoActual = productoActual.next
        }
        productoActual.next = nuevoProducto; //Pan (head)->next(Leche) , Leche-> next(Queso), Queso->next(null) 
    }

    imprimirLista(){
        let actualProducto = this.head;
        let lista = "Carrito de Compras: ";
        while(actualProducto !== null){
            lista += `${actualProducto.producto} --> `;
            actualProducto = actualProducto.next;

        }
        console.log(lista + "Fin");
        
    }
}

const miCarrito = new ListaDeCompras();
miCarrito.agregar("Pan");
miCarrito.agregar("Leche");
miCarrito.agregar("Queso");

miCarrito.imprimirLista();