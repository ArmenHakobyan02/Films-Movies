import { ImArrowRight2 } from "react-icons/im"
import { useSelector } from "react-redux"
import { NewfilterInCattegory } from "../../../utils"
import { FilmsList } from "../../FilmsList/FilmsList"
import { Link } from "react-router-dom"
import style from "../NewStyles/New.module.css"


export const NewMultFilm = () => {

    const {data} = useSelector(({ FilmsReducer }) => FilmsReducer)
    const items = NewfilterInCattegory(data, "մուլտֆիլմ")

    return (
        <div className={style.NewMovies_App}>
            <div className={style.NewMovies_box_Name}>
                <Link to={"/multfilm"} className={style.NewMovies_box_title}>
                    Նոր մուլտֆիլմ
                    <ImArrowRight2 />
                </Link>
            </div>
            <FilmsList data={items} />
        </div>
    )
}
