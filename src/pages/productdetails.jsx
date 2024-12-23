import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/productDetails.json");
        const data = await response.json();
        const productData = data.find(
          (product) => product.id === parseInt(id, 10)
        );
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/product")}>
        Back to Products
      </button>

      <div className="product-details-container">
        <h1 className="product-title">{product.title}</h1>
        <ul className="product-details-list">
          {product.details.map((section, index) => (
            <li key={index} className="product-detail-item">
              <h2 className="section-heading">{section.heading}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-view">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="section-content">{section.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
