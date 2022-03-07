

const ErrorDisplay = ({ error }) => {
  let errorMessage;
  if (error && error < 500) {
    errorMessage = `Error ${error}: Sorry, you've either "fat fingered" your keyboard or intentionally requested information we don't have. Please refresh and try again.`
  } else if (error >= 500) {
    errorMessage = `Error ${error}: Ope! We dropped the ball. Please Refresh and try again.`
  }
  return (
    <section>
      <h2>{ errorMessage }</h2>
    </section>
  )
};

export default ErrorDisplay;