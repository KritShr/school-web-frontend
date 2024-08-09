import PropTypes from 'prop-types';

const SearchInput = ({searchTerm, onSearch}) => {
  return (
    <input 
      className='block w-60 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6'
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