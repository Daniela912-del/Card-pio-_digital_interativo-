import { Badge, Button, Card, Col, Container, Navbar, Row } from 'react-bootstrap';
import { FaBagShopping, FaMugHot, FaStar } from 'react-icons/fa6';
import { menuItems } from './data/menu';

const categorias = ['Todos', ...new Set(menuItems.map((item) => item.categoria))];

function App() {
  return (
    <div className="app-shell">
      <Navbar className="topbar" expand="lg">
        <Container className="topbar-inner">
          <Navbar.Brand href="#home" className="brand">
            <span className="brand-icon">
              <FaMugHot />
            </span>
            <span>Graniatta Café</span>
          </Navbar.Brand>

          <div className="topbar-actions">
            <Badge bg="light" text="dark" className="badge-carrinho">
              <FaBagShopping />
              <span>{menuItems.length} itens</span>
            </Badge>
          </div>
        </Container>
      </Navbar>

      <main className="page-content">
        <Container>
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Cardápio digital</p>
              <h1>Sabores que fazem a pausa valer a pena</h1>
              <p className="hero-subtitle">
                Descubra cafés, lanches e sobremesas preparados com carinho para transformar cada
                momento em uma experiência especial.
              </p>

              <div className="hero-actions">
                <Button className="btn-primary">Ver cardápio</Button>
                <Button variant="outline-light" className="btn-secondary">
                  Reservas
                </Button>
              </div>
            </div>

            <div className="hero-highlight">
              <div className="highlight-card">
                <div className="highlight-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80"
                    alt="Café especial"
                    className="highlight-image"
                  />
                </div>

                <div className="rating-row">
                  <FaStar />
                  <span>4.9</span>
                </div>
                <h3>Especial do dia</h3>
                <p>Café especial da casa com aroma intenso e sabor equilibrado.</p>
                <span className="highlight-price">R$ 18,00</span>
              </div>
            </div>
          </section>

          <section className="filters-bar">
            <div className="filters">
              {categorias.map((categoria) => (
                <Button key={categoria} variant="outline-secondary" className="btn-filtro">
                  {categoria}
                </Button>
              ))}
            </div>
          </section>

          <section className="menu-section">
            <div className="section-heading">
              <h2>Conheça nossas delícias</h2>
              <p>Preparados com ingredientes selecionados e muito cuidado.</p>
            </div>

            <Row className="g-4">
              {menuItems.map((item) => (
                <Col lg={4} md={6} key={item.id}>
                  <Card className={`card-cardapio h-100 ${item.id === 1 ? 'card-destaque' : ''}`}>
                    {item.imagem && (
                      <div className="card-image-wrap">
                        <img src={item.imagem} alt={item.nome} className="card-image" />
                      </div>
                    )}

                    <Card.Body className="card-body">
                      <div className="card-header">
                        <Badge bg="warning" text="dark" className="category-badge">
                          {item.categoria}
                        </Badge>
                        <span className="card-price">R$ {item.preco.toFixed(2)}</span>
                      </div>

                      <Card.Title>{item.nome}</Card.Title>
                      <Card.Text>{item.descricao}</Card.Text>

                      <Button variant="primary" className="btn-adicionar">
                        Adicionar ao pedido
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </main>
    </div>
  );
}

export default App;