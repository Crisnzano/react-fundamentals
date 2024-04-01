const products = [
    { title: 'Onions', isFruit: false, id: 1 },
    { title: 'Tomatoes', isFruit: false, id: 2 },
    { title: 'Pears', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul> Which is a fruit? {listItems}</ul>
    );
  }
  