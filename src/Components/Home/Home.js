import { Header } from "../Header/Header"
import { NewArmeniaMovie } from "../NewMovies/NewArmeniaMovie/NewArmeniaMovie"
import { NewFilms } from "../NewMovies/NewFilms/NewFilms"
import { NewMultFilm } from "../NewMovies/NewMultFilm/NewMultFilm"
import { NewSeryal } from "../NewMovies/NewSeryal/NewSeryal"

export const Home = () => {
  return (
    <>
      <Header />
      <NewFilms />
      <NewSeryal />
      <NewMultFilm />
      <NewArmeniaMovie />
    </>
  )
}

