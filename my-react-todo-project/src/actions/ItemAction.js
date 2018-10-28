import {GraphQLClient} from "graphql-request";
const gql = new GraphQLClient("http://localhost:4000/graphql", { headers: {} })

export function itemsData(items) {
    return dispatch => {
        gql.request(`mutation createTask($text:String!){
            createTask(text:$text){
                text
            }
        }`, {text: items})
            .then((items) => {
                dispatch(success(items))
            })
    };
}

// function errored(bool) {return {type: 'HAS_ERRORED', hasErrored: bool}}
// function isLoading(bool) {return {type: 'IS_LOADING', isLoading: bool}}
function success(items) {return {type: 'DATATEST_SUCCESS', items}}

// export function getItems(items) {
//     return dispatch => {
//         dispatch(isLoading(true))
//         gql.request(`mutation createTask($text:String!){
//             createTask(text:$text){
//                 text
//             }
//         }`, {text: items})
//             .then((items) => {
//                 dispatch(success(items))
//                 dispatch(isLoading(false))
//             })
//             .catch(() => dispatch(errored(true)));
//     };
// }