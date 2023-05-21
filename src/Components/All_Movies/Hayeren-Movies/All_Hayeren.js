import { useSelector } from "react-redux"
import { FilmsList } from "../../FilmsList/FilmsList"
import AllStyle from "../All_Style/All.module.css"


export const All_Hayeren = () => {

  const { data } = useSelector(({ FilmsReducer }) => FilmsReducer)
  const items = data?.filter(({ translation }) => translation[0] === "Հայերեն")

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


