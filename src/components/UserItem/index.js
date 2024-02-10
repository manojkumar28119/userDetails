import {Link} from "react-router-dom"


const UserItem = (props) => {
     const {item} = props
     console.log(item)
     const {username,email,created_at,profile,id} = props 
 
    return (
        <div className="user-info">
            <input type="checkbox" className="detail"   /> 
            <Link to = {`user/${id}`} className="detail" >{username}</Link>
            <p className="detail" >{email}</p>
            <p className="detail" >{created_at}</p>
            <p className="detail" >age</p>
            <p className="detail" >country</p>
        </div>
    )
}


export default UserItem
