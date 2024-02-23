import { useEffect, useState } from 'react';
import { DummyPostType } from '../types/types';
import { getApiData } from '../helper/helper';
import { Link, Params, useParams } from 'react-router-dom';
import { dummyPostUrl } from '../config';
import TagsList from '../components/posts/TagsList';

type ParamsType = Readonly<Params<string>> & {
  postId?: string;
};

export default function SinglePostPage() {
  // pasiimti currentPosId is routerio
  const { postId }: ParamsType = useParams();
  // parsiusti konkretu posta

  const [currentPost, setCurrentPost] = useState<DummyPostType | null>(null);

  console.log('currentPost ===', currentPost);

  useEffect(() => {
    getApiData<DummyPostType>(`${dummyPostUrl}/${postId}`).then((post) => {
      // jei post ne void
      if (post) {
        setCurrentPost(post);
      }
    });
  }, [postId]);

  return (
    <div className='container'>
      <h1 className='display-2 my-3'>{currentPost?.title}</h1>
      <p className='lead'>Post Id: {currentPost?.id}</p>
      <p>{currentPost?.body}</p>

      <TagsList list={currentPost?.tags || []} />
      <Link to={'/posts'} className='btn btn-dark'>
        Back to posts
      </Link>
    </div>
  );
}
