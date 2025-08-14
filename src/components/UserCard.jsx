function UserCard ({name, email, avatar, onDelete, id}){
    return(
        <div className="card container">
            <img src={avatar} alt={name} style={{borderRadius : "50%"}} />
            <h3>{name}</h3>
            <p>{email}</p>
            <button onClick={() =>onDelete(id)}>Delete</button>
        </div>
    )
}
export default UserCard;