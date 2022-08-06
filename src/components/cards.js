import React from 'react'

export default function cards(props) {
    let mystyle = {
        width: 250,
        margin: 30,
        border: '2px solid',
        borderColor:props.mode === 'light' ? 'black' : 'white',
        display: 'inline-block',
    }
    let textStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : 'black', 
        color: props.mode === 'light' ? 'black' : 'white',
    }
    return (
        <>
            <div className="card my-4" style={mystyle}>
                <img src={`${props.imgName}`} className="card-img-top" alt="..." />
                <div className={`card-body bg-${props.mode}`} style={textStyle}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={`${props.imgName}`} className={`btn btn-primary bg-${props.mode==='primary'?'black':'primary'}`}>Go somewhere</a>
                </div>
            </div>
        </>
    )
}
