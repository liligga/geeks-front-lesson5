import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './store/usersReducer'


function App() {
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    dispatch(fetchUsers())
  }
  return (
    <>
      <button onClick={onSubmit}>Показать пользователей</button>
      {users && 
        <>
          <h5>Пользователи</h5>
          <ul>{users.map(u => 
                          <li key={u.id}>{u.name}</li>
            )}</ul>
        </>
      }
    </>
  )
}

export default App
