import React from 'react';
import PropTypes from 'prop-types';

import languageContext from './contexts/languageContext';
import stringsModule from './helpers/strings';

function Input({ secretWord }) {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState('');

  // TODO: pesquisar se é possivel utilizar esta const no onChange do input
  // const valChange = (e) => {
  //   setCurrentGuess(e.target.value);
  // };

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder={stringsModule.getStringByLanguage(
            language,
            'guessInputPlaceholder'
          )}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test='submit-button'
          onClick={(e) => {
            e.preventDefault();
            // TODO: update guessedWord
            // TODO: check against secretWord and update success if needed
            setCurrentGuess('');
          }}
          className='btn btn-primary mb-2'
        >
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
