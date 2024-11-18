export default function Personne(props){
    console.log(props)
    return <div>
        <p>Bienvenue {props.data.name}</p>
    </div>
}