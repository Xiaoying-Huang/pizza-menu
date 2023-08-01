import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {

  return <>
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  </>;

}

function Menu() {
  return (<>
    <main className='menu'>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
      </p>
      <ul className='pizzas'>
        {pizzaData.map((pizza) =>
          <Pizza pizzaObj={pizza} key={pizza.name} />
        )}
      </ul>
    </main>
  </>);

}

function Pizza({ pizzaObj }) {
  return (<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    <h3>{pizzaObj.name}</h3>
    <p>{pizzaObj.ingredients}</p>
    <span>{pizzaObj.soldOut ? "Sold Out" : `£${pizzaObj.price}`}</span>
  </li>);
}

function Footer() {
  const currentTime = new Date().toLocaleTimeString();
  const openTime = '11:00:00';
  const closeTime = '22:00:00';
  const isOpen = currentTime >= openTime && currentTime <= closeTime;

  return <>
    <footer className='footer'>
      {isOpen ? <Order closeTime={closeTime} /> : (<p>We're happy to welcome you between {openTime} and {closeTime}.</p>)}
    </footer >
  </>;
}

function Order({ closeTime }) {
  return (
    <div className='order'>
      <p>
        We're open until {closeTime}. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);
