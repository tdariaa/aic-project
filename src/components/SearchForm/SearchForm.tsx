import './SearchForm.css';

export const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__container'>
        <div className='sarch__line'>
          <input className='search__input' type='text' placeholder='Search' />
          <button className='search__button'></button>
        </div>
        <div className='search__radio-container'>
          <ul className='search__radios-list'>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioOne' defaultValue='Print' />
              <label htmlFor='radioOne'>Print</label>
            </li>
            <li>
              <input
                className='search__radio'
                type='radio'
                name='radio'
                id='radioTwo'
                defaultValue='Drawing and Watercolo'
              />
              <label htmlFor='radioTwo'>Drawing and Watercolo</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioThree' defaultValue='Painting' />
              <label htmlFor='radioThree'>Painting</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioFour' defaultValue='Mask' />
              <label htmlFor='radioFour'>Mask</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioFive' defaultValue='Photograph' />
              <label htmlFor='radioFive'>Photograph</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioSix' defaultValue='Vessel' />
              <label htmlFor='radioSix'>Vessel</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioSeven' defaultValue='Textile' />
              <label htmlFor='radioSeven'>Textile</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioEight' defaultValue='Book' />
              <label htmlFor='radioEight'>Book</label>
            </li>
            <li>
              <input className='search__radio' type='radio' name='radio' id='radioNine' defaultValue='Sculpture' />
              <label htmlFor='radioNine'>Sculpture</label>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};
