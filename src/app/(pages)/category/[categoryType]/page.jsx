'use client'

import { useContext } from "react"
import { ProductsContext } from "../../../../context/products"
import ReusableCard from '../../../../components/ReusableCard'

export default function CategoryPage ({ params }) {
    const { data, loading } = useContext(ProductsContext)
    console.log(params)
    console.log(data)
    // const filterBy = params.categoryType use this to filter using the route
    return(
        <>
            {loading && <p>Cargando...</p>}
            {(!loading && data) && <ProductGrid data={data}/>}
        </>
    )
}

function ProductGrid({ data }) {
    const handleClick = () => {
        console.log('click')
    }

    return(
        <div style={{display: "grid"}}>
            {data.map((product) => 
                <ReusableCard 
                    key={product.id} 
                    product={product} 
                    handleClick={handleClick}
                />
            )}
        </div>
    )
}
