import Personne from './components/Personne.jsx'
import Button from './components/Button.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import MahJong from './TP  Mah-jong/MahJong.jsx'
import Fruit from './TP Liste de fruit/Fruit.jsx'
import Base from './TP Base React/Base.jsx'


export default function App(){

    return ( 
        <div>
            <nav>
                <ul>
                    <li>
                        {/* <Route path="/"></Route> */}
                        <Link to="/base">Base</Link>
                        <Link to="/fruits">Fruit</Link>
                        <Link to="/mah-jong">Mah-jong</Link>

                    </li>
                </ul>
            </nav>

            <Routes>
                {/* <Route path="/"></Route> */}
                <Route path="/base"element={<Base />}></Route>
                <Route path="/fruits" element={<Fruit />}></Route>
                <Route path="/mah-jong" element={<MahJong />}></Route>
            </Routes>

        </div>
    )
}