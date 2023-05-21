import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import "./FimlsItem.css"

import { AiFillCloseCircle } from "react-icons/ai"
import { GrYoutube } from "react-icons/gr"


import { Loading } from "../Loading/Loading"
import { GetItemFilms } from "../../redux/FimlsReducer/FilmsReducer"
import { YourLikeit } from "../YourLikeIt/YourLikeit"
import { useParams } from "react-router-dom"

export const FilmsItem = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [trailer, SetTrailer] = useState(false)
    const dispatch = useDispatch()

    const { dataItem } = useSelector(state => state.FilmsReducer)

    useEffect(() => {
        dispatch(GetItemFilms())

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);

    }, [id])

    if (!dataItem) return;
    return loading ? <Loading /> : (
        <div className="FimlsItem_App" >
            <div className="container" >
                <section className="FimlsItem_title">
                    <h1>{dataItem.Name[0]}</h1>
                    <div className="FimlsItem_Subtitle">
                        {dataItem.Name[1]}
                        <br />
                        <span>{dataItem.Name[2]}</span>
                    </div>
                </section>
                <div className="FimlsItem_Left">
                    <img src={dataItem.img} />
                    <button onClick={() => SetTrailer(true)}>
                        <GrYoutube />
                        Թրեյլեր
                    </button>
                </div>
                <div className="FimlsItem_Right">
                    <table >
                        <thead>
                            <tr>
                                <th>վարկանիշ:</th>
                                <td>{dataItem.rating}</td>
                            </tr>
                            <tr>
                                <th>տարի:</th>
                                <td><a href="">{dataItem.year}</a></td>
                            </tr>
                            <tr>
                                <th>երկիր:</th>
                                <td><a href="">{dataItem.country}</a></td>
                            </tr>
                            <tr>
                                <th>ժանր:</th>
                                <td>{dataItem.category.map((el, i) => {
                                    return <a href="" key={i} className="FilmsItem_category">{el},</a>
                                })}</td>
                            </tr>
                            <tr>
                                <th>տևողություն:</th>
                                <td>{dataItem.duration}</td>
                            </tr>
                            <tr>
                                <th>թարգման:</th>
                                <td>{dataItem.translation.map((el, i) => {
                                    return <span key={i} className="FilmsItem_category">{el}</span>
                                })}
                                </td>
                            </tr>
                            {dataItem.age ?
                                <tr>
                                    <th>տարիք:</th>
                                    <td>{dataItem.age}</td>
                                </tr>
                                : null}
                            <tr>
                                <th>հավաքացու:</th>
                                <td><a href="">{dataItem.collector[0]}</a></td>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="FimlsItem_Bottom">
                    <h2>Ինչի մասին է «{dataItem.Name[0]}» {dataItem.collector[0]}ը.</h2>
                    <div>{dataItem.about}</div>
                </div>

                <div className="FimlsItem_video_container_div">
                    <h2>{dataItem.Name[0]} - դիտել օնլայն </h2>

                  {/*   <iframe
                        width="100%"
                        height="500px"
                        src={dataItem.Video}
                        title={dataItem.about}
                    ></iframe>*/}
                </div> 
                <YourLikeit />
            </div>
            {trailer &&
                <>
                    <div className="Drop_Triler_Video"
                        onClick={() => SetTrailer(false)}
                        style={trailer ? { background: "#BDBDBD", opacity: 0.5 } : null}>
                        <AiFillCloseCircle />
                    </div>
                    <iframe
                        className="trailer_Video"
                        src={dataItem.trailer}
                        title={dataItem.about}
                    ></iframe>
                </>
            }
        </div>
    )
}

