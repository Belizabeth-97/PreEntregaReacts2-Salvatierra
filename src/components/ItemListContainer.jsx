import CardProducts from "./CardProducts"

function ItemListContainer() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CardProducts
        nombre="Simple Pepinillo"
        id={1}
      />

      <CardProducts
        nombre="Simple Cheddar"
        id={2}
      />

      <CardProducts
        nombre="Simple Bacon"
        id={3}
      />

      <CardProducts
        nombre="Doble Pepinillo"
        id={4}
      />

      <CardProducts
        nombre="Doble Cheddar"
        id={5}
      />

      <CardProducts
        nombre="Doble Bacon"
        id={6}
      />

      <CardProducts
        nombre="Triple Pepinillo"
        id={7}
      />

      <CardProducts
        nombre="Triple Cheddar"
        id={8}
      />

      <CardProducts
        nombre="Triple Bacon"
        id={9}
      />

      <CardProducts
        nombre="Papas fritas"
        id={10}
      />

      <CardProducts
        nombre="Papas fritas con Cheddar"
        id={11}
      />

      <CardProducts
        nombre="Papas fritas con Cheddar y Bacon"
        id={12}
      />

    </section>
  )
}

export default ItemListContainer
