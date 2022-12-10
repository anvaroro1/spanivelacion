import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CREARITEM_POST_ENDPOINT } from '../connections/endpoints';
import FormularioItem from '../components/FormularioItem';

function Crearitem() {

    const navegar =useNavigate()
    const crear =(item)=>{
      axios.post(CREARITEM_POST_ENDPOINT,item)
      .then(respuesta=>{
        console.log(respuesta.data)
        navegar("/")
    })
    

    }
  return (
    <Container className="mt-3 mb-3 text-center">
      <h3> Crear Productos</h3>
      <Row>
        <Col>
          <Row>
            <FormularioItem key={crear.idproducto} callback={crear}/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Crearitem;