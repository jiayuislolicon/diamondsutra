import "normalize.css"
import "./App.css"
import { isMobile } from 'globals'


import Header from 'Header'
import IndexPage from 'IndexPage'
import AboutPage from 'AboutPage'
import VersePage from 'VersePage'
import DevotionPage from 'DevotionPage'

class App extends React.Component {
    componentDidMount(){
        if(!isMobile){
            document.body.classList.add('desktop')
        }
        window.scrollTo(0,0)
    }
    componentWillReceiveProps(np){
        window.scrollTo(0,0)
    }
    render() {
        return <div id='app'>
            <Header/>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/verse' component={VersePage}/>
                <Route exact path='/devotion' component={DevotionPage}/>
            </Switch>
        </div>
    }
}


export default compose(
    withRouter,
    connect(
        ( { } ) => ( {} ),
        null
    )
)(App)



