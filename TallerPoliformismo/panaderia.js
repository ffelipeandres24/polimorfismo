class Panaderia {
    constructor(tipo, insumo, cantidad, costo) {
      this.tipo = tipo;
      this.insumo = insumo;
      this.cantidad = cantidad;
      this.costo = costo;
    }
  
    // Métodos getters
    getTipo() {
      return this.tipo;
    }
  
    getInsumo() {
      return this.insumo;
    }
  
    getCantidad() {
      return this.cantidad;
    }
  
    getCosto() {
      return this.costo;
    }
  
    // Métodos setters
    setTipo(tipo) {
      this.tipo = tipo;
    }
  
    setInsumo(insumo) {
      this.insumo = insumo;
    }
  
    setCantidad(cantidad) {
      this.cantidad = cantidad;
    }
  
    setCosto(costo) {
      this.costo = costo;
    }
  
    
    panaderia() {
      console.log(`Bienvenido a la panadería. Aquí hacemos el mejor pan de tipo ${this.tipo}.`);
    }
  }
  

  class PanBlanco extends Panaderia {
    constructor(insumo, cantidad, costo) {
      super('Pan Blanco', insumo, cantidad, costo);
    }
  
    
    panBlanco() {
      console.log('Este es el pan blanco, suave y delicioso.');
    }
  }
  

  class PanIntegral extends Panaderia {
    constructor(insumo, cantidad, costo) {
      super('Pan Integral', insumo, cantidad, costo);
    }
  
 
    panIntegral() {
      console.log('Este es el pan integral, saludable y nutritivo.');
    }
  }
  
  
  class PanCenteno extends Panaderia {
    constructor(insumo, cantidad, costo) {
      super('Pan de Centeno', insumo, cantidad, costo);
    }
  
   
    panCenteno() {
      console.log('Este es el pan de centeno, con un sabor fuerte y único.');
    }
  }
  
 
  const panBlanco = new PanBlanco('Harina', 100, 50);
  panBlanco.panaderia(); 
  panBlanco.panBlanco(); 
  
  const panIntegral = new PanIntegral('Harina Integral', 80, 60);
  panIntegral.panaderia(); 
  panIntegral.panIntegral();
  
  const panCenteno = new PanCenteno('Harina de Centeno', 70, 65);
  panCenteno.panaderia(); 
  panCenteno.panCenteno();
  