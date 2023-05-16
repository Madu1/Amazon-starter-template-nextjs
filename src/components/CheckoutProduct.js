import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {

        

        dispatch(removeFromBasket({id}))
    }

    // <div className="grid grid-cols-5 grid-row-span-3  mb-20"></div>

    return (
      <div className="grid grid-cols-5 grid-row-span-3  mb-20">
          <Image
            src={image}
            alt="product image"
            width={200}
            height={200}
            className="w-auto h-auto object-contain"
          />
          {/* Middle Section */}
          <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
              {Array(rating)
                .fill()
                .map((i, index) => (
                  <StarIcon key={index} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs mt-2 mb-2 line-clamp-3 text-justify">
              {description}
            </p>
    
            <Currency quantity={price} />
            {hasPrime && (
              <div className="flex items-center space-x-2">
                <img
                  loading="lazy"
                  className="w-12"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0FCEO0QKaIsb6OF8vQVezPYAaCWXft5K99DftRwr2eufb2Yr2cpUOdMtUxjvmlyLuA&usqp=CAU"
                  alt="prime"
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
            )}
          </div>
          {/* Right buttons */}
          <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button mt-auto" onClick={addItemToBasket}>
              Add to Basket{" "}
            </button>
            <button className="button mt-auto" onClick={removeItemFromBasket}>
              {" "}
              Remove from Basket{" "}
            </button>
          </div>
        </div>
      );
    }
    
    export default CheckoutProduct;