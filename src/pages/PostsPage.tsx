import PostsList from '../components/posts/PostsList';

function PostsPage() {
  return (
    <div className='container'>
      <h1 className='display-2 my-3'>Posts Page</h1>
      <button className='btn btn-dark'>Click here</button>
      <PostsList />
    </div>
  );
}

export default PostsPage;
