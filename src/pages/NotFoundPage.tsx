import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='container'>
      <h1 className='display-2 my-3'>404 </h1>
      <p className='lead'>Opps Page was not found</p>
      <Link to={'/'} className='btn btn-dark'>
        Try Home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
