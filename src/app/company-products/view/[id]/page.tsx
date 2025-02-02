// import React from 'react';
// export async function generateStaticParams(productId) {
//   console.log("productId",productId);
//   // const product = await fetch(`/products/get-products/${productId}`).then((res) => res.json())
//   const response = await fetch(`http://192.168.31.47:3000/api/products/get-product/${productId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",

//       }
//   }).then((res) => res.json())
  
//   const product = await response?.json()
//   console.log("object",product);
 
// }
import Link from 'next/link';
// import axiosInstance from '@/app/login/axiosInstance';

const Page = async ({ params }) => {
  const { id: productId } = await params; 
  console.log(productId);
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  const product = await fetch(`http://192.168.31.47:3000/api/products/getProductById/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
  }).then((res) => res.json())
  
  

   

  console.log("product",product);

  // const router = useRouter();
  // console.log("router", router);
  // console.log("router", params);
   
  
  

  
  
  // useEffect(  () => {
    
  //     if (id) {
  //       fetchProductDetails(id);
  //     }
    
  // }, []);

  // const fetchProductDetails = async (productId) => {
  //   try {
  //     const response = await axiosInstance.get(`/products/get-products/${productId}`);
  //     if (response.data) {
  //       setProduct(response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching product details:', error);
  //     // Handle errors here (e.g., show notification or set error state)
  //   }
  // };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      { productId && product?.name  && product ? (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Product Details</h1>
          <h3 className="text-xl font-bold">{product?.name}</h3>
          <p className="text-gray-400 mt-2">{product?.description}</p>
          <p className="text-green-500 mt-2 font-bold text-right">₹{product?.price}</p>
          <p className="text-gray-400 mt-2 text-right">Installs: {product?.installs}</p>
          <Link href="/">
            <a className="text-blue-400 hover:underline mt-6 block text-right">Back to Products</a>
          </Link>
        </div>
      ) : (
        <p>Loading...</p> // You can enhance this by adding a spinner or better loading indicators
      )}
    </div>
  );
};

export default Page;
