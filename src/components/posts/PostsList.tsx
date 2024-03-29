//

import { useEffect, useState } from 'react';
import { PostObj } from '../../types/types';
import Post from './Post';
import { getApiData } from '../../helper/helper';

const postUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState<PostObj[] | []>([]);
  console.log('postsArr ===', postsArr);
  useEffect(() => {
    // (async () => {
    //   const posts = await getPosts(postUrl);
    //   setPostsArr(posts);
    // })();
    // Bendrinis tipas (generics)
    getApiData<PostObj[]>(postUrl).then((data) => setPostsArr(data || []));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul className='row unlisted'>
        {postsArr.map((pObj) => (
          <li key={pObj.id} className='col-md-4 col-sm-6'>
            <Post item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}
