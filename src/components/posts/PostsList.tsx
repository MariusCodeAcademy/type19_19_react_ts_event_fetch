//

import { useEffect, useState } from 'react';
import { DummyPostType, DummyResponseType } from '../../types/types';
import Post from './Post';
import { getApiData } from '../../helper/helper';
import { dummyPostUrl } from '../../config';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState<DummyPostType[] | []>([]);
  const [limtiVal, setLimtiVal] = useState('5');
  const [searchVal, setSearchVal] = useState('');

  console.log('limtiVal ===', limtiVal);
  console.log('searchVal ===', searchVal);
  // 'https://dummyjson.com/posts/search?q=love'
  // "https://dummyjson.com/posts"

  const searchQuery = `/search?q=${searchVal}`;

  console.log('postsArr ===', postsArr.length);

  function handleLimit(e: React.ChangeEvent<HTMLSelectElement>) {
    setLimtiVal(e.target.value);
    console.log('limtiVal handleLimit ===', limtiVal);

    const query = e.target.value === 'all' ? '' : `?limit=${e.target.value}`;

    getApiData<DummyResponseType>(`${dummyPostUrl}${query}`).then((data) => {
      if (!data) return;
      console.log('data ===', data);
      setPostsArr(data.posts);
    });
  }

  function handleSearch() {
    // parsiunciam ir irasom papieskos rezultatus
    getApiData<DummyResponseType>(dummyPostUrl + searchQuery).then((data) => {
      if (!data) return;
      console.log('data ===', data);
      setPostsArr(data.posts);
    });
  }

  useEffect(() => {
    // Bendrinis tipas (generics)
    getApiData<DummyResponseType>(dummyPostUrl).then((data) => {
      if (!data) return;
      console.log('data ===', data);
      setPostsArr(data.posts);
    });
  }, []);

  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h3>Filters</h3>
          <div className='row'>
            <div className='col-md-4 '>
              <label htmlFor='limit'>Limit ({limtiVal})</label>
              <select
                value={limtiVal}
                onChange={handleLimit}
                className='form-select'
                id='limit'
                aria-label='Default select example'>
                <option value='all'>All</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
              </select>
            </div>
            <div className='col-md-4'>
              <label htmlFor='search'>Search ()</label>
              <div className='input-group'>
                <input
                  value={searchVal}
                  onChange={(ev) => setSearchVal(ev.target.value)}
                  type='search'
                  className='form-control'
                  id='search'
                  placeholder='Search here'
                />
                <button
                  onClick={handleSearch}
                  className='btn btn-outline-secondary'
                  type='button'
                  id='button-addon2'>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className='row unlisted mt-4'>
        {postsArr.map((pObj) => (
          <li key={pObj.id} className='col-md-4 col-sm-6'>
            <Post item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// TODO:
// is postsArr atrinkti visus skirtingu tagus string masyvo pavidale
// sugenruoti objektu masyva
// [{id: 1, tag: 'american'}, {id: 2, tag: 'history'}]
