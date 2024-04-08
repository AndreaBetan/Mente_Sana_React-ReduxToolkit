import { setPeople, startLoadingPeople } from "./appSlice"
import { peopleApi } from "../api/peopleApi";

export const getPeople = (page, gender, nationality) => {

    return async (dispatch, getState) => {
        // Inicia el estado de carga
        dispatch(startLoadingPeople());

        try {

            const resp = await peopleApi.get(`/?page=${page}&results=10&gender=${gender}&nat=${nationality}`);
            const data = resp.data.results;
      
            dispatch(setPeople({ people: data, page: page, gender: gender, nationality: nationality}));

        } catch (error) {
            // Manejo de errores
            console.error(error);
        }
    };
}
