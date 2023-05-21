import "./YourLikeit.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"

import { getFimls } from "../../redux/FimlsReducer/FilmsReducer"
import { FilmsList } from "../FilmsList/FilmsList"

export const YourLikeit = () => {
  const dispatch = useDispatch()
  const { data, dataItem } = useSelector(({ FilmsReducer }) => FilmsReducer)

  const random = useMemo(() => Math.floor(Math.random() * data?.length - 6), [])
  const items = data.filter((el, i) => el.id !== dataItem.id && i >= random)

  useEffect(() => {
    dispatch(getFimls())
  }, [])

  return (
    <div className="YourLikeit_App">
      <div className="YoruLikeit_box_title">
        Ձեզ դուր կգա:
      </div>
      <FilmsList data={items} />
    </div>
  )
}


