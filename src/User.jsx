export default function User({user}) {
    return (
        <div className="box">
            <h2>User's name : {user.name}</h2>
            <p>User's email : {user.email}</p>
        </div>
    )
}