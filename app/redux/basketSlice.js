import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.findIndex(product => product.id === productToAdd.id);

            if (existingProductIndex >= 0) {

                state[existingProductIndex].quantity += 1;
            } else {

                state.push({ ...productToAdd, quantity: 1 });
            }
        },
        deleteAll: () => {
            return [];
        },
        singleDelete: (state, action) => {
            const productIdDelete = action.payload;
            const existingProduct = state.find(product => product.id === productIdDelete);

            if (existingProduct && existingProduct.quantity > 1) {

                existingProduct.quantity -= 1;
            } else {

                return state.filter(product => product.id !== productIdDelete);
            }
        }
    }
})

export const { addProduct, deleteAll, singleDelete } = basketSlice.actions;
export default basketSlice.reducer;