

import ProductCard from './components/ProductCard/ProductCard'
import getProduct from './services/getProduct'

const Page = async ({ searchParams }) => {
  const data = await getProduct()
  console.log(searchParams.search)
  const filteredData = searchParams.search ? data.filter(item => item.name.toLowerCase().includes(searchParams.search.toLowerCase())) : data
  return (
    <div className='px-10 mt-20'>
      <ul className='grid grid-cols-5 gap-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1'>
        {
        filteredData?.map((item, index) => {
          return (
            <li key={index}>
              <ProductCard name={item.name} item={item} />
            </li>
          )
        })}
      
      </ul>
    </div>
  )
}

export default Page

