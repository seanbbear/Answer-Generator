let defaultState={
    loadingState:false
}

const AppState = (state = defaultState, action) => {
    console.log(action)
    switch(action.type){
        case 'SUBMIT_TO_SERVER':
            return Object.assign({},state,{apiData:action.resData})
        case 'SUBMIT_START':
            return Object.assign({},state,{loadingState:true})
        case 'SUBMIT_END':
            return Object.assign({},state,{loadingState:false})
        default:
            return state
    }
}

export default AppState