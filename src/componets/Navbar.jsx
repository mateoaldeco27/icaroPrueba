import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', gap: '15px' }}>
      <Link to="/">Inicio</Link>
      <Link to="/cart">Carrito ({totalItems})</Link>
    </nav>
  );
}