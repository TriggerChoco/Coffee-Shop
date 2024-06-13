import React, {useState, useEffect} from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Cart from './components/Cart';
import { fakeMenuItems, fakeMerchItems } from './data';

function App() {

  const weatherApiKey = '517107d2abc66149076049f1712b0a5e';
  const [menuItems, setMenuItems] = useState(fakeMenuItems);
  const [merchItems, setMerchItems] = useState(fakeMerchItems);
  const [userCity, setUserCity] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          getWeatherData(latitude, longitude)
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [])

    const updateShoppingCart = (id) => {
      console.log('shopping cart item', id)
      const item = menuItems.find(item => item.id === id)
      console.log('item', item)
      setShoppingCart([...shoppingCart, item]);
      useEffect(() => {
        console.log(shoppingCart)
        }, [shoppingCart])
    }

  async function getWeatherData(lat, lon){
    console.log(lat)
    console.log(lon)
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
    console.log('weatherAPIResponse', weatherAPIResponse)
    if(weatherAPIResponse.status != 200){
      alert('could not get weather data')
    }
    let jsonData = await weatherAPIResponse.json()
    console.log('jsonData', jsonData)
    setUserCity(jsonData.name)
    setCurrentTemp(Math.round(jsonData.main.temp))
  }

  return (
    <>
      <div className='App'>
        <div className='navbar'>
          <Navbar shoppingCart={shoppingCart}/>
        </div>
        <div className='container'>
        <div className="row">
          <div className="col-12">
            <h1 className={"my-3 text-cnet"}>Coffee Shop Menu</h1>
            </div>
          </div>
          <div className="row my-5">
          <div className='h3'>Coffee</div>
          {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} id={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} updateShoppingCart={updateShoppingCart} />
        ))}
        </div>
        </div>
        <div>
        <div className="row">
          <div className='h3'>Merch</div>
          {merchItems && merchItems.length > 0 && merchItems.map((merchItem) => (
            <MenuItem key={merchItem.id} item={merchItem.item} price={merchItem.price} image={merchItem.image} altText={merchItem.item} />
        ))}
        </div>
        </div>
      </div>
      <Weather currentTemp={currentTemp} userCity={userCity} />
    </>
  );
}

export default App;
