import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import contador from './contador.js'
import localStorage from './middleware/localStorage.js'
import modal from './modal.js'
import login from './login.js'
import date from './date.js'
import photos from './photos.js'


const middleware = [...getDefaultMiddleware(), localStorage]

const reducer = combineReducers({contador, modal, login, date,photos})
const store = configureStore({reducer, middleware})

export default store