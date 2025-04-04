import React, { useState, useEffect } from 'react';
import type { Menu } from "types/menu.ts";
import type { Buffet } from "types/buffet.ts";
import { foods} from "data/menues"; 
import { mat } from "data/buffets";


import Header from "src/components/Header"; 
import Footer from "src/components/Footer"; 

import "app/app.css"; // Importera CSS-modulen


const MenuSection: React.FC = () => {
  const [menuList, setMenuList] = useState<Menu[]>([]);
  const [buffetList, setBuffetList] = useState<Buffet[]>([]);

  useEffect(() => {
    setMenuList(foods); //  // Sätter menyn (foods) när komponenten laddas
  }, []);
  
  useEffect(() => {
    setBuffetList(mat); // sätter buffén (buffets) när komponenten laddas
  }, []);

  
  if (menuList.length === 0 || buffetList.length === 0) {
    return <p>Laddar meny och bufféer...</p>;
  }

  
  return (
    <div className="menu-container">
      <Header />

      {/* Hero Image */}
      <div className="hero-image">
        <img 
          src="images/img_menu_cover.jpeg" 
          alt="Catering meny" 
        />
      </div>
      
      {/* Catering Meny Sektion */}
      <section className="menu-intro">
        <h1>Catering meny</h1>
        <p>Våra bufféer går att anpassa efter era preferenser, skicka en förfrågan!</p>
      </section>

      {/* Buffé Sektion */}
      <section className="buffet-grid">
        {buffetList.map((buffet) => (
          <div key={buffet.id} className="buffet-item">
            <img src={buffet.image} alt={`Bild på ${buffet.name}`} className="buffet-image" />
            <h2>{buffet.name}</h2>
            <p><strong>Fr. {buffet.price} kr / pp</strong></p>
            {buffet.categories.map((category, index) => (
              <div key={index} className="buffet-category">
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Foodtruck Meny Sektion */}
      <section className="menu-intro">
        <h1>Foodtruck meny</h1>
        <p>Ta en titt på vårat exklusiva utbud och få den perfekta lunchupplevelse</p>
      </section>

      <section className="menu-grid">
        {menuList.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>💰 {item.price} kr</strong></p>
          </div>
        ))}
      </section>

      <Footer />
    </div>  
  );
};

export default MenuSection;
