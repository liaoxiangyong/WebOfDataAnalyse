import {combineReducers} from 'redux'
import FileReducer from './FileReducer'
import LoginReducer from './LoginReducer'
import AppHeaderReducer from './AppHeaderReducer'
import ConfigReducer from './ConfigReducer'
import ModelReducer from './ModelReducer'
import AddConfigReducer from './AddConfigReducer'

/**
 * Created by LXY on 2017/3/12.
 */
const rootReducer = combineReducers({
    addConfigManage:AddConfigReducer,
    fileManage:FileReducer,
    loginManage:LoginReducer,
    headerManage:AppHeaderReducer,
    configManage:ConfigReducer,
    modelManage:ModelReducer,
});

export default rootReducer;
