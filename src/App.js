import { useRoutes } from 'react-router-dom';
import { Nav } from "./Components/Nav/Nav"
import { Home } from './Components/Home/Home';
import { Footer } from './Components/Footer/Footer';

import { All_Films } from './Components/All_Movies/Films/All_Films';
import { All_Serial } from './Components/All_Movies/Serial/All_Serial';
import { All_Hayeren } from './Components/All_Movies/Hayeren-Movies/All_Hayeren';
import { All_MultFilms } from './Components/All_Movies/All_MultFilms/All_MultFilms';

import { FilmsItem } from './Components/FimlsItem/FilmsItem';

function App() {
  const routers = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/films", element: <All_Films /> },
    { path: "/serial", element: <All_Serial /> },
    { path: "/multfilm", element: <All_MultFilms /> },
    { path: "/hayeren", element: <All_Hayeren /> },
    { path: "/:collector/:id", element: <FilmsItem /> },
  ])
  return (
    <>
      <Nav />
      {routers}
      <Footer />
    </>
  )
}

export default App;
