import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from "reactstrap"


function FormModal(props){

    const {modal, toggle} = props

    return(
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Contact</ModalHeader>

                <ModalBody>

                    <h5>Phone Number: 435-740-0759</h5>
                    <h5>Email: econstructionremodel@gmail.com</h5>
                    <br></br>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name:</Label>
                            <Input 
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name:</Label>
                            <Input 
                                name="lastName"
                                placeholder="Last Name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone Number:</Label>
                            <Input 
                                name="phone"
                                placeholder="Phone Number"
                                type="tel"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input 
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default FormModal