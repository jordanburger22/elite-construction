import bathroomLogo from '../images/bathroomLogo.png'
import { Card } from 'reactstrap'

function Services(){
    return(
        <div className="service-container">
            <div className='service-list'>
                <h1>Services Include</h1>
                <ul>
                    <li>Bathroom Remodel</li>
                    <li>Kitchen Remodel</li>
                    <li>Basement Finish</li>
                    <li>Home Additions</li>
                    <li>Interior Painting</li>
                    <li>Finish Carpentry</li>
                    <li>Outdoor Entertainment Spaces</li>
                    <li>Handyman Services</li>
                </ul>
            </div>
            <Card
                className="my-2"
                color="dark"
                outline
                style={{
                  width: '30rem'
                }}
            >
                <img src={bathroomLogo}/>
            </Card>
        </div>
    )
}

export default Services