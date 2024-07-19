class Herrmaientas{
    constructor(pala){
        this.pala = pala;
    }
    estado(){
        return "Las herramientas son necesarias para tareas de mantenimiento";
    }
}
class Alicate{
    constructor(a){
        this.a = a;
    }
    estado(){
        return "Las herramientas mecánicas son básicas y manejables";
    }
}
class Taladro{
    constructor(t){
        this.t = t;
    }
    estado(){
        return "Las herramientas eléctricas o electrónicas son de alta precisión";
    }
}
 let herra = new Herrmaientas();
 console.log(herra.estado());
 let alic = new Alicate();
 console.log(alic.estado());
 let tal = new Taladro();
 console.log(tal.estado());

