import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { AiFillStar } from 'react-icons/ai'
import moment from 'moment'

const Game = () => {
    let { id } = useParams()
    let history = useHistory()
    const [game, setGame] = useState([])
    const [video, setVideo] = useState([])
    const [screen, setScreen] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingVideo, setLoadingVideo] = useState(true)

    useEffect(() => {
        const fetchGame = async () => {
            const url = `https://api.rawg.io/api/games/${id}?key=02a5ef1857044c319bfbc9aba060f947`
            const urlSS = `https://api.rawg.io/api/games/${id}/screenshots?key=02a5ef1857044c319bfbc9aba060f947`
            const urlVideo = `https://api.rawg.io/api/games/${id}/movies?key=02a5ef1857044c319bfbc9aba060f947`
            const result = await axios.all([
                axios.get(url),
                axios.get(urlSS),
                axios.get(urlVideo)
            ])
                .then(axios.spread((dataRes, screenRes, videoRes) => {
                    setGame(dataRes.data)
                }))
                .then(() => setLoading(false))
                .catch(error => console.log(error))
            return result
        }
        
        const fetchVideo = async () => {
            const url = `https://api.rawg.io/api/games/${id}/movies?key=02a5ef1857044c319bfbc9aba060f947`
            const result = await axios.get(url)
                .then((response) => {
                    setVideo(response.data.results)
                })
                .then(() => setLoadingVideo(false))
                .catch(error => console.log(error))
            return result
        }
        
        const fetchScreen = async() => {
            const url = `https://api.rawg.io/api/games/${id}/screenshots?key=02a5ef1857044c319bfbc9aba060f947`
            const result = await axios.get(url)
                .then((response) => {
                    setScreen(response.data.results)
                })
                .catch(error => console.log(error))
            return result
        }
        fetchGame()
        fetchVideo()
        fetchScreen()
    }, [id])

    

    function backHome() {
        history.push("/sobre")
    }

    return (
        <>
            {loading ? <div className="w-full h-screen flex justify-center items-center"><ReactLoading type={'spin'} color={'black'} height={'100px'} width={'100px'} /></div> :
                <div className="h-full w-full flex flex-row justify-center bg-white wrap">
                    <div className="rounded mt-3 text-black h-full flex w-full flex-col lg:flex-row xl:flex-row flex-wrap items-center">
                        
                        {/* info */}
                        <div className="w-full lg:mx-10 flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2 xl:w-1/2">
                                <img src={game.background_image} className="lg:h-96 h-80 w-full rounded shadow-md" alt={game.name} /></div>
                            <div className="flex justify-center items-center lg:w-1/2 w-full flex-col">
                                <div className="w-full my-2 mx-10 flex flex-col text-center justify-center items-center">
                                    <span className="text-3xl">{game.name}</span>
                                    <div className="flex flex-row">
                                        <small>{game.developers.map((dev) => dev.name)} | Release Date: {moment(game.released).format('DD/MM/YYYY')}</small>
                                    </div>
                                    <div>
                                        {game.esrb_rating.name}
                                    </div>
                                </div>
                                <div className="w-full px-10 my-2 mx-10 flex items-center justify-center">

                                    <div>
                                        {game.metacritic < 40 ? <span className="rounded p-3 bg-red-500 text-white">{game.metacritic}</span> :
                                            game.metacritic < 60 ? <span className="rounded p-3 bg-yellow-400 text-white">{game.metacritic}</span> :
                                                game.metacritic < 100 ? <span className="rounded p-3 bg-green-400 text-white">{game.metacritic}</span> :
                                                    'Sem nota.'
                                        }
                                    </div>
                                    <div className="ml-5"><span className="rounded p-1 flex flex-row items-center justify-center text-white bg-blue-500">{game.rating} {'  '} <AiFillStar className="text-yellow-500 text-2xl" /></span></div>
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div className="flex flex-col my-4 rounded shadow-md p-2 mx-10">
                        <div className="text-3xl text-center font-thin">
                            Description
                        </div>
                        <div className="mt-3" dangerouslySetInnerHTML={{ __html: game.description }}>
                        </div>
                        </div>

                        {/* medias */}
                        <div className="my-2 flex flex-col lg:flex-row xl:flex-row rounded h-auto lg:w-full p-2 mx-10">
                            {/* trailer */}
                            <div className="w-full lg:w-1/2 mt-5 flex flex-col text-center h-auto">
                                <span className="font-thin text-3xl">Trailer</span>
                                <div className="mt-3">
                                {video.length > 0 ? video.slice(0, 1).map(url => { console.log(url);  return(
                                    <video className="rounded" controls>
                                        <source src={url.data.max} type="video/mp4" />
                                    </video>
                                )}) : <div className="w-full my-10 flex justify-center items-center">No videos available.</div> }</div>
                            </div>
                            {/* ss */}
                            <div className="w-full lg:w-1/2 text-3xl text-center mt-5 h-auto">
                                <span className="font-thin text-3xl">Screenshot</span>
                                <div className="flex flex-row mt-3 flex-wrap">
                                    {screen.length > 0 ? screen.slice(0, 1).map(ss => {return(
                                        <img className="rounded h-25 w-25" src={ss.image} alt={ss.id} />
                                    )}) : 'No SS available'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Game
