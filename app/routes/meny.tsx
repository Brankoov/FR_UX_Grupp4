import React, { useState, useEffect } from 'react';
import type { Menu } from "types/menu.ts";
import type { Buffet } from "types/buffet.ts";
import { foods} from "data/menues";
import { mat } from "data/buffets";
 
 
import Header from "src/components/Header";
import Footer from "src/components/Footer";
const MenuSection: React.FC = () => {
  const [menuList, setMenuList] = useState<Menu[]>([]);
  const [buffetList, setBuffetList] = useState<Buffet[]>([]);
 
  useEffect(() => {
    setMenuList(foods); //  // Sätter menyn (foods) när komponenten laddas
  }, []);
 
  useEffect(() => {
    setBuffetList(mat); // sätter buffén (buffets) när komponenten laddas
  }, []);
 
 
  console.log(mat);
 
 
  if (menuList.length === 0 || buffetList.length === 0) {
    return <p>Laddar meny och bufféer...</p>;
  }
 
  return (
    <div>
      <Header />
 
      {/* Hero Image */}
      <div style={{ textAlign: "center" }}>
        <img
          src="images/img_menu_cover.jpeg"
          alt="Catering meny"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
       {/* Catering Meny Sektion */}
       <section style={{ textAlign: "center", margin: "40px 0" }}>
        <h1>Catering meny</h1>
        <p>Våra bufféer går att anpassa efter era preferenser, skicka en förfrågan!</p>
      </section>
 
 
 
 {/* Buffé Sektion */}
 <section className="buffet-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", textAlign: "center" }}>
        {buffetList.map((buffet) => (
          <div key={buffet.id} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
            <img src={buffet.image} alt={`Bild på ${buffet.name}`} style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy" />
            <h2>{buffet.name}</h2>
            <p><strong>Fr. {buffet.price} kr / pp</strong></p>
            {buffet.categories.map((category: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; items: any[]; }, index: React.Key | null | undefined) => (
              <div key={index}>
                <h3>{category.title}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {category.items.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
 
 
      {/* Foodtruck Meny Sektion */}
      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <h1>Foodtruck meny</h1>
        <p>Ta en titt på vårat exklusiva utbud och få den perfekta lunchupplevelse</p>
      </section>
 
 
 
      <section className="menu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {menuList.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
            <img src={item.image} alt={item.name} style={{ width: "250px", height: "250px" }} />
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