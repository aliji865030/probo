import React from "react";
import "./Event.css";

const Event = () => {
  const data = [
    {
      trade: 11879,
      card_h: "Barbados to win the match vs Guyana?",
      card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
      yes: 6.5,
      no: 3.5,
      img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
    },
    {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
      {
        trade: 11879,
        card_h: "Barbados to win the match vs Guyana?",
        card_t: "H2H last 5 T20 : Barbados 2 , Guyana 3, DRAW 0",
        yes: 6.5,
        no: 3.5,
        img: "https://www.jiomart.com/images/product/original/rvv8oiayrj/doomee-rcb-ipl-t-shirt-product-images-rvv8oiayrj-0-202304211623.jpg?im=Resize=(500,630)",
      },
  ];
  return (
    <div className="event">
      {data.map((item, index) => {
        return (
          <div className="event-card" key={index}>
            <div>
              <img
                src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FBar_Chart.png&w=16&q=75"
                alt=""
              />
              <label>{item.trade} traders</label>
            </div>
            <div className="card-img">
                <img src={item.img} alt="" />
                <p>{item.card_h}</p>
            </div>
            <div className="card-img2">
                <img src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2Fprobo_logo.png&w=32&q=75" alt="" />
                <p>{item.card_t}</p>
            </div>
            <div className="card-btn">
                <button>Yes {item.yes}</button>
                <button>No {item.no}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
