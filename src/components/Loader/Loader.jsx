import { Oval } from "react-loader-spinner";
import PropTypes from 'prop-types';

const Loader = ({ color = "#4fa94d", loading = false }) => {
  if (!loading) return null;

  return (
    <Oval
      visible={loading}
      height="80"
      width="80"
      color={color}
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
};

export default Loader;
