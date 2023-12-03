import PropTypes from 'prop-types'

export default function CategoryCard ({data}) {
  return (
    <div className='relative'>
      <img className='w-full object-cover' src={data.img} />
      <div className='absolute top-0 w-full h-full flex justify-center items-center pointer-events-none'>
        <span className='bg-white min-w-[70%] p-1 text-center'>{data.title}</span>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  data: PropTypes.object
}