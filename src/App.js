import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Photos from './Photos'
import { somar } from './store/contador'
import { adicionarDatas } from './store/date'
import {  autoLogin, login } from './store/login'


const App = () => {
  // const {data} = useSelector(state=>state.login.user)
  const dispatch = useDispatch()

  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')
  const [partida, setPartida] = React.useState('')
  const [retorno, setRetorno] = React.useState('')
  const [toogle, setToogle] = React.useState(true)

  // React.useEffect(() =>{
  //   dispatch(autoLogin())
  // },[dispatch])

  function handleSubmit(e){
    e.preventDefault()
    // dispatch(login({username, password}))
dispatch(adicionarDatas({partida, retorno}))
    
  }

  return (
    <div>

    {/* <form onSubmit={handleSubmit}>
      <label style={{display: 'block'}}>Usuário</label>
      <input type="text" id="usarname" value={username} onChange={({target})=> setUsername(target.value)}/>
      <label style={{display: 'block'}}>Senha</label>
      <input type="text" id="password" value={password} onChange={({target})=> setPassword(target.value)}/>
      <button>Enviar</button>
    </form>
    <p>Email: {data?.email}</p>
    <button onClick={()=> dispatch(somar(5))}>SOMAR</button> */}
    <form onSubmit={handleSubmit}>
      <p>
      <label htmlFor="partida">Partida</label>
      <input type="date" id="partida" value={partida} onChange={({target})=> setPartida(target.value)}/>
      </p>
      <p>
      <label htmlFor="retorno">Retorno</label>
      <input type="date" id="retorno" value={retorno} onChange={({target})=> setRetorno(target.value)}/>
      </p>
      <button>
        Buscar</button>
    </form>
    <button onClick={()=> setToogle(!toogle)}>Toogle</button>
    {toogle && <Photos/>}
    </div>
  )
}
export default App
