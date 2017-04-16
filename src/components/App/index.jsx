import store from 'store'
import Routes from 'routes'
import {Provider} from 'react-redux'

export default class App extends React.Component {
    render() {
        return (
            <Provider {...{store}}>
                    <Routes />
            </Provider>
        )
    }
}
