import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({
    name: 'John',
    profession: 'Developer',
    address: {
      city: 'Portland',
    },
  })

  const onChangeName = (e) => {
    const newUser = {
      ...user,
      name: e.target.value,
    }
    setUser(newUser)
  }

  const onChangeCity = (e) => {
    const newUser = {
      ...user,
      address: {
        ...user.address,
        city: e.target.value,
      },
    }
    setUser(newUser)
  }

  return (
    <div>
      <input type="text" value={user.name} onChange={onChangeName} />
      <input type="text" value={user.address.city} onChange={onChangeCity} />
      <div>{user.name}</div>
      <div>{user.profession}</div>
      <div>{user.address.city}</div>
    </div>
  )
}

export default App
