import { useEffect, useState } from 'react';
import { PostObj } from '../types/types';
import { getApiData } from '../helper/helper';

const postUrl = 'https://jsonplaceholder.typicode.com/posts/15';

export default function SinglePostPage() {
  // pasiimti currentPosId is routerio
  // parsiusti konkretu posta

  const [currnetPost, setCurrnetPost] = useState<PostObj | null>(null);

  console.log('currnetPost ===', currnetPost);

  useEffect(() => {
    getApiData<PostObj>(postUrl).then((post) => {
      // jei post ne void
      if (post) {
        setCurrnetPost(post);
      }
    });
  }, []);

  return (
    <div>
      <h1>{currnetPost?.title}</h1>
    </div>
  );
}
