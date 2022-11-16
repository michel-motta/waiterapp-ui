import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders: Order =
  {
    '_id': '63730df155bac76f2b897904',
    'table': '7',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668483369853-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63730df155bac76f2b897905'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668484023889-coca-cola.png',
          'price': 7,
        },
        'quantity': 3,
        '_id': '63730df155bac76f2b897906'
      }
    ],
  }
;

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏱️"
        title="Fila de espera"
        orders={[orders]}
      />
      <OrdersBoard
        icon="👨🏻‍🍳"
        title="Em preparação"
        orders={[]}

      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
