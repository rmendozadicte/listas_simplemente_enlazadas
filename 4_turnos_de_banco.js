//FIFO First In First Out

class NodoTicket{
    constructor(numeroTicket, nombreCliente){
        this.numeroTicket = numeroTicket;
        this.nombreCliente = nombreCliente;
        this.siguiente = null; // [#1 Ricardo->null]
    }
}

class ColaBanco{
    constructor(){
        this.cabeza = null;
    }

    llegar(numeroTicket, nombreCliente){
        const nuevoTicket = new NodoTicket(numeroTicket,nombreCliente)

        if(this.cabeza === null){
            this.cabeza = nuevoTicket;
            console.log(`[Ticket #${numeroTicket}] Registrado: ${nombreCliente}`)
            return;
        }

        let actual = this.cabeza;
        while(actual.siguiente !== null){
            actual = actual.siguiente;
        }

        actual.siguiente = nuevoTicket;
        console.log(`[Ticket #${numeroTicket}] Registrado: ${nombreCliente}`)
        
    }

    llamarSiguiente(){
        if(this.cabeza === null){
            console.log("No hay clientes en espera.");
            return;
        }

        const atendido = this.cabeza;
        this.cabeza = this.cabeza.siguiente;
        console.log(`Llamando a ventanilla a: ${atendido.nombreCliente} (Ticket # ${atendido.numeroTicket})`);
        
    }

}

const banco = new ColaBanco();
banco.llegar(1,"Ricardo Mendoza");
banco.llegar(2,"Francisco Zapata");
banco.llamarSiguiente();
// 
// banco.llegar(3,"Luis Mendez");
