import {createStore} from 'redux';
import {favoriteActivitiesReducer} from '../reducers/favoriteActivitiesReducer';


const store=createStore(favoriteActivitiesReducer,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;