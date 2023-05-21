import { Link, NavLink } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li><NavLink to={"/"}>Գլխավոր</NavLink></li>
          <li><NavLink to={"/films"}>Ֆիլմեր</NavLink></li>
          <li><NavLink to={"/serial"}>Սերիալներ</NavLink></li>
          <li><NavLink to={"/multfilm"}>Մուլտֆիլմեր</NavLink></li>
          <li><NavLink to={"hayeren"}>Հայերեն</NavLink></li>
        </ul>
        <div className="Footer-social_icons">
          <p>© 2023 Films.bz <br />support@films.bz</p>

          <Link to={"/"}><i className="socila-telgram"></i></Link>
          <Link to={"/"}><i className="socila-instagram"> </i></Link>
          <div className="Footer-right-bottom-div">18+</div>
        </div>
        <div className="Footer-text"><p>Films.bz - մենք լավագույնն ենք HD որակով ֆիլմերի և սերիալների աշխարհում:
          <br /> Գովազդների բովանդակության համար կայքը պատասխանատվություն չի կրում:</p></div>
      </div>
    </footer>
  )
}

