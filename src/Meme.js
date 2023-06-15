import React from "react"
import './App.css'
//import memesData from './memesData.js'

export default function Meme () {
    
    //const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handleChange(event){
        const {value, name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage () {
        // console.log(memesData.data.memes[Math.floor(Math.random()*100)].url)
        setMeme(prevState => {
            return ({
                ...prevState, 
                randomImage: allMemeImages[Math.floor(Math.random()*100)].url
            })
        })
    }

    //console.log(meme)


    return (
        <main>
            <div className='App-form'>
                <input 
                    className='App-form-input' 
                    type='text' 
                    placeholder='Top Text'
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    className='App-form-input' 
                    type='text' 
                    placeholder='Bottom Text'
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className='App-form-button' 
                    onClick={getMemeImage}
                    >Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className='App-form-img' src={meme.randomImage}/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}