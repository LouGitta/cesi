import Personne from './components/Personne.jsx'
import Button from './components/Button.jsx'


export default function App(){
    const personnes = [
        {
            name: 'John',
            age: 13
        },
        {
            name: 'Jofsdfsdffsdhn',
            age: 15
        },
        {
            name: 'dfsfsdfsd',
            age: 2654587
        },
    ]

    return ( 
        <>
            <div>App</div>
            {personnes.map(personne => <Personne data={personne}></Personne>)}
            <Button text={"Valider"}></Button>
            <Button text={"Annuler"}></Button>
        </> 
    )
}