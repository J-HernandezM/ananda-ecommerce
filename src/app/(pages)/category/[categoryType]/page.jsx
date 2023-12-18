'use client'

import { useContext } from "react"
import { ProductsContext } from "../../../../context/products"

function CategoryPage ({ params }) {
    const { data, loading } = useContext(ProductsContext)
    console.log(params)
    // const filterBy = params.categoryType use this to filter using the route
    return(
        <div>
            {loading && <p>Cargando...</p>}
            {(!loading && data) && <p>Ya cargo! {data[0].title} </p>}
        </div>
    )
}

export default CategoryPage