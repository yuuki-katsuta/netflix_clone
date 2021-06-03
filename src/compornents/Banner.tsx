import { requests } from '../request'
import axios from '../axios'
import { useState, useEffect } from 'react'
import './Banner.scss'

type movieProps = {
  title?: string
  name?: string
  orignal_name?: string
  backdrop_path?: string
  overview?: string
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({})
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.feachNetflixOriginals)
      const items = request.data.results
      //apiからランんダムで値を取得している
      setMovie(items[Math.floor(Math.random() * items.length - 1)])
      return items
    }
    fetchData()
  }, [])

  // descriptionの切り捨てよう関数
  const truncate = (str: any, n: number) => {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage:
          movie?.backdrop_path &&
          `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>
        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="Banner-fadeBottom" />
    </header>
  )
}
