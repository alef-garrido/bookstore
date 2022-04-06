import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../redux/categories-dux';
import '../Styles/categories.css';

function Categories() {
  const [visible, setVisible] = useState(false);
  const status = useSelector((status) => status.Categories);
  const dispatch = useDispatch();

  const clicklHandler = () => {
    setVisible((prevState) => !prevState);
    dispatch(getStatus());
  };

  return (
    <section className="categories--container">
      <div className={visible ? null : 'hide status--display'}>{status}</div>
      <button type="button" onClick={clicklHandler}>
        Check satus
      </button>
    </section>
  );
}

export default Categories;
