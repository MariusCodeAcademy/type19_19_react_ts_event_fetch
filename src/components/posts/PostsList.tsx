//

import { useEffect, useState } from 'react';
import { DummyPostType, DummyResponseType } from '../../types/types';
import Post from './Post';
import { getApiData } from '../../helper/helper';
import { dummyPostUrl } from '../../config';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState<DummyPostType[] | []>([]);
  console.log('postsArr ===', postsArr);
  useEffect(() => {
    // (async () => {
    //   const posts = await getPosts(postUrl);
    //   setPostsArr(posts);
    // })();
    // Bendrinis tipas (generics)
    getApiData<DummyResponseType>(dummyPostUrl).then((data) => {
      if (!data) return;
      console.log('data ===', data);
      setPostsArr(data.posts);
    });
  }, []);

  return (
    <div>
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
