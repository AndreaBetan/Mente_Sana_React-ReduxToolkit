import { createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'people',
    initialState: {
        page: 1,
        people: [],
        isLoading: false,
        gender: '',
        nationality: ''
    },
    reducers: {
        // Start loading people
        startLoadingPeople: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPeople: (state, action) => {
            state.isLoading = false
            state.page = action.payload.page
            state.people = action.payload.people
            state.gender = action.payload.gender
            state.nationality = action.payload.nationality
            
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPeople, setPeople, setPeopleGender } =  appSlice.actions;