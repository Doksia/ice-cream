import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
