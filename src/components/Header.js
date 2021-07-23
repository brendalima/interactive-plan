import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import loft from '../images/loft.png';

function Header() {
  return (
    <header>
      <Navbar className="main-header" fixed="top" bg="white" expand="md" collapseOnSelect>
        <Navbar.Brand href="https://loft.com.br/">
          <img src={loft} alt="Loft logo" width="45" />
        </Navbar.Brand>
        <Navbar.Toggle className="justify-content-end" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Comprar">
              <NavDropdown.Item href="https://loft.com.br/venda/apartamentos/sao-paulo_sp">
                São Paulo
              </NavDropdown.Item>
              <NavDropdown.Item href="https://loft.com.br/venda/apartamentos/rio-de-janeiro_rj">
                Rio de Janeiro
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://loft.com.br/vender-apartamento?state=sao-paulo">
              Vender
            </Nav.Link>
            <Nav.Link href="https://loft.com.br/propriedades-loft">
              Propriedades Loft
            </Nav.Link>
            <Nav.Link href="https://loft.com.br/corretor-de-imoveis">
              Corretores
            </Nav.Link>
            <NavDropdown title="Crédito">
              <NavDropdown.Item href="https://loft.com.br/loftcred/financiamento-imobiliario">
                Financiamento
              </NavDropdown.Item>
              <NavDropdown.Item href="https://loft.com.br/loftcred/credito">
                Crédito com garantia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://mkt.loft.com.br/parceriasloftcred">
                Parcerias
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mais">
              <NavDropdown.Item href="https://mkt.loft.com.br/compra-e-venda-segura">
                Assessoria imobiliária
              </NavDropdown.Item>
              <NavDropdown.Item href="https://loft.com.br/#how-it-works">
                Como funciona
              </NavDropdown.Item>
              <NavDropdown.Item href="https://loft.com.br/about-us">
                Sobre nós
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;