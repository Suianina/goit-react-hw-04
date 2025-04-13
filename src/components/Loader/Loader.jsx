import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <ClipLoader color="#4fa94d" size={60} speedMultiplier={1} />
    </div>
  );
};

export default Loader;


