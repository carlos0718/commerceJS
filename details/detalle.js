nav.innerHTML = NavBar;

const styleCardDetail = {
	section: `
        height: 500px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        text-align: center; 
        background: #eee;
        padding: 85px 125px;
    `,
	img: `
        width: 100%;
        height: 100%;
        object-fit: fill;
    `,
	div: `
        text-align: center;
        width: 100%;
    `,
	header: `
        font-size: 3rem;
        color: #BB9DEA;
    `,
	price: `
        font-size: 2.5rem;
        color: #BB9DEA;
        font-weight: 700; 
    `,
	description: `
        font-size: 2rem;
        color: #BCB8C2;
    `,
	btn: `
        background:#C68DEE;
        color: #fff;
        font-size:20px; 
        border: none;
        border-radius: 5px;
        margin-Top:25px;
        padding: 10px 20px;
        width: 300px;
        cursor: pointer; 
    `,
};

const styledResponsiveDetail = {
	section_column: `
        flex: 100%;
        max-width: 100%;
		padding: 10px 20px;
    `,
};

const styleResponsiveDetail = {};

let idBtn = localStorage.getItem("id");

icon = document.getElementById("icon-cart");
// Si no existe se crea y se le asigna el valor vacio para que no se muestre nada
icon.innerText = Number(localStorage.getItem("total")) || " ";

//se crea array carrito.
let carrito = [];

setTimeout(() => {
	let detalle = document.getElementById("detalle");

	productos.forEach((x) => {
		if (x.id == idBtn) {
			detalle.innerHTML = `
                <section style="${
					window.innerWidth <= 1100 ? styledResponsiveDetail.section_column : styleCardDetail.section
				}">
                                <img src="${x.image}" alt="${x.title}" style = "${styleCardDetail.img}"/>
                                <div style = "${styleCardDetail.div}">
                                    <div style = "${styleCardDetail.header}">
                                        <h3>${x.title}</h3>
                                    </div>
                                <p style = "${styleCardDetail.description}">${x.description}</p>
                            <div style = "${styleCardDetail.price}">$ ${x.price} ARS</div>
                        <button id="btn${x.id}" style='${styleCardDetail.btn}'> Agregar al carrito</button>
                    </div>
                </section>`;

			let btn = document.getElementById(`btn${x.id}`);
			btn?.addEventListener("click", addToCart);
		}
	});
}, 1000);

const resizeListenerDetail = () => window.location.reload();

const addToCart = () => {
	// se obtiene array de objetos de productos que estan alamacenados en el localStorage
	let producto = JSON.parse(localStorage.getItem("productos"));
	// se obtiene el id del producto que se esta agregando y se compara con el idBtn del storage
	let articulo = producto.find((x) => x.id == idBtn);
	//se actualiza el renderizado del valor del carrito por eso se pone en blanco para que despues de agrege el valor real
	icon.innerHTML = " ";
	//se inicializa la variable count en cero la cual se usará actualizar la cantidad de cada producto
	let count = 0;
	//se inicializa variable total en cero la cual se usará paraactulizar la cantidad del carrito8777
	let total = 0;
	//se valida si el key carrito existe en el storage
	if (localStorage.getItem("carrito")) {
		//si getItem(''carrito) tiene productos, se parsea el string a un array de objetos
		carrito = JSON.parse(localStorage.getItem("carrito"));
		//actualizamos la cantidad total del carrito
		total = carrito.reduce((acc, x) => acc + x.cantidad, 0); //Number(localStorage.getItem("total")) + 1;
		//se valida si el producto que se esta agregando ya existe en el carrito mediante su índice
		let aux = carrito.findIndex((x) => x.id == articulo.id);
		//si aux es mayor a -1, significa que el producto ya existe en el carrito
		if (aux > -1) {
			icon.innerText = total;
			count = carrito[aux].cantidad;
			carrito[aux] = { ...articulo, cantidad: count + 1 };
		} else {
			updateCar(total, count, articulo);
		}
	} else {
		total = 1;
		count = 1;
		updateCar(total, count, articulo);
	}
	localStorage.setItem("carrito", JSON.stringify(carrito));
	localStorage.setItem("total", total);
};
const updateCar = (total, count, articulo) => {
	icon.innerText = total;
	carrito.push({ ...articulo, cantidad: count });
};
window.addEventListener("resize", resizeListenerDetail);
