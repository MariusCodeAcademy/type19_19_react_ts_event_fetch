//

import { useEffect, useState } from 'react';
import { DummyPostType, DummyResponseType } from '../../types/types';
import Post from './Post';
import { getApiData } from '../../helper/helper';
import { dummyPostUrl } from '../../config';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState<DummyPostType[] | []>([]);
  const [limtiVal, setLimtiVal] = useState('all');
  const [searchVal, setSearchVal] = useState('');

  // gaunam visus tagus
  const differentTags: { id: number; value: string }[] = postsArr
    .map((pObj) => pObj.tags)
    .flat()
    .reduce((diffArr, strTag, idx) => {
      if (!diffArr.some((obj) => obj.value === strTag)) {
        diffArr.push({
          id: idx,
          value: strTag,
        });
      }
      return diffArr;
    }, [] as { id: number; value: string }[]);
  console.log('differentTags ===', differentTags);

  // jei paduota reikme is selecto yra 'all' tai filteredPostArr === postsArr kitu atveju filtruojam
  // ternary salyga ? 'true' : 'false'
  const filteredPostArr: DummyPostType[] =
    limtiVal === 'all' ? postsArr : postsArr.filter((pObj) => pObj.id <= Number(limtiVal));

  // Search by title logic
  const postsAfterSearch: DummyPostType[] = filteredPostArr.filter((pObj) =>
    pObj.title.includes(searchVal),
  );

  console.log('postsArr ===', postsArr);
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
                onChange={(e) => setLimtiVal(e.target.value)}
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
              <label htmlFor='search'>Search ({postsAfterSearch.length})</label>
              <div className='input-group'>
                <input
                  value={searchVal}
                  onChange={(ev) => setSearchVal(ev.target.value)}
                  type='search'
                  className='form-control'
                  id='search'
                  placeholder='Search here'
                />
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
                  Search
                </button>
              </div>
            </div>
            <div className='col-md-4 '>
              <label htmlFor='tags'>Tags ()</label>
              <select
                value={limtiVal}
                onChange={(e) => setLimtiVal(e.target.value)}
                className='form-select'
                id='tags'
                aria-label='Default select example'>
                <option value='all'>All</option>
                {differentTags.map((tObj) => (
                  <option key={tObj.id} value={tObj.value}>
                    {tObj.value.charAt(0).toUpperCase()}
                    {tObj.value.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <ul className='row unlisted mt-4'>
        {postsAfterSearch.map((pObj) => (
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
