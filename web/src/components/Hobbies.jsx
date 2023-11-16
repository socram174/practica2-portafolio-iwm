
const Hobbies = ({hobbies}) => {

    console.table(hobbies);

    if (!hobbies) {
        return <p>No hobbies available</p>;
    }
    
    return (
        <>
            <h1>Hobbies</h1>
            {hobbies.map(hobby => <li key={hobby}>{hobby.title}</li>)}


        </>
    )
}

export default Hobbies;