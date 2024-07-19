class Silos {
    constructor(tipoGrano, cantidad, cliente, diasAlmacenados, epoca) {
      this.tipoGrano = tipoGrano;
      this.cantidad = cantidad;
      this.cliente = cliente;
      this.diasAlmacenados = diasAlmacenados;
      this.epoca = epoca;
      this.costoBasicoPorDia = 100; 
    }
  
    // Métodos getters
    getTipoGrano() {
      return this.tipoGrano;
    }
  
    getCantidad() {
      return this.cantidad;
    }
  
    getCliente() {
      return this.cliente;
    }
  
    getDiasAlmacenados() {
      return this.diasAlmacenados;
    }
  
    getEpoca() {
      return this.epoca;
    }
  
    // Métodos setters
    setTipoGrano(tipoGrano) {
      this.tipoGrano = tipoGrano;
    }
  
    setCantidad(cantidad) {
      this.cantidad = cantidad;
    }
  
    setCliente(cliente) {
      this.cliente = cliente;
    }
  
    setDiasAlmacenados(diasAlmacenados) {
      this.diasAlmacenados = diasAlmacenados;
    }
  
    setEpoca(epoca) {
      this.epoca = epoca;
    }
  
    
    calcularPrecio() {
      let costoAdicional = 0;
  
      if (this.epoca === 'Enero-Junio') {
        costoAdicional = 15000;
      } else if (this.epoca === 'Julio-Diciembre') {
        costoAdicional = 25000;
      }
  
      let costoTotal = (this.costoBasicoPorDia * this.diasAlmacenados) + costoAdicional;
      return costoTotal;
    }
  
   
    silos() {
      console.log(`El silo contiene ${this.cantidad} toneladas de ${this.tipoGrano}, pertenecientes al cliente ${this.cliente}.`);
    }
  }
  
 
  const silo1 = new Silos('Trigo', 50, 'Cliente A', 30, 'Enero-Junio');
  silo1.silos(); 
  console.log(`El costo total es: ${silo1.calcularPrecio()} pesos`);
  
  const silo2 = new Silos('Maíz', 75, 'Cliente B', 45, 'Julio-Diciembre');
  silo2.silos();
  console.log(`El costo total es: ${silo2.calcularPrecio()} pesos`);
  