import PropTypes from 'prop-types';
const Bookcard = ({ image,name, genre, author }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-[300px] h-[500px] flex flex-col drop-shadow-2xl">
      <img src={image} alt="Book cover" className="object-cover w-full h-2/3 rounded-t-2xl" />
      <div className="p-2">
        <h1 className="text-lg font-bold">{name}</h1>
        <h2 className="text-sm text-gray-600">{genre}</h2>
        <h2 className="text-sm text-gray-500">{author}</h2>
      </div>
    </div>
  );
};
Bookcard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Bookcard;


