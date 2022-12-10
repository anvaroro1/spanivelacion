import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { ITEM_GET_ENDPOINT } from '../connections/endpoints';
import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';

function Inicio() {
    const [item, setItem] = useState([])
    useEffect(()=>{ 
        axios.get(ITEM_GET_ENDPOINT)
        .then(respuesta=>{
            setItem(respuesta.data)
        })
        
    },[])
return (

    <Container className="mb-4 mt-3 text-center">
      <h3>Productos creados</h3>
      <Row className="justify-content-center">
            {item.map(item=><ItemCard key={item.idproducto} item={item}/>)}
      </Row>
    </Container>
  );
}
export default Inicio;