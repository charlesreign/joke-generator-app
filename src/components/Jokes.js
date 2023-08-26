import {useEffect, useState, React} from 'react'
import spinner from "../assets/spinner1.jpg"

const Jokes = () => {

    const [jokes, setJokes] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const url = "https://api.chucknorris.io/jokes/random"

    const get_joke = ()=>{
        setIsLoading(true)
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setJokes(data)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        get_joke()
    }, [])

    return (
        <section className="--flex-center --100vh --bg-primary">
            <div className="container --card --bg-light --p">
                <h2>Random Jokes Generator</h2>
                <div className="--line"></div>
                {isLoading ? (
                    <div className="--center-all">
                        <img src={spinner} alt="loading" width={100}/>
                    </div>
                ) : (
                <>
                <h4>Joke id: {jokes.id}</h4>
                <p>{jokes.value}</p>
                </>)
                }
                <br />
                <button className="--btn --btn-primary" onClick={get_joke}>Generate Joke</button>
            </div>
    </section>
    )
}

export default Jokes
