import { ChevronRight, ChevronLeft } from 'lucide-react'
import ProductCard from '../productCard/ProductCard'
import PropTypes from 'prop-types';


export default function ProductGrid({title}) {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
        {/* Header & Pagination */}
        <div className="flex justify-between text-2xl text-primaryText border-b-2 border-primaryText py-2">
            <h3 className="font-semibold tracking-wide">{title}</h3>
            {/* Pagination */}
            <div className="flex gap-4">
                <ChevronLeft />
                <ChevronRight />
            </div>
        </div>
        <div className='grid grid-cols-3 gap-8'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}


ProductGrid.propTypes = {
    title: PropTypes.string.isRequired
  }
  