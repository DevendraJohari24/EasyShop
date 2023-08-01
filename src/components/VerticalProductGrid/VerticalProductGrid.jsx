import ProductCardSmall from '../ProductCardSmall/ProductCardSmall'
import PropTypes from 'prop-types';

export default function VerticalProductGrid({title}) {
  return (
    <div className="w-full h-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2">
            <h1 className=" text-3xl font-bold tracking-normal">{title}</h1>
            <div className="w-16 h-[1px] bg-primaryText rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-6">
            <ProductCardSmall />
            <ProductCardSmall />
            <ProductCardSmall />
        </div>
    </div>
  )
}


VerticalProductGrid.propTypes = {
    title: PropTypes.string.isRequired
  }
  
