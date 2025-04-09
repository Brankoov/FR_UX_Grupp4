 
  // Sidans produkter
// Denna fil innehåller en array med objekt som representerar produkterna som ska visas på sidan.
// Varje objekt har ett id, namn, pris, beskrivning, kategori och bild.
// Denna data används för att skapa produkterna på sidan.
//added by Majid

import type { Menu } from "types/menu";


export const foods: Menu[] = [
    {
      id: 1,
      name: "Fried Chicken i tortilla ",
      price: 120,
      description: "Vitlök & dragonmarinerad kyckling Serveras med  tomat & picklad rödlök samt krispig kålsallad",
      category: "Burgers",
      image:  "/images/img_menu_Fried Chicken.jpg"
  
    },
    {
      id: 2,
      name: "Pulled Pork burger",
      price: 150,
      description: "Långbakad karré med coleslaw, picklad rödlök i briochebröd",
      category: "Tacos",
      image:  "/images/img_menu_Pulled pork burger.jpg"
  
    },
    {
      id: 3,
      name: "Deepfried Avokado",
      price: 120,
      description: "Sandys friterade avokado toppad med picklad rödlök och kålsallad",
      category: "Drinks",
      image:  "/images/img_menu_Fried avokado.jpg"
  
    },

    {
        id: 4,
        name: "Pulled beef burger",
        price: 120,
        description: "Långbakad högrev  med coleslaw, picklad rödlök i briochebröd ",
        category: "Burgers",
        image:  "/images/img_menu_Beef burger.jpg"
    
      },
      {
        id: 5,
        name: "Nachostallrik",
        price: 120,
        description: "Krispiga nachos med het tomatsalsa, toppad med ost, koriander, majs, lime & krutonger",
        category: "Tacos",
        image:  "/images/img_menu_Nachos tallrik.jpg"
    
      },
      {
        id: 6,
        name: "Sandys friterade räkor i bröd",
        price: 120,
        description: "Pankofriterad vannameiräka i mjukt tortillabröd. Serveras med vitlöksdressing & picklad rödlök krispig kålsallad",
        category: "Drinks",
        image:  "/images/img_menu_Fried Chicken.jpg"
    
      }

 ];
  