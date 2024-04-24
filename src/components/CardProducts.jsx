

function CardProducts(props) {
  return (
    <div className="card-products max-w-xs p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900 hover:scale-105">
      <img src="/Hamburguesa-fondo-negro.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
      <h2 className="font-bold h-10 p-2 text-center">{props.nombre}</h2>
      <button type="button" className=" bg-amber-400 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  dark:text-gray-50">Comprar</button>
    </div>
  )
}

export default CardProducts;
