import React from 'react'
import { useDispatch,  } from 'react-redux'
import { somar } from './store/contador'
import {  login } from './store/login'


const App = () => {
  // const data = useSelector(state=>state.login)
  const dispatch = useDispatch()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch(login({username, password}))
  }

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <label style={{display: 'block'}}>Usuário</label>
      <input type="text" id="usarname" value={username} onChange={({target})=> setUsername(target.value)}/>
      <label style={{display: 'block'}}>Senha</label>
      <input type="text" id="password" value={password} onChange={({target})=> setPassword(target.value)}/>
      <button>Enviar</button>
      {/* <h1>{data?.token}</h1> */}
    </form>
    <button onClick={()=> dispatch(somar(5))}>SOMAR</button>
    </div>
  )
}
export default App
