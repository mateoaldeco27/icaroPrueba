import { useFetch } from '../hooks/useFetch';
import { useCartStore } from '../store/useCartStore';

export default function Home() {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const addToCart = useCartStore((state) => state.addToCart);

  if (loading) return <h2>Cargando productos...</h2>;
  if (error) return <h2>Hubo un problema: {error}</h2>;

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}