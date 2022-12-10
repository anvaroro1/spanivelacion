import Card from 'react-bootstrap/Card';

function ItemCard({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text> ${item.precio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;