"use client"

import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import PromoArea from "./components/PromoArea";
import Mailing from "./components/Mailing";

interface Item {
  id: number;
  name: string;
  description: string;
  img: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/api/characters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: Item[]) => setItems(data))
      .catch((error) => {
         console.error('Error fetching data: ', error)})
  }, [])

  const carouselItems = items.map(item => ({ id: item.id, name:item.name, description:item.description, img:item.img}))
  
  return (
    <main>
      <div>
        <PromoArea />
        <Carousel items={carouselItems}/>
        <Mailing/>
      </div>
    </main>
  );
}


























// const formatText = (text: string) => {
//   const withSpaces = text.replace(/-/g, ' ');
//   const capitalized = withSpaces.replace(/\b\w/g, char => char.toUpperCase());
//   return capitalized;
// }