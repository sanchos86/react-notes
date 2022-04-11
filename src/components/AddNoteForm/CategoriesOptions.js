import categories from '../../constants/categories';

const CategoriesOptions = () => (
  <>
    {
      categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))
    }
  </>
);

export default CategoriesOptions;
