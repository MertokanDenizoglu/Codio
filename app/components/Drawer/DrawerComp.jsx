"use client";
import { useState } from "react";
import { openDrawer } from "../../redux/drawerSlice";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Space, Button, message } from "antd";
import { addProduct, deleteAll, singleDelete } from "../../redux/basketSlice";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const DrawerComp = () => {
  const drawer = useSelector((state) => state.drawer);
  const basketItems = useSelector((state) => state.basket);
  const [placement] = useState("right");
  const dispatch = useDispatch();
  console.log(drawer, "Drawer");
  const onClose = () => {
    dispatch(openDrawer());
  };
  console.log(basketItems);
  return (
    <div>
      <Drawer
        title="Sepetim"
        placement={placement}
        width={500}
        onClose={onClose}
        open={drawer}
        extra={
          <div className="flex gap-x-5">
            <Button
              onClick={() => {
                message.error("Bla ");
              }}
            >
              Sepeti Onayla
            </Button>
            <Button onClick={() =>{
              dispatch(deleteAll())
              message.success("Sepetiniz Boşaltıldı")
            } }>
              Tümünü Temizle
            </Button>
          </div>
        }
      >
        {basketItems.length !== 0 ? (
          <ul className="grid gap-y-10 ">
            {basketItems.map((item, index) => {
              return (
                <li className="grid gap-y-2" key={index}>
                  <ProductCard name={item.name} quantity={item.quantity} />
                  <div className="flex gap-x-5">
                    <Button
                      className="w-1/2"
                      onClick={() => {
                        dispatch(addProduct(item));
                      }}
                    >
                      +
                    </Button>
                    <Button
                      className="w-1/2"
                      onClick={() => {
                        dispatch(singleDelete(item.id));
                      }}
                      danger
                    >
                      -
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h1>Sepetinizde Hiç Ürün Yok</h1>
        )}
      </Drawer>
    </div>
  );
};

export default DrawerComp;
