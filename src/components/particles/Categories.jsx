import PropTypes from 'prop-types'
import { CategoryCard } from '../atoms'

export default function Categories ({data})  {
  return (
    <section className='grid grid-categories gap-6'>
      {data.map(item => (
        <CategoryCard key={item.category} data={item} />
      ))}
    </section>
  )
}

Categories.propTypes = {
  data: PropTypes.array
}