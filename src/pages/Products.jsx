import React, { useState } from 'react';
import { motion } from 'framer-motion';
import radianceImg from '../assets/radiance.jpg';
import hydratingImg from '../assets/hydrating.jpg'
import nightRepairImg from '../assets/rejuvenate.jpg'
import hydrateImg from '../assets/hydrate.jpg'
import vitaminImg from '../assets/vitamin.jpg'
import gentleImg from '../assets/gentle.jpg'
import maskImg from '../assets/mask.jpg'
const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedConcerns, setSelectedConcerns] = useState([]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Hydrating Serum",
      category: "Serums",
      price: 49.99,
      image: hydrateImg,
      concerns: ["Dryness", "Fine Lines"],
      description: "Intense hydration for all skin types"
    },
    {
      id: 2,
      name: "Vitamin C Brightening Cream",
      category: "Moisturizers",
      price: 59.99,
      image: vitaminImg,
      concerns: ["Dark Spots", "Dullness"],
      description: "Brightening and anti-aging formula"
    },
    {
      id: 4,
      name: "Radiance Serum",
      category: "Serums",
      price: 49.99,
      image: radianceImg,
      concerns: ["Brightening", "Hydration"],
      description: "Illuminate your skin with our signature serum"
    },{
        id: 5,
        name: "Hydrating Essence",
        category: "Moisturizers",
        price: 39.99,
        image: hydratingImg,
        concerns: ["Hydration", "Soothing"],
        description: "Deep hydration for glowing skin"
    },
    {
        id: 6,
        name: "Night Repair",
        category: "Toners",
        price: 59.99,
        image: nightRepairImg,
        concerns: ["Toning", "Soothing"],
        description: "Rejuvenate while you sleep"
    },{
        id: 3,
        name: "Gentle Cleansing Foam",
        category: "Cleansers",
        price: 29.99,
        image: gentleImg,
        concerns: ["Sensitive Skin", "Acne"],
        description: "Soft and effective cleansing"
      },
      {
        id: 7,
        name: "Hydrating Mask",
        category: "Masks",
        price: 19.99,
        image: maskImg,
        concerns: ["Hydration", "Sensitive Skin"],
        description: "Hydrating and nourishing"
      }
  ];

  const categories = ["Serums", "Moisturizers", "Cleansers", "Masks", "Toners"];
  const concerns = ["Dryness", "Acne", "Dark Spots", "Fine Lines", "Sensitive Skin", "Dullness", "Hydration", "Soothing", "Toning"];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleConcernChange = (concern) => {
    setSelectedConcerns(prev => 
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesConcerns = selectedConcerns.length === 0 || product.concerns.some(c => selectedConcerns.includes(c));
    const matchesPrice = (!priceRange.min || product.price >= Number(priceRange.min)) &&
                        (!priceRange.max || product.price <= Number(priceRange.max));
    return matchesCategory && matchesConcerns && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="products-page">
        <div id="nav">
        <h1>Nirva</h1>
        <div id="center-nav">
          <a href="/products">Products</a>
          <a href="#">Brands</a>
          <a href="#">Fashion</a>
          <a href="#">Login</a>
        </div>
        <button>GET STARTED</button>
      </div>
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our collection of premium skincare products</p>
      </div>

      <div className="products-container">
        <aside className="filters-section">
          <div className="filter-group">
            <h3>Categories</h3>
            <div className="filter-options">
              {categories.map(category => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Skin Concerns</h3>
            <div className="filter-options">
              {concerns.map(concern => (
                <label key={concern} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedConcerns.includes(concern)}
                    onChange={() => handleConcernChange(concern)}
                  />
                  {concern}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="price-range">
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </aside>

        <main className="products-grid">
          <div className="products-toolbar">
            <div className="view-options">
              <button
                className={`view-option ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
              <button
                className={`view-option ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>

          <motion.div 
            className={`products-list ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}
            layout
          >
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <p className="product-description">{product.description}</p>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-products">
                No products match your filters
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Products;