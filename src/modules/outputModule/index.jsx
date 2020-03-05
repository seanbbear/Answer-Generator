import React, { Component } from 'react'
import { connect } from 'react-redux'
export class index extends Component {
    render() {
        let { loadingState,apiData={}} = this.props.state
        console.log("loadingState")
        console.log(loadingState)
        console.log("apiData:")
        console.log(apiData)
        // var outData = apiData.map((apiData)=>apiData.tags)
        let { tags={} } = apiData,
        { default:df=[] } = tags 
        var showData = df.map((df)=>df)
        return (
            <div className="container">
                {loadingState === true ?
                    <h3>loading</h3>
                    :
                    <div>
                        <h3>Result</h3>
                        {/* {df.map((a)=>{
                            return <p>{showData}</p>
                        })}
                        <p>-------------</p> */}
                        <p>{showData[0]}</p>
                    </div>
                    
                }
            </div>
        )
    }
}

let mapStateToPops = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToPops)(index)
