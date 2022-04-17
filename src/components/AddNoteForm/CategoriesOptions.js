import { Fragment } from 'react';
import categories from '@/constants/categories';

const CategoriesOptions = () => (
  <Fragment>
    {
      categories.options.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))
    }
  </Fragment>
);

export default CategoriesOptions;
