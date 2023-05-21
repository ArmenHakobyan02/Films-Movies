import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { ImArrowRight2 } from "react-icons/im"

import { FilmsList } from "../../FilmsList/FilmsList"

import style from "../NewStyles/New.module.css"

export const NewArmeniaMovie = () => {

  const { data } = useSelector(({ FilmsReducer }) => FilmsReducer)
  const items = data?.filter(({ translation }) => translation[0] === "Հայերեն")

  return (
    <div className={style.NewMovies_App}>
      <div className={style.NewMovies_box_Name}>
        <Link to={"/hayeren"} className={style.NewMovies_box_title}>
          Հայերեն Թարգմանությամբ
          <ImArrowRight2 />
        </Link>
      </div>
      <FilmsList data={items} />
    </div>
  )
}


