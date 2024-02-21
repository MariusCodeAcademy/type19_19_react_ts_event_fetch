//

import { useEffect, useState } from 'react';

const postUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    // susiusti fetch
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul className='list-group'>
        <li className='list-group-item'>post 1</li>
      </ul>
    </div>
  );
}
