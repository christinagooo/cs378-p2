import './App.css';
import MenuItem from './components/MenuItem';
import { useState } from 'react';

const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }));
  };

  const clearAll = () => {
    setQuantities({});
  };

  const totalPrice = menuItems.reduce((sum, item) => sum + (quantities[item.id] || 0) * item.price, 0).toFixed(2);

  const handleOrder = () => {
    const orderedItems = menuItems
      .filter((item) => quantities[item.id] > 0)
      .map((item) => `- ${item.title} (x${quantities[item.id]})`)
      .join("\n");

    const message = orderedItems
      ? `Order Placed!\n\n${orderedItems}\n\nTotal: $${totalPrice}`
      : "Your cart is empty.";

    alert(message);
  };

  return (
    <div className="container">
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <div className="description-text">
        <h1 className="subtitle-1">Delicious, From-Scratch Recipes Close at Hand</h1>
        <h1 className="subtitle-2">The Fresh Choice of UT!</h1>
      </div>
      <div className="menu-items-container">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
            quantity={quantities[item.id] || 0}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="bottom-bar">
        <p>Subtotal: ${totalPrice}</p>
        <button className="btn-primary" onClick={handleOrder}>Order</button>
        <button className="btn-primary" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
