import data from "../data.js"
import React from "react"

export default function Generator(){
    let [meme,setmeme]=React.useState({
        top:"",
        bottom:"",
        img:""
    })

    function change(){
        const random=Math.floor(Math.random()*(data.length))
        const image=data[random].img
        setmeme(prev =>({
          ...prev,
          img:image
        }))
    }

    function changetexttop(event){
        setmeme(prev =>({
            ...prev,
            top:event.target.value
        }))
    }

    function changetextbottom(event){
        setmeme(prev=>({
            ...prev,
            bottom:event.target.value
        }))
    }

    return(
        <div className="container">
            <div className="row text-center my-5">
                <div className="col-sm-6">
                    <form className="form-group">
                        <input type="text" className="form-control" placeholder="Top Text" onChange={changetexttop}/>
                    </form>
                </div>
                <div className="col-sm-6">
                    <form className="form-group">
                        <input type="text" className="form-control" placeholder="Bottom Text" onChange={changetextbottom}/>
                    </form>
                </div>
            </div>
            <div className="container text-center mb-5 bg-dark text-light">
                <p className="h3 fw-light py-3">{meme.top}</p>
                <img style={{width:"50%",minWidth:"400px"}} src={meme.img}></img>
                <p className="h3 fw-light py-3">{meme.bottom}</p>
            </div>
            <div className="container text-center">
                <button onClick={change} className="btn btn-primary ">Get A New Meme Image</button>
            </div>
        </div>
    )
}