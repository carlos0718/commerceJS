const productos = [
	{
		id: 1,
		title: "Remera MockUp",
		price: 2000,
		image: "../images/430.jpg",
		description:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		id: 2,
		title: "Pantalon",
		price: 2000,
		image: "../images/pantalon.jpg",
		description:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		id: 3,
		title: "Zapatilla",
		price: 2000,
		image: "../images/zapatillas.jpg",
		description:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		id: 4,
		title: "Medias",
		price: 2000,
		image: "../images/medias.jpg",
		description:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		id: 5,
		title: "Camisa",
		price: 2000,
		image: "../images/camisa.jpg",
		description:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
	{
		id: 6,
		title: "Ojotas",
		price: 2000,
		image: "../images/ojotas.jpg",
		description:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum",
	},
];
//se guarda array de objetos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));

const styleCard = {
	section_column: `
        border: solid 2px #eee;
        display: grid;
		grid-template-columns: 1fr 1fr;  
		grid-gap: 1rem;
		text-align: center;
		margin: 25px 55px;
		padding: 35px 125px;
		background: #eee;
    `,
	div: `
        padding: 10px 15px;
		font-size: 1.2rem;
        color: #BCB8C2;
    `,
	header: `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px; 
		font-size: 2rem;
        color: #BB9DEA;
    `,
	price: `
        font-weight: 600;
        font-size: 25px; 
    `,
	img: `
        width: 100%;
        height: 320px;
		boder: solid 50px #BB9DEA;
		border-radius: 5px;
    `,
};

const styleBtn = {
	btn: `
        background-color: #a7a7d7;
        color: #fff;
		margin: 75px 0px;
        padding: 10px 15px;
        border-radius: 5px;
		border: none;
        font-size: 20px;
        font-weight: 600;
        position: relative;
		left: 25%;
		cursor: pointer;
        `,
};

const styledResponsive = {
	section_column: `
        flex: 50%;
        max-width: 100%;
		padding: 10px 20%;
    `,
};

let icon = document.getElementById("icon-cart");
console.dir(icon);
icon.innerText = Number(localStorage.getItem("total")) || " ";
const resizeListener = () => window.location.reload();

let app = document.getElementById("app");
if (app) {
	app.style.display = "flex";
	app.style.flexWrap = "wrap";
	app.style.justifyContent = "center";
}

productos.forEach((x) => {
	let div = document.createElement("div");
	div.innerHTML += `<section 
			style = "${window.innerWidth <= 1100 ? styledResponsive.section_column : styleCard.section_column}">
            <img src="images/${x.image}" alt="${x.title}" style = "${styleCard.img}"/>
            <div style = "${styleCard.div}">
                <div style = "${styleCard.header}">
                    <h3>${x.title}</h3>
                    <span style = "${styleCard.price}">$ ${x.price}</span>
                </div>
                <p>${x.description}</p>
                <button id="btn${x.id}" style='${styleBtn.btn}'> ver producto</button>
            </div>
        </section>`;

	app?.appendChild(div);
	let idBtn = document.getElementById(`btn${x.id}`);
	console.dir(idBtn);
	idBtn?.addEventListener("click", () => {
		window.location.href = "./details/detalle.html";
		localStorage.setItem("id", x.id);
	});
});

window.addEventListener("resize", resizeListener);
