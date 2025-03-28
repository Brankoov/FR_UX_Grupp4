  // Sidans produkter
// Denna fil innehåller en array med objekt som representerar produkterna som ska visas på sidan.
// Varje objekt har ett id, namn, pris, beskrivning, kategori och bild.
// Denna data används för att skapa produkterna på sidan.
//added by Majid
 
import type { Buffet } from "types/buffet";
 
export const mat : Buffet[] = [
    {
      id: 4,
      name: "Italiensk buffé",
      price: 280,
      image: "images/img_italian-buffet.jpg",
      categories: [
        { title: "Antipasti", items: ["Bruschetta", "Caprese", "Prosciutto & melon", "Marinerade oliver"] },
        { title: "Varmrätter", items: ["Örtmarinerad kyckling", "Vegetarisk pastasallad"] },
        { title: "Sallader & Tillbehör", items: ["Italiensk potatissallad", "Pastasallad"] },
        { title: "Dessert", items: ["Tiramisu", "Pannacotta med bär"] },
      ],
    },
    {
      id: 5,
      name: "Grekisk buffé",
      price: 280,
      image: "images/img_greek_buffet.jpg",
      categories: [
        { title: "Förrätter & Plock (Meze)", items: ["Tzatziki", "Dolmades", "Fetaost & oliver", "Spanakopita"] },
        { title: "Varmrätter", items: ["Souvlaki", "Moussaka", "Grekiska köttbullar"] },
        { title: "Sallader & Sidorätter", items: ["Grekisk sallad", "Rostade potatisklyftor"] },
        { title: "Dessert", items: ["Baklava", "Fruktfat"] },
      ],
    },
    {
      id: 6,
      name: "Asiatisk buffé",
      price: 280,
      image: "images/img_asian_buffet.jpg",
      categories: [
        { title: "Förrätter & Plock", items: ["Vårrullar", "Gyoza", "Edamame"] },
        { title: "Varmrätter", items: ["Pad Thai", "Kycklingspett", "Biff i ostronsås"] },
        { title: "Sallader & Sidorätter", items: ["Asiatisk gurksallad"] },
        { title: "Dessert", items: ["Pannacotta på kokosmjölk", "Exotisk fruktfat"] },
      ],
    },
  ];
 