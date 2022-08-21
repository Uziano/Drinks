import { ADD_PLACE, LOAD_PLACES } from '../store/place.actions';
import Place from '../models/Place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.payload.id,
                action.payload.title,
                action.payload.image,
                action.payload.lat,
                action.payload.lng,
                action.payload.address,
            );
            return {
                ...state,
                places: state.places.concat(newPlace),
            };
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map(item => new Place(
                    item.id,
                    item.title,
                    item.image,
                    item.lat,
                    item.lng,
                    item.address,
                ))
            }
        default:
            return state;
    }
}