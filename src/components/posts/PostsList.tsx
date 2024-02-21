//

import { useEffect, useState } from 'react';
import { PostObj } from '../../types/types';
import Post from './Post';
import { getPosts } from '../../helper/helper';

const postUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState<PostObj[] | []>([]);
  console.log('postsArr ===', postsArr);
  useEffect(() => {
    // (async () => {
    //   const posts = await getPosts(postUrl);
    //   setPostsArr(posts);
    // })();
    getPosts(postUrl).then(setPostsArr);
  }, []);

  // function getPosts() {
  //   // susiusti fetch
  //   fetch(postUrl)
  //     .then((resp) => resp.json())
  //     .then((ats: PostObj[]) => {
  //       setPostsArr(ats.slice(0, 15));
  //       // console.log('ats ===', JSON.stringify(ats[0]));
  //     })
  //     .catch((error: Error) => {
  //       console.warn('ivyko klaida:', error.message);
  //     });
  // }

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
