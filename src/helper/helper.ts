export function getApiData<T>(url: string): Promise<T | void> {
  // susiusti fetch
  return fetch(url)
    .then((resp) => resp.json())
    .then((ats: T) => {
      return ats;
      // console.log('ats ===', JSON.stringify(ats[0]));
    })
    .catch((error: Error) => {
      console.warn('ivyko klaida:', error.message);
    });
}
// export function getPosts1(url: string): Promise<PostObj> {
//   // susiusti fetch
//   return fetch(url)
//     .then((resp) => resp.json())
//     .then((ats: PostObj) => {
//       return ats;
//       // console.log('ats ===', JSON.stringify(ats[0]));
//     })
//     .catch((error: Error) => {
//       console.warn('ivyko klaida:', error.message);
//       return {};
//     });
// }
// export function getPosts11(url: string): Promise<{ id?: number; name?: string }> {
//   // susiusti fetch
//   return fetch(url)
//     .then((resp) => resp.json())
//     .then((ats: { id: number; name: string }) => {
//       return ats;
//       // console.log('ats ===', JSON.stringify(ats[0]));
//     })
//     .catch((error: Error) => {
//       console.warn('ivyko klaida:', error.message);
//       return {};
//     });
// }
