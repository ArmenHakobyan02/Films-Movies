import { Link, NavLink } from "react-router-dom"
import "./Nav.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetItemFilms, } from "../../redux/FimlsReducer/FilmsReducer"
import { DomName, PostRequire } from "../../utils"

export const Nav = () => {
    const [FilmName, SetFilmName] = useState("")
    const dispatch = useDispatch()
    const { data } = useSelector(({ FilmsReducer }) => FilmsReducer)

    const ItemToClcik = (item) => {
        PostRequire(item)
        dispatch(GetItemFilms())
        SetFilmName("")
    }
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#242227" }} >
            <div className="container" >
                <Link className="navbar-brand text-white" to="/">Films Movies</Link>
                <button className="navbar-toggler bg-light"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white" aria-current="page" to={"/films"}>Ֆիլմեր</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/serial"}>Սերիալներ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to={"/multfilm"}>Մուլտֆիլմեր</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to={"/hayeren"}>Հայերեն</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Որոնում"
                            aria-label="Search"
                            onChange={(e) => SetFilmName(e.target.value)}
                            value={FilmName} />
                    </form>
                    {FilmName ?
                        <div className="DropDiv me-2">
                            <ul>
                                {data.filter((el) => el.Name.join(" ").toLowerCase().includes(FilmName.trim().toLowerCase()))
                                    .map((item, i) => {
                                        return i < 10 ? (
                                            <li key={item.id} onClick={() => ItemToClcik(item)}>
                                                <Link to={DomName(item)} >
                                                    {item.Name[0]}
                                                    <span>({item.Name[2]} {item.collector[0]} {item.year})</span>
                                                </Link>
                                            </li>
                                        ) : null
                                    })
                                }
                            </ul>
                        </div>
                        : null
                    }
                </div>
            </div>
        </nav>
    )
}
