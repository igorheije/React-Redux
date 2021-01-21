import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementar, reduzir } from './store/contador'
import  { abrir, fechar } from './store/modal'

const App = () => {
  const {contador, modal} = useSelector(state=>state)
  const dispatch = useDispatch()

  return (
    <div>
      {modal&&(<h1>TOTAL: {contador.total}</h1>)}
      <button onClick={()=>dispatch(incrementar())}>INCREMENTAR</button>
      <button onClick={()=>dispatch(reduzir())}>REDUZIR</button>
      <button onClick={()=>dispatch(abrir())}>Modal</button>
      <button onClick={()=>dispatch(fechar())}>Modal</button>
    </div>
  )
}
export default App
