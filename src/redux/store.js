import { configureStore } from '@reduxjs/toolkit';
import cart from './Slices/cartSlice';
import products from './Slices/productSlice';
export const store = configureStore({
	reducer: {
		products,
		cart
	}
});
