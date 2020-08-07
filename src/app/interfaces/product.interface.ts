export interface Producto {
    categoria: string;
    cod: string;
    titulo: string;
    url: string;
}

/*
export class Producto {
    cod: string;
    categoria: string;
    titulo: string;
    url: string;

    constructor(cod: string, categoria: string, titulo: string, url: string) {
        this.cod = cod;
        this.categoria = categoria;
        this.titulo = titulo;
        this.url = url;
    }

    static mapToProd(obj: any): Producto {
        return new Producto(obj.cod, obj.categoria, obj.titulo, obj.url);
    }
}
*/
