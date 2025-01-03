import { useState } from "react"

export default function Team (){
    const teamStyle = {
        border : '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadious: '15px'
    }

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newteam = team + 1;
        setTeam(newteam)
    }
    const handleRemove = () => {
        setTeam(team -1)
    }
    return(
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAdd}>Add player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}