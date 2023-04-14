import BlackLogo from '../images/BlackLogo.jpg'
import { Card } from 'reactstrap'

function Logo(){
    return(
        <div className='top-container'>
            <Card
                className="my-2"
                // color="dark"
                outline
                style={{
                    width: '50rem',
                }}
                >
                <img src={BlackLogo}/>
            </Card>
        </div>
    )
}

export default Logo