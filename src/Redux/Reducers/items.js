import { ItemsActions } from '../Actions/items';


const INITIAL_STATE = {
    myItems: ['nachos', 'burritos', 'hotdogs'],
    newItem: ''
};

export function reducer(state= INITIAL_STATE, action){
    console.log(action);
    switch(action.type){
        case ItemsActions.ADD_ITEM:
            return {
                ...state,
                myItems: [...state.myItems, state.newItem],
                newItem: ''
            }
        case ItemsActions.CLEAR:
        return {
            ...state,
            myItems: ['']
        };
        case ItemsActions.SET_NEW_ITEM_NAME:
        return {
            ...state,
            newItem: action.value
        };
        default:
            return state;
    }
};


export default { items: reducer };