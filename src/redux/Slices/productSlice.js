import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
	'product/fetchProductStatus',
	async () => {
		const { data } = await axios.get(
			'https://run.mocky.io/v3/550c1828-c450-4971-98ae-d19f23157e93'
		);
		return data;
	}
);

const productSlice = createSlice({
	name: 'products',
	initialState: {
		items: [],
		status: 'loading'
	},
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = 'loading';
				state.items = [];
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				(state.items = action.payload), (state.status = 'success');
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.status = 'error';
				state.items = [];
			});
	}
});

export default productSlice.reducer;
