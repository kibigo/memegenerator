import React, { useState } from "react";


function Meme() {

   
    const [randomImage, setRandomImage] = useState('https://img.freepik.com/free-vector/cute-cool-baby-holding-teddy-bear-doll-cartoon-vector-icon-illustration-people-holiday-isolated_138676-5356.jpg?size=626&ext=jpg')
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/memes')
        .then((response) => response.json())
        .then((data) => {
            const index = Math.floor(Math.random() * data.length)

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


                {randomImage ? 
                <img src={randomImage} className="meme-image"></img>
                : <h1>Image not found</h1>
                 }
            </form>
        </div>
    )
}

export default Meme