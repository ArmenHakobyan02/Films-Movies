import { ImArrowRight2 } from "react-icons/im"
import { FilmsList } from "../../FilmsList/FilmsList"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { NewfilterInCattegory } from "../../../utils"
import style from "../NewStyles/New.module.css"


export const NewSeryal = () => {
  
  const { data } = useSelector(({ FilmsReducer }) => FilmsReducer)
  const items = NewfilterInCattegory(data, "Սերիալ")

  return (
    <div className={style.NewMovies_App}>
      <div className={style.NewMovies_box_Name}>
        <Link to={"/serial"} className={style.NewMovies_box_title}>
          Նոր Սերիալ
          <ImArrowRight2 />
        </Link>
      </div>
      <FilmsList data={items} />
    </div>
  )
}

