export default function User({user}) {
    const {name,email} = user; //object destructuring
    return (
        <div className="box">
            <h2>User's name : {name}</h2>
            <p>User's email : {email}</p>
        </div>
    )
}