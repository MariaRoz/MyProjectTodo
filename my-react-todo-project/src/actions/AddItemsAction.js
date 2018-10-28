import {GraphQLClient} from "graphql-request";
const gql = new GraphQLClient("http://localhost:4000/graphql", { headers: {} })

export function AddItems() {
    return dispatch => {
        gql.request( `query getTaskById($taskId:String!){
  getTaskById (_id:$taskId){
    text
    id
  }
}`, {taskId: "5bcf41fcff372b15c9e98fbc"})
            .then((items) => {
                console.log(items)
                dispatch(success(items))
            })
    };
}


// function errored(bool) {return {type: 'HAS_ERRORED', hasErrored: bool}}
// function isLoading(bool) {return {type: 'IS_LOADING', isLoading: bool}}
function success(items) {return {type: 'DATA_SUCCESS', items}}


