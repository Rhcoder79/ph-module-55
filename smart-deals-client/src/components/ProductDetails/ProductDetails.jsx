//import React, { use, useRef } from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product=useLoaderData();
console.log("Fetched Product:", product);
    return (
        <div>
          
          
      
        </div>
    );
};

export default ProductDetails;