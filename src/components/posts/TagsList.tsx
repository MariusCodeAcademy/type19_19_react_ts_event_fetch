import { DummyPostType } from '../../types/types';

type TagsListProps = {
  list: DummyPostType['tags'];
};

export default function TagsList({ list }: TagsListProps) {
  // TODO: make tags different color
  return (
    <>
      <div className='border rounded p-2 my-2 d-inline-flex gap-2'>
        {list.map((tagString) => (
          <span key={tagString} className='badge text-bg-dark'>
            {tagString}
          </span>
        ))}
      </div>
      <br />
    </>
  );
}
