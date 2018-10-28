export function tests(state = [], action) {
    switch (action.type) {
        case 'DATATEST_SUCCESS':
            return action.items;
        default:
            return state;
    }
}