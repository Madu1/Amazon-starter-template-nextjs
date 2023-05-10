import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, descripton, category, image}) {
  const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5);
    return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image src={image} height={150} width={100} className="w-fit h-fit object-contain m-auto "/>
        <h4 className="my-3">{title}</h4>

        <div className="flex">
            {Array(rating).fill().map((_,i) => (
                <StarIcon className="h-5 text-yellow-500"/>
            ))}
            
        </div>

        <p className="text-xs my-2 line-clamp-2 ">{descripton}</p>

        <div className="mb-5">
            <Currency quantity={price} currency="USD"/>
        </div>

        {hasPrime ? (
            <div className="flex items-center space-x-2 -mt-5">
            <img loading="lazy"
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt="prime"/>
                <p className="text-xs text-gray-500 ">Free Next-day Deleivery</p>
            </div>
        ):null}
        
        <button className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product