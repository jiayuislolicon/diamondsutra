import "VersePage.css"
import Arrow from 'Arrow'

export default class VersePage extends React.Component {

    render() {
        return <div className='page'>
        	<section className="verse_page">
        		<div className="content">
                    <div className="back">
                        <div className="arrow"></div>
                        <span>BACK</span>
                    </div>
                    <div className="title">
                        <span>標題不想要很長</span>
                    </div>
                    <div className="explaintion">
                        <span>
                            佛陀又問：「須菩提！如你剛才所說，佛眼可攝一切眼，一沙可攝一切沙，在諸佛世界中的一切眾生，所有種種不同的心，佛也是完全知曉的。為什麼呢？因為眾生的心源與佛如一，譬如水流歧脈，源頭是一，心性同源，眾生心即是佛心，所以，如來能悉知眾生心性。但是，眾生往還六道，隨業逐流，遺失了本心。
                        </span>
                    </div>
                    <div className="slideoption">
                        <div className="prev">
                            <Arrow></Arrow>
                        </div>
                        <div className="num">
                            <span>14/40</span>
                        </div>
                        <div className="next">
                            <Arrow></Arrow>
                        </div>
                    </div>
                </div>
                <div className="pic">
                    <img src="" alt=""/>
                </div>
        		
        	</section>
        </div>
    }
}