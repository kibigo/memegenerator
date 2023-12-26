import React, { useState } from "react";


function Meme() {

    const [randomIndex, setRandomIndex] = useState()
    const [randomImage, setRandomImage] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/memes')
        .then((response) => response.json())
        .then((data) => {
            const index = Math.floor(Math.random() * data.length)
            setRandomIndex(index)
            setRandomImage(data[index].url)
        })
        .catch((error) => {
            console.log('This is the error: ', error)
        })

    }



    return (
        <div className="meme">
            <form className="form">
                <div>
                    <label className="form-label">Top text</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Shut up"
                    />
                </div>

                <div>
                    <label className="form-label">Bottom Text</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="and take my money"
                    />
                </div>

                <button type="submit" className="form-button" onClick={handleClick}>Get a new meme image</button>

                <p>Random Index: {randomIndex}</p>
                <img src={randomImage}></img>
            </form>
        </div>
    )
}

export default Meme