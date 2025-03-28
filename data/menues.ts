// Sidans produkter
// Denna fil innehåller en array med objekt som representerar produkterna som ska visas på sidan.
// Varje objekt har ett id, namn, pris, beskrivning, kategori och bild.
// Denna data används för att skapa produkterna på sidan.
//added by Majid
 
import type { Menu } from "types/menu";
 
 
export const foods: Menu[] = [
    {
      id: 1,
      name: "Classic Burger",
      price: 89,
      description: "Saftig nötköttsburgare med ost och dressing.",
      category: "Burgers",
      image:  "/images/1.png"
 
    },
    {
      id: 2,
      name: "Cheesy Taco",
      price: 59,
      description: "Tacos med extra ost och kryddig sås.",
      category: "Tacos",
      image:  "/images/2.png"
 
    },
    {
      id: 3,
      name: "Lemonade",
      price: 29,
      description: "Uppfriskande citrondryck med is.",
      category: "Drinks",
      image:  "/images/3.png"
 
    }
  ];