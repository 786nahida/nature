import React, { useState } from 'react'
import Image from '../Image/photo.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }

    return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" style={{ height: '200px', width: '300px'}}/> <br />
                <p>ALLAH is the creator</p>
                <p>Nature photography is a wide range of photography taken<br></br>
                outdoors and devoted to displaying natural elements such <br></br>
                as landscapes, wildlife, plants, and close-ups of natural<br></br>
                scenes and textures.The beauty of nature lies in its freshness,<br></br>
                openness, slow breezeand the warm sun – relief for our brains. <br></br>
                Nature is made ofeverything we see around us the trees, flowers,<br></br> 
                plants, animals, sky,mountains, forests and more. We find many colors <br></br>
                in nature which make the Earth beautiful. </p>
                <p>likes: {likes}</p>
                
            
                {/* destructuring */}
                <button onClick={count}>Like</button>
                
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/shorts/Q5cAkDDswI8?feature=share'} height={200} controls />
                <div>
                    <p>Beauty of Nature </p>
                    <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
                </div>
            </div>
        </div>
    )
}
export default Body