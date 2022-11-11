import { createSlice } from '@reduxjs/toolkit';

interface PhotoState {
    categoryId: number;
    photo: string;
    title: string;
}

const initialState: PhotoState[] = [];

const photo = createSlice({
    name: 'photo',
    initialState: initialState,
    reducers: {
        addPhoto: (state, action) => {
            // const newPhoto = action.payload;
            state.push(action.payload);
        },
    },
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
