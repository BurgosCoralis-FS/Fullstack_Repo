const PlayerList = ({ players, _id, editPlayer, removePlayer }) => {
    return (
        <>
        {/* {console.log(players,)} */}
            {players.map(player => (
                <article key={player._id} style={styles.card}>
                    <p style={styles.text}>Name: {player.name}</p>
                    <p style={styles.text}>Username: {player.username}</p>
                    <p style={styles.text}>Age: {player.age}</p>
                    <p style={styles.text}>Birthday: {player.birthday}</p>
                    <p style={styles.text}>Team: {player.team}</p>
                    <p style={styles.text}>Game: {player.game}</p>
                    <p style={styles.text}>Role: {player.role}</p>
                    <p style={styles.text}>Country: {player.country}</p>
                    <button onClick={() => removePlayer(player._id)} style={styles.button}>Delete</button>
                </article>
            ))}
        </>
    )
}

export default PlayerList;

const styles = {
    card:{
        background: 'black',
        color: 'rgb(71, 150, 77)',
        width: 'auto',
        borderRadius: '8px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, 0.1)',
        marginBottom: '5%'
    },
    text:{
        marginLeft: '5%',
        fontSize: '20px',
    },
    button: {
        background: 'black',
        color: 'rgb(71,150,77)',
        width: 'auto',
        borderRadius: '8px',
        padding: '2%',
        marginLeft: '80%',
        marginBottom: '2%'
    }
}