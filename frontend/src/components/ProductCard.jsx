import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import '../styles/ProductCard.css'

const renderStars = (score) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score - fullStars >= 0.25 && score - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} color="#FFA500" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" color="#FFA500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} color="#ccc" />);
  }

  return stars;
};



const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");

  const colorOptions = [
    { name: "Yellow Gold", key: "yellow", color: "#E6CA97" },
    { name: "White Gold", key: "white", color: "#D9D9D9" },
    { name: "Rose Gold", key: "rose", color: "#E1A4A9" }
  ];

  return (
    <div className="card">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="product-image"
      />

      <h2 style={{ fontFamily: 'Montserrat' }}>{product.name}</h2>
      <p style={{ fontFamily: 'Montserrat-Regular' }}>${product.price.toFixed(2)} USD</p>

      <div className="color-options">
        {colorOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setSelectedColor(opt.key)}
            className={`color-circle ${selectedColor === opt.key ? 'active' : ''}`}
            style={{ backgroundColor: opt.color }}
            title={opt.name}
          />
        ))}
      </div>

      <p className="color-label">{colorOptions.find(o => o.key === selectedColor).name}</p>
      <p style={{ fontSize: '14px', color: '#FFA500' }}>
  {renderStars(product.popularityScore * 5)}{" "}
  <span style={{ color: '#666' }}>
    ({(product.popularityScore * 5).toFixed(1)})
  </span>
</p>

    </div>
  );
};

export default ProductCard;
