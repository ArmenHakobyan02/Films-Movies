import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { BsFillCameraReelsFill } from "react-icons/bs"

import { DomName, PostRequire } from "../../utils"

import { getFimls } from "../../redux/FimlsReducer/FilmsReducer"
import "./FilmsList.css"

export const FilmsList = ({ data = [], count = 6 }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFimls())
  }, [])

  return (
    <div className='FilmsList-App'>
      <div className='container'>
        {
          data.map((item, i) => {
            return i < count ? (
              <div key={item.id} className="FilmsList-items">
                <Link to={DomName(item)}
                  onClick={() => PostRequire(item)} >
                  <div className="FilmsList_camera_icon">
                    <BsFillCameraReelsFill />
                    <span>{item.collector[0]}</span>
                  </div>
                  <div className="FilmsList_Play">
                    <div></div>
                  </div>
                  {item.translation.map((el, i) => el == "Հայերեն" ? <div key={i} className="FilmsList_flag_hayeren"></div> : null)}
                  <img src={item.img} alt={item.Name} className="FilmsList_imges" />
                  <h6>{item.Name[0]}</h6>
                  <div className="FilmsList_short_subtitle">{item.Name[1]}</div>
                  <div
                    className="FilmsList_Rating"
                    style={Math.floor(item.rating) < 5 ? { backgroundColor: "#A93333" } :
                      Math.floor(item.rating) >= 7 ? { backgroundColor: "#00A740" } : null}>
                    {item.rating}
                  </div>
                </Link>
                <div className="FilmsList_short_bottom_year">{item.year}</div>
              </div>
            ) : null
          })
        }
      </div>
    </div>
  )
}

