import { Container, Form, Header, Img, Input, InputBox, Li, Main, Nav, Ul } from "./styles"

export function Home(){
    return(
        <>
            <Header>
                <InputBox>
                    <Img></Img>
                    <Form action="">
                        <Input type="text" value={"Alan Turing"} name="search"></Input>
                        <span className="lnr lnr-magnifier" id="search-icon"></span>
                        <span className="lnr lnr-keyboard" id="keyboard-icon"></span>
                        <span className="lnr lnr-mic" id="mic-icon"></span>
                    </Form>
                </InputBox>

                <Nav>
                    <Ul id="links-list">
                        <Li class="active-link"></Li>
                        <Li><a href="#"><span className="lnr lnr-picture"></span> Imagens</a></Li>
                        <Li><a href="#"><span className="lnr lnr-tag"></span> Shopping</a></Li>
                        <Li><a href="#"><span className="lnr lnr-map-marker"></span> Maps</a></Li>
                        <Li><a href="#"><span className="lnr lnr-film-play"></span> Vídeos</a></Li>
                        <Li><a href="#">Mais</a></Li>
                        <Li><a href="#">Configurações</a></Li>
                        <Li><a href="#">Ferramentas</a></Li>
                    </Ul>
                </Nav>
            </Header>

            <Container>
                <Main>
                    <p id="results">Aproximadamente 14.400.000 resultados (0,39 segundos)</p>
                    <div className="search-result-box">
                        <a className="ref-link" href="#">pt.wikipedia.org -- wiki -- Alan_Turing <span className="triangle"></span></a>
                        <a className="main-link" href="#">Alan Turing - Wikipédia, a enciclopédia livre</a>
                        <p className="search-result-desc">Alan Mathison Turing OBE (Paddington, Londres, 23 de junho de 1912 — Cheshire East, Cheshire, 7 de junho de 1954) foi um matemático, lógico, ...</p>

                        <div className="info-box">
                            <p className="info"><span className="info-title">Causa da morte:</span> Suposto suicídio por ingestão de cianeto</p>
                            <p className="info"><span className="info-title">Nome completo</span> Alan Mathison Turing</p>
                            <p className="info"><span className="info-title">Morte:</span> 7 de junho de 1954 (41 anos);</p>
                            <p className="info"><span className="info-title">Alma mater:</span> Universidade de Cambridge;</p>
                        </div>

                        <div className="related-results">
                            <ul>
                                <li><a href="#">Máquina de Turing &#183;</a></li>
                                <li><a href="#">Memorial a Alan Turing &#183;</a></li>
                                <li><a href="#">Teste de Turing &#183;</a></li>
                                <li><a href="#">Enigma</a></li>
                            </ul>
                        </div>
                    
                    </div>
                </Main>
            </Container>
        </>
        
    )
}

export default Home