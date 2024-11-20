import { Container, Form, Header, Img, Input, InputBox, Lado, Main, Nav } from "./styles"
import GoogleLogo from "../../../assets/google_logo.png"
import firstImg from "../../../assets/turing1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
export function Home() {
    return (
        <>
            <Header>
                <InputBox>
                    <img src={GoogleLogo} alt="Google Logo" />
                    <Form action="">
                        <Input type="text" value={"Alan Turing"} name="search"></Input>
                        <span className="lnr lnr-magnifier" id="search-icon"><FontAwesomeIcon icon={faSearch} className="icon" /></span>
                        <span className="lnr lnr-keyboard" id="keyboard-icon"><FontAwesomeIcon icon={faKeyboard} className="icon" /></span>
                        <span className="lnr lnr-mic" id="mic-icon"><FontAwesomeIcon icon={faMicrophone} className="icon" /></span>
                    </Form>
                </InputBox>

                <Nav>
                    <ul id="links-list">
                        <li className="active-link"></li>
                        <li><a href="#"><span className="lnr lnr-picture"></span>Imagens</a></li>
                        <li><a href="#"><span className="lnr lnr-tag"></span>Shopping</a></li>
                        <li><a href="#"><span className="lnr lnr-map-marker"></span>Maps</a></li>
                        <li><a href="#"><span className="lnr lnr-film-play"></span>Vídeos</a></li>
                        <li><a href="#">Mais</a></li>
                        <li><a href="#">Configurações</a></li>
                        <li><a href="#">Ferramentas</a></li>
                    </ul>
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

                <Lado>
                    <div id="gallery-box">
                        <img src={firstImg} alt="Photo Profile" className="userPhoto" />
                        <div id="gallery">
                            <div id="gallery-img1"></div>
                            <div id="gallery-img2"></div>
                            <div id="gallery-img3"></div>
                            <div id="gallery-img4"></div>
                            <div id="gallery-img5"></div>
                            <div id="gallery-img6"></div>
                        </div>
                        <a id="moreimg-btn" href="#"><span className="lnr-picture"> </span>Mais imagens</a>
                    </div>

                    <div id="about-box">
                        <div id="name-box">
                            <h3 id="name">Alan Turing</h3>
                            <p id="role">Matemático</p>
                        </div>
                        <p className="about-text">Alan Mathison Turing foi um matemático, lógico, criptoanalista e cientista da computação britânico. Foi influente no desenvolvimento da ciência da computação e na formalização do conceito de algoritmo e computação com a máquina de Turing, desempenhando um papel importante na criação do computador moderno.</p>
                        <p className="about-text"><span className="spantext">Nascimento:</span> 23 de junho de 1912, Maida Vale, Londres, Reino Unido</p>
                    </div>
                </Lado>
            </Container>
        </>

    )
}

export default Home