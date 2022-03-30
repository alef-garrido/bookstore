import { useDispatch } from 'react-redux';
import { getStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const clicklHandler = () => {
    dispatch(getStatus());
  };
  return (
    <section className="categories--container">
      <button
        type="button"
        onClick={clicklHandler}
      >
        Check satus
      </button>
    </section>
  );
}

export default Categories;
