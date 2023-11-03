import { setPeople, startLoadingPeople } from "./appSlice"
import { peopleApi } from "../api/peopleApi";

export const getPeople = (page, gender) => {

    return async (dispatch, getState) => {
        // Inicia el estado de carga
        dispatch(startLoadingPeople());

        try {

            const resp = await peopleApi.get(`/?page=${page}&results=10&gender=${gender}`);
            const data = resp.data.results;
            
            dispatch(setPeople({ people: data, page: page, gender: gender}));
            
        } catch (error) {
            // Manejo de errores
            console.error(error);
        }
    };
}