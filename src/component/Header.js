import "Header.css"



export default class Header extends React.Component {
    constructor(p){
        super(p)
        this.state = {
            menuVisible: false
        }
        this.setMenuVisible = this.setMenuVisible.bind(this)
    }
    setMenuVisible(){
        this.setState({ menuVisible: !this.state.menuVisible });
    }
    render() {
        let {menuVisible} = this.state
        return <header className='header'>
            <div className="container">
                <div className="logo">
                        <img src={`${process.env.PUBLIC_PATH}asset/logo.svg`}/>
                    </div>
                <div className={`hamburger ${menuVisible &&' visible'}`}  onClick = { () => this.setMenuVisible(!menuVisible) }>
                    <span></span>
                </div>
            </div>
            <ul className={`menu ${menuVisible && 'visible'}`}>
               <li>
                   <NavLink to='/about' onClick = { () => this.setMenuVisible(!menuVisible) }>
                       <span>關於</span>
                   </NavLink>
               </li>
               <li>
                   <NavLink to='/verse' onClick = { () => this.setMenuVisible(!menuVisible) }>
                       <span>偈子</span>
                   </NavLink>
               </li>
               <li>
                   <NavLink to='/devotion' onClick = { () => this.setMenuVisible(!menuVisible) }>
                       <span>體悟</span>
                   </NavLink>
               </li>
            </ul>
        </header>
    }
}