import {browserHistory, Router, Route, IndexRoute, IndexRedirect} from 'react-router'
import {syncHistoryWithStore, push} from 'react-router-redux'
import {connect} from 'react-redux'
import store from 'store'
import HomePage from 'containers/HomePage'

const history = syncHistoryWithStore(browserHistory, store)

class Routes extends React.Component{
    render(){
        console.log('render route');
        return (
            <Router history={history}>
                <Route path='/' component={HomePage}>
                    {/*sub routes*/}
                </Route>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
