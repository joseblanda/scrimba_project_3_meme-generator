import './App.css'
import memesData from './memesData.js'

export default function Meme () {
    
    function getMeme () {
        console.log(memesData.data.memes[Math.floor(Math.random()*100)].url)
    }

    return (
        <main>
            <div className='App-form'>
                <input className='App-form-input' type='text' placeholder='Top Text'></input>
                <input className='App-form-input' type='text' placeholder='Bottom Text'></input>
                <button className='App-form-button' onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <img className='App-form-img' src={memesData.data.memes[0].url}/>
        </main>
    )
}