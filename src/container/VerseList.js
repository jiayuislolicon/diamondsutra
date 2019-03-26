import "VerseList.css"


export default class VerseList extends React.Component {

    render() {
        return <div className='page'>
        	<section className="verselist">
        		<div className="verse_items">
        			<NavLink to='/'>
        				<h2>云何應住？云何降伏其心？</h2>
        			</NavLink>
        			<NavLink to='/'>
        				<h2>若菩薩有我相、人相、眾生相、壽者相，即非菩薩。</h2>
        			</NavLink>
        		</div>
        		
        	</section>
        </div>
    }
}