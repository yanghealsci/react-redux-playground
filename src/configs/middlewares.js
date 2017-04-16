import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {logger, request} from '../middlewares'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'

const mws = [
    routerMiddleware(browserHistory),
    thunk,
    request,
    logger
]

export default mws
