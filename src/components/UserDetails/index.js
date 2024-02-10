import { Component } from "react";
import UserItem from "../UserItem"
import "./index.css"

const userDetailsList = [
    {
      "id": 1,
      "username": "user1",
      "email": "user1@example.com",
      "created_at": "2024-02-09T00:00:00Z",
      "profile": {
        "first_name": "John",
        "last_name": "Doe",
        "age": 30,
        "country": "USA"
      }
    },
    {
      "id": 2,
      "username": "user2",
      "email": "user2@example.com",
      "created_at": "2024-02-09T00:00:00Z",
      "profile": {
        "first_name": "Jane",
        "last_name": "Smith",
        "age": 25,
        "country": "UK"
      }
    }
  ]
  

class UserDetails extends Component {

    render() {
        return (
            <div className="page">
                <h1 className="heading">User Details</h1>
                <div className="user-info">
                    <input type="checkbox" className="detail" />
                    <p className="detail" >username</p>
                    <p className="detail" >email</p>
                    <p className="detail" >created_at</p>
                    <p className="detail" >age</p>
                    <p className="detail" >country</p>
                </div>
                {userDetailsList.map((each) => <UserItem key = {each.id} item = {each} />)}
            </div>
        )
    }
}


export default UserDetails 

