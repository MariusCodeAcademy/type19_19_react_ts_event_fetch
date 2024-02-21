import { PostObj } from '../types/types';

export function getPosts(url: string): Promise<PostObj[]> {
  // susiusti fetch
  return fetch(url)
    .then((resp) => resp.json())
    .then((ats: PostObj[]) => {
      return ats;
      // console.log('ats ===', JSON.stringify(ats[0]));
    })
    .catch((error: Error) => {
      console.warn('ivyko klaida:', error.message);
      return [];
    });
}
