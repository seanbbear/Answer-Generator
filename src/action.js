const axios = require('axios');
export const submitStart = () => {
    return {
        type: "SUBMIT_START"
    }
}

export const submitEnd = () => {
    return {
        type: "SUBMIT_END"
    }
}

export const submitToServer = (context,question) => {
    console.log(context)
    console.log(question)
    return (dispatch) => {
        dispatch(submitStart())
        
        var apiout = context+'[Question]'+question 
        
        axios.get('https://c377acfc.ngrok.io/api/qa?input='+apiout)
                .then((res) => {
                    console.log("......")
                    var resData = res.data
                    // console.log(apiData)
                    dispatch({
                        type:"SUBMIT_TO_SERVER",
                        resData
                    })

                })
                .catch((error) => {
                    console.log(error)
                    // console.log('api error')
                })
                .then(() => {
                    dispatch(submitEnd())
                })

    }
}