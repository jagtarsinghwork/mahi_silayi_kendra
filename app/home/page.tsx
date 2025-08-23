'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/common/Logo';
// import upiqr from 'upiqr';
import { useTranslations } from 'next-intl';

type Props = {
  locale: string;
  imageData?: string[];
  cities?: string[];
  playStoreAppUrl?: string;
};

export default function ClientHome({ locale, imageData }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [showQR, setShowQR] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartItems, setCartItems] = useState(3);
  const [amount, setAmount] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState('');

  const products = [
    {
      id: 1,
      name: 'Pink Net Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_1.jpeg',
      rating: 4.5,
      reviews: 24,
      colors: ['Pink', 'Red', 'Blue'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 2,
      name: 'Yellow Bandhej Dress',
      price: 'Rs. 349',
      originalPrice: 'Rs. 499',
      discount: '30% off',
      image: '/laddu_gopal_ji_2.jpeg',
      rating: 4.2,
      reviews: 18,
      colors: ['Yellow', 'Orange'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 3,
      name: 'Blue Velvet Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_3.jpeg',
      rating: 4.8,
      reviews: 32,
      colors: ['Blue', 'Purple'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 4,
      name: 'Green Mor Pankh Dress',
      price: 'Rs. 450',
      originalPrice: 'Rs. 650',
      discount: '31% off',
      image: '/laddu_gopal_ji_4.jpeg',
      rating: 4.3,
      reviews: 15,
      colors: ['Green', 'Teal'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 5,
      name: 'Golden Silk Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_5.jpeg',
      rating: 4.7,
      reviews: 28,
      colors: ['Gold', 'Yellow'],
      sizes: ['Medium', 'Large'],
      isNew: true,
    },
    {
      id: 6,
      name: 'Red Brocade Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_6.jpeg',
      rating: 4.6,
      reviews: 21,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 7,
      name: 'White Pearl Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_7.jpeg',
      rating: 4.9,
      reviews: 37,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 8,
      name: 'Purple Sequined Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_8.jpeg',
      rating: 4.4,
      reviews: 19,
      colors: ['Purple', 'Violet'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 9,
      name: 'Black Embroidered Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1099',
      discount: '18% off',
      image: '/laddu_gopal_ji_9.jpeg',
      rating: 4.5,
      reviews: 25,
      colors: ['Black', 'Gray'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 10,
      name: 'Pink Floral Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_10.jpeg',
      rating: 4.3,
      reviews: 22,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 11,
      name: 'Blue Chikan Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_11.jpeg',
      rating: 4.6,
      reviews: 30,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 12,
      name: 'Green Kanjivaram Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_12.jpeg',
      rating: 4.8,
      reviews: 35,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 13,
      name: 'Red Banarasi Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_13.jpeg',
      rating: 4.7,
      reviews: 27,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 14,
      name: 'White Anarkali Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_14.jpeg',
      rating: 4.9,
      reviews: 40,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 15,
      name: 'Black Net Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_15.jpeg',
      rating: 4.4,
      reviews: 20,
      colors: ['Black', 'Gray'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },

    {
      id: 16,
      name: 'Pink Silk Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_16.jpeg',
      rating: 4.3,
      reviews: 23,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 17,
      name: 'Blue Chiffon Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_17.jpeg',
      rating: 4.6,
      reviews: 31,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 18,
      name: 'Green Georgette Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_18.jpeg',
      rating: 4.8,
      reviews: 36,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 19,
      name: 'Red Cotton Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_19.jpeg',
      rating: 4.7,
      reviews: 29,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 20,
      name: 'White Embroidered Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_20.jpeg',
      rating: 4.9,
      reviews: 38,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 21,
      name: 'Black Velvet Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_21.jpeg',
      rating: 4.4,
      reviews: 18,
      colors: ['Black', 'Gray'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 22,
      name: 'Pink Floral Chiffon Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_22.jpeg',
      rating: 4.3,
      reviews: 24,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 23,
      name: 'Blue Satin Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_23.jpeg',
      rating: 4.6,
      reviews: 33,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 24,
      name: 'Green Crepe Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_24.jpeg',
      rating: 4.8,
      reviews: 37,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 25,
      name: 'Red Rayon Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_25.jpeg',
      rating: 4.7,
      reviews: 26,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 26,
      name: 'White Sequined Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_26.jpeg',
      rating: 4.9,
      reviews: 39,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 27,
      name: 'Black Chikan Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_27.jpeg',
      rating: 4.4,
      reviews: 19,
      colors: ['Black', 'Gray'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 28,
      name: 'Pink Bandhej Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_28.jpeg',
      rating: 4.3,
      reviews: 22,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 29,
      name: 'Blue Georgette Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_29.jpeg',
      rating: 4.6,
      reviews: 30,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 30,
      name: 'Green Silk Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_30.jpeg',
      rating: 4.8,
      reviews: 34,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 31,
      name: 'Red Net Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_31.jpeg',
      rating: 4.7,
      reviews: 28,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 32,
      name: 'White Brocade Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_32.jpeg',
      rating: 4.9,
      reviews: 36,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 33,
      name: 'Black Sequined Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_33.jpeg',
      rating: 4.4,
      reviews: 21,
      colors: ['Black', 'Gray'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 34,
      name: 'Pink Bandhani Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_34.jpeg',
      rating: 4.3,
      reviews: 25,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 35,
      name: 'Blue Chiffon Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_35.jpeg',
      rating: 4.6,
      reviews: 32,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 36,
      name: 'Green Georgette Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_36.jpeg',
      rating: 4.8,
      reviews: 38,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 37,
      name: 'Red Cotton Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_37.jpeg',
      rating: 4.7,
      reviews: 30,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 38,
      name: 'White Embroidered Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_38.jpeg',
      rating: 4.9,
      reviews: 40,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 39,
      name: 'Black Velvet Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_39.jpeg',
      rating: 4.4,
      reviews: 22,
      colors: ['Black', 'Gray'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 40,
      name: 'Pink Floral Chiffon Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_40.jpeg',
      rating: 4.3,
      reviews: 26,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 41,
      name: 'Blue Satin Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_41.jpeg',
      rating: 4.6,
      reviews: 35,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 42,
      name: 'Green Crepe Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_42.jpeg',
      rating: 4.8,
      reviews: 39,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 43,
      name: 'Red Rayon Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_43.jpeg',
      rating: 4.7,
      reviews: 31,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: 44,
      name: 'White Sequined Dress',
      price: 'Rs. 899',
      originalPrice: 'Rs. 1199',
      discount: '25% off',
      image: '/laddu_gopal_ji_44.jpeg',
      rating: 4.9,
      reviews: 41,
      colors: ['White', 'Cream'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 45,
      name: 'Black Chikan Dress',
      price: 'Rs. 749',
      originalPrice: 'Rs. 949',
      discount: '21% off',
      image: '/laddu_gopal_ji_45.jpeg',
      rating: 4.4,
      reviews: 23,
      colors: ['Black', 'Gray'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 46,
      name: 'Pink Bandhej Dress',
      price: 'Rs. 499',
      originalPrice: 'Rs. 699',
      discount: '29% off',
      image: '/laddu_gopal_ji_46.jpeg',
      rating: 4.3,
      reviews: 27,
      colors: ['Pink', 'Peach'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 47,
      name: 'Blue Georgette Dress',
      price: 'Rs. 599',
      originalPrice: 'Rs. 799',
      discount: '25% off',
      image: '/laddu_gopal_ji_47.jpeg',
      rating: 4.6,
      reviews: 34,
      colors: ['Blue', 'Navy'],
      sizes: ['Medium', 'Large', 'X-Large'],
      isNew: true,
    },
    {
      id: 48,
      name: 'Green Silk Dress',
      price: 'Rs. 799',
      originalPrice: 'Rs. 999',
      discount: '20% off',
      image: '/laddu_gopal_ji_48.jpeg',
      rating: 4.8,
      reviews: 38,
      colors: ['Green', 'Olive'],
      sizes: ['Small', 'Medium'],
      isNew: true,
    },
    {
      id: 49,
      name: 'Red Net Dress',
      price: 'Rs. 649',
      originalPrice: 'Rs. 849',
      discount: '24% off',
      image: '/laddu_gopal_ji_49.jpeg',
      rating: 4.7,
      reviews: 30,
      colors: ['Red', 'Maroon'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    // {
    //   id: 50,
    //   name: 'White Brocade Dress',
    //   price: 'Rs. 899',
    //   originalPrice: 'Rs. 1199',
    //   discount: '25% off',
    //   image: '/laddu_gopal_ji_50.jpeg',
    //   rating: 4.9,
    //   reviews: 42,
    //   colors: ['White', 'Cream'],
    //   sizes: ['Small', 'Medium'],
    //   isNew: true,
    // },
  ];

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowQR(true);
    setAmount(product.price);
  };

  const addToCart = (product: any) => {
    setCartItems(cartItems + 1);
    // In a real app, you would add the product to cart state
  };

  // const categories = [
  //   { name: 'Festive Collection', image: '/category1.jpg', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 15L55 35H75L60 45L65 65L50 55L35 65L40 45L25 35H45L50 15Z' fill='%23C53030'/%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23F59E0B' stroke-width='4'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23F59E0B' stroke-width='2'/%3E%3C/svg%3E" },
  //   { name: 'Daily Wear', image: '/category2.jpg', icon: '👗' },
  //   { name: 'Premium Dresses', image: '/category3.jpg', icon: '💎' },
  //   { name: 'Accessories', image: '/category4.jpg', icon: '👜' },
  // ];

  const categories = [
    {
      name: 'Festive Collection',
      image: '/category1.jpg',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 15L55 35H75L60 45L65 65L50 55L35 65L40 45L25 35H45L50 15Z' fill='%23C53030'/%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23F59E0B' stroke-width='4' fill='none'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23F59E0B' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      name: 'Daily Wear',
      image: '/category2.jpg',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 30L50 15L70 30V70H30V30Z' stroke='%234F46E5' stroke-width='4' fill='none'/%3E%3Crect x='35' y='40' width='30' height='20' rx='2' fill='%234F46E5' fill-opacity='0.2'/%3E%3Cline x1='40' y1='50' x2='60' y2='50' stroke='%234F46E5' stroke-width='2'/%3E%3Cline x1='40' y1='55' x2='60' y2='55' stroke='%234F46E5' stroke-width='2'/%3E%3C/svg%3E",
    },
    {
      name: 'Premium Dresses',
      image: '/category3.jpg',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 25L50 35L70 25V75H30V25Z' stroke='%237C3AED' stroke-width='4' fill='none'/%3E%3Cpath d='M40 35V45' stroke='%237C3AED' stroke-width='2'/%3E%3Cpath d='M50 35V45' stroke='%237C3AED' stroke-width='2'/%3E%3Cpath d='M60 35V45' stroke='%237C3AED' stroke-width='2'/%3E%3Ccircle cx='50' cy='55' r='5' fill='%237C3AED' fill-opacity='0.2' stroke='%237C3AED'/%3E%3Ccircle cx='50' cy='65' r='7' fill='%237C3AED' fill-opacity='0.2' stroke='%237C3AED'/%3E%3C/svg%3E",
    },
    {
      name: 'Accessories',
      image: '/category4.jpg',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='35' cy='35' r='10' stroke='%23059669' stroke-width='4' fill='none'/%3E%3Ccircle cx='65' cy='35' r='10' stroke='%23059669' stroke-width='4' fill='none'/%3E%3Cpath d='M35 45V65C35 70 40 75 50 75C60 75 65 70 65 65V45' stroke='%23059669' stroke-width='4' fill='none'/%3E%3Ccircle cx='40' cy='30' r='3' fill='%23059669'/%3E%3Ccircle cx='60' cy='30' r='3' fill='%23059669'/%3E%3C/svg%3E",
    },
  ];

  // const generateQr = async () => {
  //   setLoading(true);
  //   try {
  //     const { qr, intent } = await upiqr({
  //       payeeVPA: '8690833289@okbizaxis',
  //       payeeName: 'Mahi Silai Kendra',
  //       transactionNote: 'Purchase from Laddu Gopal Store',
  //       amount: amount, // optional
  //       currency: 'INR', // optional
  //     });
  //     setQrData(qr); // base64 image string
  //     console.log('Intent:', intent);
  //   } catch (err) {
  //     console.error('QR generation failed:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Generate when modal opens
  // if (showQR && !qrData && !loading) {
  //   generateQr();
  // }

  // if (!showQR) return null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <img src="/logo.png" alt="Laddu Gopal Store Logo" className="h-10 mr-8" /> */}
              <div className="flex items-center w-32 h-10">
                <Logo />
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#products"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {t('products')}
                </a>
                <a
                  href="#categories"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {t('categories')}
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {t('about')}
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {t('contact')}
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder={t('search')}
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
                />
                <svg
                  className="w-5 h-5 absolute right-3 top-2.5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>

              <a
                href="https://wa.me/919461088033"
                className="text-gray-700 hover:text-indigo-600 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <button
                onClick={() => router.push('/login')}
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                {t('login')}
              </button>

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
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('laddu_gopal_dresses')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('adorn_your_deity')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 shadow-md"
            >
              {t('shop_now')}
            </a>
            <a
              href="#categories"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-700 transition duration-300"
            >
              View Collections
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {/* <section id="categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count} items</p>
                  <button className="mt-4 text-indigo-600 font-medium flex items-center group-hover:underline">
                    Explore
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Categories Section */}
      <section
        id="categories"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
            >
              {/* <div className="bg-indigo-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                {category?.icon}
              </div> */}
              <div
                className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors"
                style={{
                  backgroundImage: `url(${category.icon})`,
                  backgroundSize: '60%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <button className="text-indigo-600 font-medium flex items-center justify-center group-hover:underline mx-auto">
                Explore
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t('our_collection')}</h2>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium">
                All
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-md font-medium border border-gray-300">
                New Arrivals
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-md font-medium border border-gray-300">
                Best Sellers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                  {product?.isNew && (
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product?.discount}
                  </span>
                  <button className="absolute top-12 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
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
                    <span className="text-xs text-gray-600 ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>

                  <div className="flex space-x-2 mb-4">
                    {product.colors.slice(0, 3).map((color, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {color}
                      </span>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        +{product.colors.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition duration-300 font-medium text-sm"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 font-medium text-sm"
                    >
                      {t('buy_now')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300 shadow-sm">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
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
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted with finest materials and attention to detail for your
                deity.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                All transactions are encrypted and secure with multiple payment
                options.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Free shipping on orders above ₹999. Express delivery options
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get updates on new collections, exclusive offers, and special
            discounts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-96"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* QR Code Popup */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{t('pay_with_upi')}</h3>
            <p className="text-gray-600 mb-4">
              Scan the QR code to complete your payment for{' '}
              {selectedProduct?.name}
            </p>
            <img
              src={qrData}
              alt="UPI QR Code"
              className="w-48 h-48 mx-auto mb-4 border rounded-lg"
            />
            <p className="mb-4 font-semibold">{selectedProduct?.price}</p>
            <div className="flex space-x-3 justify-center">
              <button
                onClick={() => setShowQR(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                {t('cancel')}
              </button>

              <button
                onClick={() => {
                  setShowQR(false);
                  alert('Payment successful! Your order has been placed.');
                }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {t('confirm_payment')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
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
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-white"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className="text-gray-400 hover:text-white"
                  >
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
                  <span>+91 94610 88033</span>
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
            <p className="mb-4 md:mb-0 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Laddu Gopal Store. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
