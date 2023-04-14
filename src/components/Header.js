import redLogo from '../images/redLogo.jpg'
import { Navbar, Button, ButtonGroup } from 'reactstrap'


function Header(props){
   

    const {toggle} = props

    return(
        <header className='header' >
            <Navbar>
                <img className='headerImg' src={redLogo}/>
                <ButtonGroup>
                    <Button>Leave a Review</Button>
                    <Button onClick={toggle}>Contact</Button>
                </ButtonGroup>
                
            </Navbar>
        </header>
    )
}

export default Header