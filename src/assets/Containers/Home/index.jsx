import { Form, Header, Img, Input, InputBox, Li, Nav, Ul } from "./styles"

export function Home(){
    return(
        <Header>
            <InputBox>
                <Img></Img>
                <Form action="">
                    <Input type="text" value={"Alan Turing"} name="search"></Input>
                    <span></span>
                    <span></span>
                    <span></span>
                </Form>
            </InputBox>

            <Nav>
                <Ul id="links-list">
                    <Li class="active-link"></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                </Ul>
            </Nav>


        </Header>
    )
}

export default Home