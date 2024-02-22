import { Link } from 'react-router-dom';
import { DummyPostType } from '../../types/types';

type PostProps = {
  item: DummyPostType;
};

export default function Post({ item }: PostProps) {
  return (
    <div className='card text-bg-light mb-3'>
      <div className='card-header'>Post id: {item.id}</div>
      <div className='card-body'>
        <h5 className='card-title'>{item.title.slice(0, 25)}</h5>
        <p className='card-text'>{item.body.slice(0, 100)}...</p>
      </div>
      {/* <TagsList /> */}
      <div className='border-top p-2 d-flex gap-2'>
        <span className='badge text-bg-dark'>Light</span>
        <span className='badge text-bg-dark'>Light</span>
        <span className='badge text-bg-dark'>Light</span>
      </div>
      <div className='card-footer'>
        <Link to={`/posts/${item.id}`} className='btn btn-outline-secondary'>
          Read more...
        </Link>
      </div>
    </div>
  );
}
