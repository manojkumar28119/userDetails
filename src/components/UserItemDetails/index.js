

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
  

const UserItemDetails = (props) => {
    const {match} = this.props 
    const {params} = match 
    const {id} = params

    const userDetails = userDetailsList.filter((each) => each.id === id)
    
    const {username,email,created_at,profile} = userDetails 
    
    

    return (
        <div>
            <div>
                <p>Name</p>
                <p>{username}</p>
            </div>
            <div>
                <p>email</p>
                <p>{email}</p>
            </div>
            <div>
                <p>created_at</p>
                <p>{created_at}</p>
            </div>
        </div>
    )
}


export default UserItemDetails