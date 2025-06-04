import { createSlice } from "@reduxjs/toolkit"
import { fetchNature, weatherCharacteristics, fetchEightDayWeather } from "./operators";

const initialState = {
    nature: [],
    weatherInfo: [],
    eightCast: [],
    liked: false,
    isLoading: false,
}

const natureSlice = createSlice({
    name: "nature",
    initialState,
    reducers: {
        addLike(state, action) {
            const id = action.payload;
            const card = state.nature.find(card => card.id === id)
            if(card) {
                card.liked = !card.liked
            }
        },
        deleteCard(state, action) {
            const idToDelte = action.payload;
            state.nature = state.nature.filter(card => card.id !== idToDelte)
        },
        resetCards() {
            return initialState
        }
    },

    extraReducers: (builders) => {
        builders
            .addCase(fetchNature.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchNature.fulfilled, (state, action) => {
                state.nature.push(action.payload);
                state.isLoading = false
            })
            .addCase(fetchNature.rejected, (state) => {
                state.nature = [];
                state.isLoading = false
            })
            .addCase(weatherCharacteristics.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(weatherCharacteristics.fulfilled, (state, action) => {
                state.weatherInfo = [action.payload]
                state.isLoading = false;
            })
            .addCase(weatherCharacteristics.rejected, (state) => {
                state.weatherInfo = [];
                state.isLoading = false;
            })
            .addCase(fetchEightDayWeather.pending, state => {
            state.isLoading = true;
            })
            .addCase(fetchEightDayWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.eightCast = action.payload
            })
            .addCase(fetchEightDayWeather.rejected, state => {
            state.isLoading = false;
            state.eightCast = []
            })
    }
})

export const natureReducer = natureSlice.reducer;
export const { addLike, deleteCard, resetCards } = natureSlice.actions;