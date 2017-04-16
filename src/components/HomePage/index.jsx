import * as st from './home-page.scss'

export default class HomePage extends React.Component {
    render(){
        return (
            <h1 className={st.title}>
                Welcome to HealSci
                <span className={st.logo}></span>
            </h1>
        )
    }
}
