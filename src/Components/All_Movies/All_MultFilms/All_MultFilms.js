import { useSelector } from "react-redux"
import AllStyle from "../All_Style/All.module.css"
import { FilmsList } from "../../FilmsList/FilmsList"
import { AllfilterInCategory } from "../../../utils"

export const All_MultFilms = () => {

    const { data } = useSelector(({ FilmsReducer }) => FilmsReducer)
    const items = AllfilterInCategory(data, "մուլտֆիլմ")

    return (
        <div className={AllStyle.Header_App}>
            <section className={AllStyle.title}>
                <h1>Դիտել ֆիլմեր օնլայն HD որակով</h1>
                <button className="btn">Click Me</button>
            </section>
            <FilmsList data={items} count={items.length} />
        </div>
    )
}

