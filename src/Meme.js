import React from "react"
import './App.css'
import memesData from './memesData.js'

export default function Meme () {
    
    //const [memeImage, setMemeImage] = React.useState("")

    function getMeme () {
        // console.log(memesData.data.memes[Math.floor(Math.random()*100)].url)
        setMeme(prevState => ({...prevState, randomImage: allMemeImages[Math.floor(Math.random()*100)].url}))
    }

    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    //console.log(meme)

    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)

    return (
        <main>
            <div className='App-form'>
                <input className='App-form-input' type='text' placeholder='Top Text'></input>
                <input className='App-form-input' type='text' placeholder='Bottom Text'></input>
                <button className='App-form-button' onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <img className='App-form-img' src={meme.randomImage}/>
        </main>
    )
}