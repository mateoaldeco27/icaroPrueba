<ListItemText
  primary={item.title}
  secondary={`Cantidad: ${item.quantity} | Precio unitario: $${item.price}`}
  primaryTypographyProps={{ fontWeight: 'bold', maxWidth: '80%' }} // Cambiado maxWith por maxWidth
/>