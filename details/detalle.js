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
icon.innerText = Number(localStorage.getItem("total")) || " ";

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
	let producto = JSON.parse(localStorage.getItem("productos"));
	let articulo = producto.find((x) => x.id == idBtn);
	icon.innerHTML = " ";
	console.log({ articulo });

	let count = 0;
	let total = 0;

	if (localStorage.getItem("carrito")) {
		carrito = JSON.parse(localStorage.getItem("carrito"));
		total = Number(localStorage.getItem("total"));
		let aux = carrito.findIndex((x) => x.id == articulo.id);
		console.log(aux);
		if (aux > -1) {
			count = carrito[aux].cantidad;
			total += count;
			icon.innerText = total;
			carrito[aux] = { ...articulo, cantidad: count + 1 };
		} else {
			count = 1;
			total += count;
			icon.innerText = total;
			carrito.push({ ...articulo, cantidad: count });
		}
	} else {
		count = 1;
		total = count;
		icon.innerText = total;
		carrito.push({ ...articulo, cantidad: count });
	}
	console.log({ carrito });
	localStorage.setItem("carrito", JSON.stringify(carrito));
	localStorage.setItem("total", total);
};

window.addEventListener("resize", resizeListenerDetail);
