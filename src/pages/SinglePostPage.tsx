import { useEffect, useState } from 'react';
import { PostObj } from '../types/types';
import { getApiData } from '../helper/helper';

const postUrl = 'https://jsonplaceholder.typicode.com/posts/15';

export default function SinglePostPage() {
  // pasiimti currentPosId is routerio
  // parsiusti konkretu posta

  const [currentPost, setCurrentPost] = useState<PostObj | null>(null);

  console.log('currentPost ===', currentPost);

  useEffect(() => {
    getApiData<PostObj>(postUrl).then((post) => {
      // jei post ne void
      if (post) {
        setCurrentPost(post);
      }
    });
  }, []);

  return (
    <div>
      <h1>{currentPost?.title}</h1>
    </div>
  );
}
