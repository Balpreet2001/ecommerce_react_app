import React from 'react'
import categories from '../categories.json'
import { Link} from 'react-router-dom';


const CategoryDetail = () => {


  return (
    <div>
      <div>
        {categories.map((categories) => (
          <div key={categories.id}>
            <Link to={`/categories/${categories.id}`} >
            {categories.name}
            {categories.description}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetail