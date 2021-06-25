import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import ReactLoading from 'react-loading'

const Home = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    /* const url = 'https://api.rawg.io/api/games?key=cdfcdbcf73a844e1baa170f37da06fd6'
    axios.get(url)
        .then(resp => setGames(resp.data.results))
        .catch(error => console.log(error))

    console.log(games) */

    console.log(games)

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://api.rawg.io/api/games?key=02a5ef1857044c319bfbc9aba060f947'
            const result = await axios.get(url)
                .then(resp => setGames(resp.data.results))
                .then(() => setLoading(false))
                .catch(error => console.log(error))

            return result
        }
        fetchData();
    }, []);

   /*  if (loading) {
        return (
            <div className="h-full w-full flex flex-row justify-center bg-blue-900 wrap items-center">
                <ReactLoading type={'spin'} color={'white'} height={'300px'} width={'300px'} />
            </div>
        )
    } */
    return (
        <div className="h-full w-full flex flex-row justify-center wrap items-center">
            <div className="px-2 h-auto flex w-full justify-center flex-col lg:flex-row xl:flex-row flex-wrap items-center shadow-md">
                {loading ? <div className="h-screen w-full flex flex-row justify-center wrap items-center">
                    <ReactLoading type={'spin'} color={'black'} height={'100px'} width={'100px'} />
                </div> :
                    games.map((game) => (
                        <Link to={`/game/${game.slug}`}>
                            <Card
                                color={game.dominant_color}
                                key={game.id}
                                title={game.name.slice(0, 20)}
                                platform={game.parent_platforms}
                                rating={game.rating}
                                image={game.background_image}
                                slug="gta-v"
                                type={game.genres.slice(0, 2).map((type) => (<span className="h-auto w-auto rounded bg-blue-900 text-white p-1 mr-1">{type.name}</span>))}
                            />
                        </Link>
                    ))

                }
            </div>
        </div>
    )
}

export default Home