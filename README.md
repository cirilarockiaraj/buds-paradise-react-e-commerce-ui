# Buds Paradise – Earphones & Earbuds E-Commerce Website

Buds Paradise is a React-based e-commerce website UI for selling earphones, earbuds, and neckbands. The application features a product catalog, category sections, product pricing, and an Add to Cart feature.

## Overview

The goal of this project is to build a simple and attractive shopping experience where users can browse audio products and add items to their cart. The cart count is displayed in the navigation bar and updates when products are added.

## Features

- Responsive e-commerce homepage
- Navigation bar with Home, Products, About, and Contact links
- Hero section with a Shop Now button
- Shop by Category:
  - Earphones
  - Earbuds
  - Neckband
- Featured products section
- Product cards with:
  - Product image
  - Product name
  - Current price
  - Original price
  - Add to Cart button
- Cart icon in the navigation bar
- Cart count displayed in the navbar when products are added
- Product-focused layout with a clean design and purple theme

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React components

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cirilarockiaraj/buds-paradise-react-e-commerce-ui
   ```

2. Navigate to the project directory:

   ```bash
   cd buds-paradise-react-e-commerce-ui
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Cart Functionality

When a user clicks **Add to Cart** on a product:

1. The selected product is added to the cart.
2. The cart state is updated.
3. The cart count in the navigation bar reflects the number of items added.

> The cart count can represent total quantity or the number of unique products, depending on how the cart logic is implemented.

## Project Structure

The structure may vary depending on your implementation. A typical React project structure is:

```text
buds-paradise/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Header.jsx
│   │   ├── Category.jsx
│   │   ├── Product.jsx
│   │   └── Footer.jsx
|   ├── data/
│   │   └── product.json
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Author

**Ciril Arockiaraj S**

- LinkedIn: [ciril-arockiaraj-s](https://www.linkedin.com/in/ciril-arockiaraj-s/)
- GitHub: [cirilarockiaraj](https://github.com/cirilarockiaraj)