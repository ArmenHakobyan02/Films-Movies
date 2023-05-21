import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { ImArrowRight2 } from "react-icons/im"

import { FilmsList } from "../../FilmsList/FilmsList"
import { NewfilterInCattegory } from "../../../utils"

import style from "../NewStyles/New.module.css"

export const NewFilms = () => {
  const { data } = useSelector(({ FilmsReducer }) => FilmsReducer)
  const items = NewfilterInCattegory(data, "Ֆիլմ")

  return (
    <div className={style.NewMovies_App}>
      <div className={style.NewMovies_box_Name}>
        <Link to={"/films"} className={style.NewMovies_box_title}>
          Նոր Ֆիլմեր
          <ImArrowRight2 />
        </Link>
      </div>
      <FilmsList data={items} />
    </div>
  )
}

