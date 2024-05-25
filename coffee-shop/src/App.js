import React, {useState, useEffect} from 'react';
import './App.css';
import { fakeMenuItems, fakeMerchItems } from './data';
import MenuItem from './components/MenuItem';
import Navbar from './components/Navbar';

function App() {

  const [menuItems, setMenuItems] = useState(fakeMenuItems)
  const [merchItems, setMerchItems] = useState(fakeMerchItems)

  return (
    <>
      <div className='App'>
        <h1>Coffee Shop Menu</h1>
        <div>
          <h3>Coffee</h3>
          {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
        ))}
        </div>
        <div>
          <h3>Merch</h3>
          {merchItems && merchItems.length > 0 && merchItems.map((merchItem) => (
            <MenuItem key={merchItem.id} item={merchItem.item} price={merchItem.price} image={merchItem.image} altText={merchItem.item} />
        ))}
        </div>
      </div>
    </>
  );

  Navbar()
}

export default App;
