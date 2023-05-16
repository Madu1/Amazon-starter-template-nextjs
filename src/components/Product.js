 import { StarIcon } from "@heroicons/react/solid";
 import Image from "next/image";
 import { useState } from "react";
 import Currency from "react-currency-formatter";
 import { useDispatch } from "react-redux";
 import { addToBasket } from "../slices/basketSlice";

 const MAX_RATING = 5;
 const MIN_RATING = 1;

 function Product({id, title, price, description, category, image}) {
     const dispatch = useDispatch();

     const [rating] = useState(
         Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
     );
     const [hasPrime] = useState(Math.random() < 0.5);

    
     const addItemToBasket = () => {
         const product = {
             id, title, rating, price, description, category, image,hasPrime,

         };
         dispatch(addToBasket(product));
     };

     return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
          <p className="absolute top-2 right-2 text-gray-400 ">{category}</p>
    
          <Image
            src={image}
            height={150}
            width={100}
            className="w-fit h-fit object-contain m-auto "
            alt="product image"
          />
          <h4>{title}</h4>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((i, index) => (
                <StarIcon key={index} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="text-xs my-2 line-clamp-2">{description}</p>

          <div className="mb-5">
            <Currency quantity={price} />
          </div>
          
          {hasPrime ? (
            <div className=" flex items-center space-x-2 -mt-5">
                <img
                    loading="lazy"
                    className="w-12"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0FCEO0QKaIsb6OF8vQVezPYAaCWXft5K99DftRwr2eufb2Yr2cpUOdMtUxjvmlyLuA&usqp=CAU"
                    alt="prime"
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
             ) : null}
          <button onClick={addItemToBasket} className="mt-auto button ">
            Add to Basket
          </button>
        </div>
      );
    }
    
    export default Product;

