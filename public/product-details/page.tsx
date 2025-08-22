'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductDetail() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState('Pink');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showZoom, setShowZoom] = useState(false);

  const product = {
    id: 1,
    name: 'Pink Net Dress for Laddu Gopal',
    price: '₹499',
    originalPrice: '₹699',
    discount: '29% off',
    images: ['/dress1.jpg', '/dress2.jpg', '/dress3.jpg', '/dress4.jpg'],
    rating: 4.5,
    reviews: 24,
    colors: ['Pink', 'Red', 'Blue'],
    sizes: ['S', 'M', 'L'],
    description:
      'Exquisitely crafted pink net dress for your beloved Laddu Gopal. This beautiful dress features intricate detailing, soft fabric, and a perfect fit that will enhance the divine presence of your deity.',
    details: [
      'Made from high-quality net fabric',
      'Soft inner lining for comfort',
      'Handcrafted embroidery work',
      'Easy to wear and maintain',
      'Perfect for daily worship and special occasions',
    ],
    stock: 15,
    sku: 'LGD-PN-2023',
    tags: ['New Arrival', 'Festive', 'Premium', 'Net Fabric'],
    deliveryInfo:
      'Free delivery on orders above ₹999. Usually dispatched in 2-3 business days.',
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Yellow Bandhej Dress',
      price: '₹349',
      originalPrice: '₹499',
      image: '/dress2.jpg',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Blue Velvet Dress',
      price: '₹599',
      originalPrice: '₹799',
      image: '/dress3.jpg',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Green Mor Pankh Dress',
      price: '₹450',
      originalPrice: '₹650',
      image: '/dress4.jpg',
      rating: 4.3,
    },
    {
      id: 5,
      name: 'Golden Silk Dress',
      price: '₹799',
      originalPrice: '₹999',
      image: '/dress5.jpg',
      rating: 4.7,
    },
  ];

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    // Buy now logic here
    router.push('/checkout');
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => router.back()}
                className="mr-4 text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </button>
              <img
                src="/logo.png"
                alt="Laddu Gopal Store Logo"
                className="h-8"
              />
            </div>

            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-700 hover:text-indigo-600 p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </a>

              <a
                href="/cart"
                className="relative text-gray-700 hover:text-indigo-600 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-600">
          <a href="/" className="hover:text-indigo-600">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-indigo-600">
            Products
          </a>
          <span className="mx-2">/</span>
          <a href="/products/dresses" className="hover:text-indigo-600">
            Dresses
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg bg-white p-4 shadow-sm border border-gray-200">
              <div
                className="h-96 w-full flex items-center justify-center cursor-zoom-in"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onClick={() => setShowZoom(!showZoom)}
              >
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>

              {showZoom && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-white z-10 cursor-zoom-out">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-contain transform scale-150"
                  />
                </div>
              )}

              <div className="flex mt-4 space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`h-20 w-20 flex-shrink-0 rounded-md border-2 overflow-hidden ${
                      activeImage === index
                        ? 'border-indigo-600'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-current'
                          : 'stroke-current'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through ml-3">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium ml-4 px-2.5 py-0.5 rounded">
                  {product.discount}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Color
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`h-8 w-8 rounded-full border-2 ${
                        selectedColor === color
                          ? 'border-indigo-600 ring-2 ring-indigo-100'
                          : 'border-gray-300'
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        // For non-standard colors, we might need to add specific classes
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 w-10 flex items-center justify-center rounded-md border ${
                        selectedSize === size
                          ? 'border-indigo-600 bg-indigo-100 text-indigo-800'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="h-10 w-10 flex items-center justify-center rounded-l-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>
                  <div className="h-10 w-12 flex items-center justify-center border-t border-b border-gray-300">
                    <span className="text-gray-900">{quantity}</span>
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="h-10 w-10 flex items-center justify-center rounded-r-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>

                  <span className="ml-4 text-sm text-gray-600">
                    {product.stock} available in stock
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition duration-300 font-medium flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300 font-medium"
                >
                  Buy Now
                </button>
              </div>

              {/* Product Meta */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex text-sm text-gray-600">
                  <span className="mr-4">SKU: {product.sku}</span>
                  <span>Category: Dresses</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-indigo-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Delivery Information
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.deliveryInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details and Reviews */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button className="py-4 px-6 border-b-2 border-indigo-600 font-medium text-sm text-indigo-600">
                  Product Details
                </button>
                <button className="py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-600 hover:text-gray-900">
                  Reviews ({product.reviews})
                </button>
                <button className="py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-600 hover:text-gray-900">
                  Shipping & Returns
                </button>
              </nav>
            </div>

            <div className="p-6">
              <h3 className="font-medium text-gray-900 mb-4">
                Product Details
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  Care Instructions
                </h3>
                <p className="text-gray-700">
                  Hand wash recommended. Dry in shade. Do not bleach. Iron on
                  low heat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 truncate">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current'
                              : 'stroke-current'
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>

                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 font-medium text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Laddu Gopal Store</h3>
              <p className="text-gray-400 mb-4">
                Premium dresses for your deity with devotion and craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>
                    123 Temple Street, Vrindavan, Uttar Pradesh 281121
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>info@laddugopalstore.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="mb-4 md:mb-0">
              © 2023 Laddu Gopal Store. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <img src="/payment-visa.svg" alt="Visa" className="h-8" />
              <img
                src="/payment-mastercard.svg"
                alt="Mastercard"
                className="h-8"
              />
              <img src="/payment-paypal.svg" alt="PayPal" className="h-8" />
              <img src="/payment-upi.svg" alt="UPI" className="h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
