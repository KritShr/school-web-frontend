import PropTypes from 'prop-types';

const SearchInput = ({searchTerm, onSearch}) => {
  return (
    <input 
      className='border border-gray-300 rounded-lg'
      type='text'
      placeholder='Search'
      onChange={onSearch}
      value={searchTerm}
    />
  )
}

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};


export default SearchInput