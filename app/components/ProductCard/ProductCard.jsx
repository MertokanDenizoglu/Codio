"use client";
import { addProduct } from "../../redux/basketSlice";
import { message } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

const ProductCard = ({ name, collection, campaign, price, item, quantity }) => {
  const dispatch = useDispatch();
  const addNew = (item) => {
    console.log(item);
    try {
      dispatch(addProduct(item));
      message.success("Ürün Sepete Eklendi");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={() => addNew(item)}
      className="bg-white border border-gray-900 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 relative"
    >
      <div className="relative">
        <img
          src="https://img.joomcdn.net/84538011699a22d1122e3c67e662310aac385e35_original.jpeg"
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-transparent p-2 rounded-full hover:bg-gray-100 transition duration-300">
          <AiOutlineStar className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute top-2 left-2 text-black bg-transparent text-2xl font-extrabold">
          {quantity}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl text-gray-600 font-semibold mb-2">{name}</h1>
        <p className="text-gray-600 mb-2">{collection}</p>
        <p className="text-gray-600 mb-2">{campaign}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-600">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
