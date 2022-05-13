const style = {
	nav: `
        padding: 15px;
        background-color: #eee
    `,
	ul: `
        font-size: 20px;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items : center;  
    `,
	li: `
       margin: 0px 20px;

    `,
	title: `
        font-size: 30px
    `,
	a: `
        text-decoration: none;
        color: #a7a7d7;
    `,
	tooltip: `
        display: flex;
        position: relative;
        top: -47px;
        right: -30px;
        color: #f86211;
        width: 25px;
        font-weight: 600; 
    `,
};

const NavBar = `<nav style='${style.nav}'>
                    <ul style='${style.ul}'>
                        <li  id="title" style="${style.title}"><a style="${style.a}" href="../"> Clothing Store </a></li>
                        <li style="${style.li}"><a style="${style.a}" href="../">Home</a></li>
                        <li style="${style.li}"><a style="${style.a}" href="../">About us</a></li>
                        <li style="${style.li}"><a style="${style.a}" href="../">Contact</a></li>
                        <li style="${style.li}"><img id="hover-carrito" src="../images/carrito-de-compras.png" alt="carrito" width=35px />
                            <span id="icon-cart" style="${style.tooltip}">
                                0    
                            </span>
                        </li>
                    </ul >
                    <div id="list-car"></div>
                </nav>`;

const nav = document.getElementById("nav");

nav.innerHTML = NavBar;
