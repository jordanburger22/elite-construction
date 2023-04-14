import redLogo from '../images/redLogo.jpg'
import { Navbar, Button, ButtonGroup } from 'reactstrap'


function Footer(props){

    const {toggle} = props

    return(
        <footer className='footer'>
            <Navbar className='footer-nav'>
                <img className='footerImg' src={redLogo}/>
            </Navbar>
        </footer>
    )
}

export default Footer