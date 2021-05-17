import React, { Component } from 'react'
class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"https://i.imgflip.com/54q23u.jpg",
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then(response=>{
            const{memes}=response.data
            console.log(memes[0])
            this.setState({allMemeImgs:memes})
        })
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })

    }
    handleSubmit(event){
        event.preventDefault()
        const randNum=Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randMeme=this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randMeme})
    }
    render(){
        return(
            <div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter Text:</h3>
                    <label>Top Text: 
                   <input className="text" type="text" name="topText" onChange={this.handleChange} placeholder="Top Text" value={this.state.topText}></input> 
                    </label>
                    <br></br>
                    <label>
                     Bottom Text: 
                   <input className="text" type="text" name="bottomText" onChange={this.handleChange} placeholder="Bottom Text" value={this.state.bottomText}></input> 
                    </label>
                    <br></br>
                <button>Generate</button>
                </form>
            </div>
            <div className="container">
                <img src={this.state.randomImg} className="image2" alt="meme"></img>
                <h2 className="top">{this.state.topText} </h2>
                <h2 className="bottom">{this.state.bottomText} </h2>

            </div>
</div>
        )
    }
}

export default MemeGenerator;
