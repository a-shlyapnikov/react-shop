import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalPrice: 0
	},
	reducers: {
		addToCart(state, action) {
			state.items.push(action.payload);
			state.totalPrice = state.items.reduce((acc, item) => acc + +item.price, 0);
		},
		removeFromCart(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
			state.totalPrice = state.items.reduce((acc, item) => acc + +item.price, 0);
		},
		clearCart(state) {
			state.items = [];
			state.totalPrice = 0;
		}
	}
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
