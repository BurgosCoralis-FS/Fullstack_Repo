const TeamList = ({ teams, _id, editTeam, removeTeam }) => {
    return (
        <>
            {teams.map(team => (
                <article key={team._id} style={styles.card}>
                    <p style={styles.text}>Name: {team.name}</p>
                    <p style={styles.text}>Country: {team.country}</p>
                    <button onClick={() => removeTeam(team._id)} style={styles.button}>Delete</button>
                </article>
            ))}
        </>
    )
}

export default TeamList;

const styles = {
    card:{
        background: 'black',
        color: 'rgb(71, 150, 77)',
        width: 'auto',
        borderRadius: '8px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, 0.1)',
        marginBottom: '5%',
        height: 'auto'
    },
    text:{
        margin: '5%',
        fontSize: '20px',
        padding: '2%'
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