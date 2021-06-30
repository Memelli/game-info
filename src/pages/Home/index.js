import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import ReactLoading from 'react-loading'


const Home = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState('https://api.rawg.io/api/games?key=02a5ef1857044c319bfbc9aba060f947')

    useEffect(() => {
        const fetchData = async () => {
            const url = page
            const result = await axios.get(url)
                .then(resp => setGames(resp.data))
                .then(() => setLoading(false))
                .catch(error => console.log(error))

            return result
        }
        fetchData();
    }, [page]);

    return (
        <div className="h-full w-full flex flex-col justify-center wrap items-center">
            <div className="px-2 h-auto flex w-full justify-center flex-col lg:flex-row xl:flex-row flex-wrap items-center shadow-md">
                {loading ? <div className="h-screen w-full flex flex-row justify-center wrap items-center">
                    <ReactLoading type={'spin'} color={'black'} height={'100px'} width={'100px'} />
                </div> :
                    games.results.map((game, index) => (
                        <Link key={game.id} to={`/game/${game.slug}`}>
                            <Card
                                color={game.dominant_color}
                                key={index}
                                title={game.name.slice(0, 20)}
                                platform={game.parent_platforms}
                                rating={game.rating}
                                image={game.background_image}
                                type={game.genres.slice(0, 2).map((type) => (<span className="h-auto w-auto rounded bg-blue-900 text-white p-1 mr-1">{type.name}</span>))}
                            />
                        </Link>
                    ))
                }


            </div>
            <div className="m-4 flex justify-evenly w-full">
                {games.previous ?
                    <button className="p-2 border-1 rounded bg-gray-300" onClick={() => { setPage(games.previous) }}>Página Anterior</button> : null}
                {games.next ?
                    <button className="p-2 border-1 rounded bg-gray-300" onClick={() => { setPage(games.next) }}>Próxima página</button> : null}
            </div>
        </div>
    )
}

export default Home
