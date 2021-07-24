import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ExampleType = {
    content?: string;
    children?: never;
};

export type ExampleTypes = {
    results: ExampleType[];
};

export type ExampleState = {
    data: ExampleTypes;
    mounted: boolean,
    loaded: boolean,
};

const initialState: ExampleState = {
    data: { results: [] },
    mounted: false,
    loaded: false,
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        mounted: (state) => {
            state.mounted = true;
        },
        loaded: (state, action: PayloadAction<ExampleTypes>) => {
            state.loaded = true;
            state.data = action.payload
        },
    },
});

export const { mounted, loaded } = exampleSlice.actions;
export const { name, reducer } = exampleSlice;