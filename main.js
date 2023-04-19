const productos = [
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 1,
		marca: "Redragon",
		nombre: "Teclado gamer Shiva K512",
		precio: 6500,
		subcategoria: "Perifericos",
		ubicacion: "GBA",
	},
	{
		categoria: "Computacion",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 2,
		marca: "Asus",
		nombre: "Mother M2n68-am",
		precio: 7000,
		subcategoria: "Componentes",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: true,
		envioGratuito: true,
		id: 3,
		marca: "Kingston",
		nombre: "Memoria RAM Fury Beast 8GB",
		precio: 8500,
		subcategoria: "Componentes",
		ubicacion: "Cordoba",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 4,
		marca: "Logitech",
		nombre: "Auriculares gamer inalámbricos G733",
		precio: 29000,
		subcategoria: "Perifericos",
		ubicacion: "GBA",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: false,
		envioGratuito: true,
		id: 5,
		marca: "Redragon",
		nombre: "Auriculares gamer Zeus X",
		precio: 13000,
		subcategoria: "Perifericos",
		ubicacion: "Ushuaia",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: true,
		envioGratuito: true,
		id: 6,
		marca: "Motorola",
		nombre: "Motorola Edge 30 128 GB",
		precio: 90000,
		subcategoria: "Equipos",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Celulares",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 7,
		marca: "Nokia",
		nombre: "Nokia 1100",
		precio: 1500,
		subcategoria: "Equipos",
		ubicacion: "GBA",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 8,
		marca: "Samsung",
		nombre: "Samsung Galaxy A51 128GB",
		precio: 70000,
		subcategoria: "Equipos",
		ubicacion: "GBA",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 9,
		marca: "Samsung",
		nombre: "Samsung Galaxy A12 64GB",
		precio: 4000,
		subcategoria: "Equipos",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Celulares",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 10,
		marca: "Motorola",
		nombre: "Cargador Motorola",
		precio: 6000,
		subcategoria: "Cargadores",
		ubicacion: "Bariloche",
	},
];

// 1. Imprimir en consola todos los productos que tengan id par. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

const idPar = productos.filter((producto) => {
    return producto.id % 2 === 0
})

idPar.forEach((producto) => {
    console.log(`el producto ${producto.nombre} tiene id par`);
});

// 2. Imprimir en consola todos los productos que tengan envío inmediato. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

const envioInmediato = productos.filter ((producto) => {
    return producto.envioInmediato
})

envioInmediato.forEach ((producto) => {
    console.log(`el producto ${producto.nombre} cuenta con envío inmediato`);
})

// 3. Crear un nuevo array con los mismos productos pero con su precio duplicado. Imprimir en consola el nombre y precio de cada producto.


const precioDuplicado = productos.map ((producto) => {
    return {...producto,
    precio: producto.precio * 2,
    }
})

precioDuplicado.forEach ((producto) => {
    return console.log(`el nuevo precio de ${producto.nombre} es de $${producto.precio}`);
})

// 4. imprimir en consola si existe algun producto cuyo precio sea mayor a un precio dado. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

let precio = prompt("ingresa un precio");

const precioMayor = (precio) => {
    return productos.some ((producto) => {
        return producto.precio > precio
    })
    ? console.log(`hay productos mayor a $${precio}`)
    : console.log(`no hay productos mayor a $${precio}`)
}


precioMayor(precio);

// 5. Filtrar productos por precio.

let precioDado = 80000;

const filtrarPrecioMenorA = (precioDado) => {
    productosFiltrados = productos.filter ((producto) => {
        return producto.precio < precioDado
    })
    return productosFiltrados
}

console.log(filtrarPrecioMenorA(precioDado));

const filtrarPrecioMayorA = (precioDado) => {
    productosFiltrados = productos.filter ((producto) => {
        return producto.precio > precioDado
    })
    return productosFiltrados
}

console.log(filtrarPrecioMayorA(precioDado));

// 6. Cambiar la condición de todos los productos a "usado".

const condicionUsado = productos.map((producto) => {
    return {...producto,
    condicion: "usado",
    }
})

console.log(condicionUsado);

// 7. Imprimir en consola el nombre y precio de todos los productos que tengan envío inmediato y envío gratuito. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

const envioGratuitoEInmediato = productos.filter((producto) => {
    return producto.envioGratuito && producto.envioInmediato
})

envioGratuitoEInmediato.forEach((producto) => {
    return envioGratuitoEInmediato ? console.log(`el producto ${producto.nombre} cuenta con envío gratuito e inmediato`) : console.log(`el producto ${producto.nombre} no cuenta con envio gratuito ni inmediato`);
})

//8. Filtrar productos por categoria y subcategoria . Traer solo los productos de la categoria Celulares y de la subcategoria Equipos.

const filtrarCategoriaYSubcategoria = (categoria, subcategoria) => {
    const productosFiltrados = productos.filter((producto) => {
        return producto.categoria.toLowerCase().trim() === categoria.toLowerCase().trim() && producto.subcategoria.toLowerCase().trim() === subcategoria.toLowerCase().trim()
    })
    return productosFiltrados
}

console.log(filtrarCategoriaYSubcategoria("celulares", "equipos"));

// 10. Ordenar productos por precio de mayor a menor.

const precioMayorAMenor = () => {
    const productosOrdenados = productos.sort ((a, b) => {
        return b.precio - a.precio
    })
    return productosOrdenados
}

console.log(precioMayorAMenor());

//11. Ordenar productos por nombre de la A a la Z.

const productoAHastaZ = () => {
    const productosOrdenados = productos.sort ((a, b) => { 
        if (a.nombre < b.nombre) {
            return -1
        }
        if (a.nombre > b.nombre) {
            return 1
        }
        return 0
    })
    return productosOrdenados
}

console.log(productoAHastaZ());