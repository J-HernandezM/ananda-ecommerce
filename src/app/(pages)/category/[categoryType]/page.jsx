'use client'

import { useContext } from "react"
import { ProductsContext } from "../../../../context/products"
import ReusableCard from '../../../../components/ReusableCard'
import styled from "@emotion/styled"

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
        <Grid>
            {data.map((product) => 
                <ReusableCard 
                    key={product.id} 
                    product={product} 
                    handleClick={handleClick}
                />
            )}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 172px);
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
    
    @media (min-width: 600px) {
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 30px;
        margin-top: 30px;
    }
`