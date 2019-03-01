import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'       // สำหรับ log การเปลี่ยน state ของข้อมูล
import combindReducer from './combindReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combindReducer,
    composeEnhancer(applyMiddleware(thunk, logger))
    // composeEnhancer(applyMiddleware(thunk))     // กรณีไม่ต้องการให้ log เมื่อ state redux เปลี่ยน
)

export default store
