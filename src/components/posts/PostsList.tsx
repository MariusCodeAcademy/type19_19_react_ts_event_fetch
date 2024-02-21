//

import { useEffect, useState } from 'react';
import { PostObj } from '../../types/types';

const postUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState<PostObj[] | []>([]);
  console.log('postsArr ===', postsArr);
  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    // susiusti fetch
    fetch(postUrl)
      .then((resp) => resp.json())
      .then((ats: PostObj[]) => {
        setPostsArr(ats.slice(0, 15));
        // console.log('ats ===', JSON.stringify(ats[0]));
      })
      .catch((error: Error) => {
        console.warn('ivyko klaida:', error.message);
      });
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul className='row unlisted'>
        {postsArr.map((pObj) => (
          <li className='col-md-4'>
            <div className='card text-bg-light mb-3'>
              <div className='card-header'>Post id: {pObj.id}</div>
              <div className='card-body'>
                <h5 className='card-title'>{pObj.title}</h5>
                <p className='card-text'>{pObj.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
