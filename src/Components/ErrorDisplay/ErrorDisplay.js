import PropTypes from 'prop-types';

const ErrorDisplay = ({ error }) => {
  let errorMessage;
  if (0 < error < 500) {
    errorMessage = `Error ${error}: Sorry, you've either "fat fingered" your keyboard or intentionally requested information we don't have. Please refresh and try again.`
  } else if (error >= 500) {
    errorMessage = `Error ${error}: Ope! So sorry, we dropped the ball. Please Refresh and try again.`
  }
  
  return (
    <section>
      <h2>{ errorMessage }</h2>
    </section>
  )
};

export default ErrorDisplay;

ErrorDisplay.propTypes = {
  error: PropTypes.number
}