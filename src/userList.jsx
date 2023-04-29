import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./store/usersReducer"
export default UserList = () => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={e => dispatch(fetchUsers())}>Get Users</button>
            {users.map( u => <li>{u.name}</li>)}
        </>
    )
}