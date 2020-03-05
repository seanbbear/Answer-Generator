import React, { Component } from 'react'
import { submitToServer } from '../../action.js'
import { connect } from 'react-redux'
import './index.css'

class View extends Component {
    constructor(props){
        super(props)
        this.state = {
            context:'',
            question:''
        }
        this.submit=this.submit.bind(this)
    }

    componentDidMount(){
        console.log("mount")
        let { state } = this.props,
        { dfContext2="截至美東時間4日晚間10點止，全美國的新型冠狀病毒疫情累積153例確診，其中11人死亡。死亡通報目前集中在美國西岸，其中10死發生在華盛頓州的西雅圖都會區；另外1死則來自加州北部的普萊瑟郡（Placer County）——由於此例是加州通報的「首宗死亡病例」，因此加州州長紐森（Gavin Newson，民主黨籍）遂於4日正式宣布加州進入「防疫緊急狀態」。" } = state
        console.log(state)
        this.setState({
            context:dfContext2
        })

    }

    submit(){
        let{ context,question }=this.state
        let {dispatch} = this.props
        console.log(context,question)
        console.log(dispatch)
        dispatch(submitToServer(context,question))
    }
    render() {
        return (
            <div id="InputModule">
                <h1 className="text-center">Answer Generator</h1>
                <div className="container">
                    <div className="text">
                        Context
                    </div>
                    
                
                    <textarea 
                        value={this.state.context}
                        onChange={(e)=>{
                        this.setState({
                            context:e.target.value
                        })
                    }} className="context" cols="" rows=""></textarea>
                    <br />
                    
                    <div className="text">
                        Question
                    </div>
                    <input type="text" className="question" onChange={(e)=>{
                        this.setState({
                            question:e.target.value
                        })
                    }}/>
                    <button type="button" className="btn btn-primary "   onClick={this.submit}>submit</button>
                    
                </div>
            </div>
        )
    }
}

let mapStateToPops = (state)=>{
    return{
        state:state
    }
}

export default connect(mapStateToPops)(View)
