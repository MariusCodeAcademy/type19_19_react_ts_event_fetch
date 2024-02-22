import { DummyPostType } from '../../types/types';

type TagsListProps = {
  list: DummyPostType['tags'];
};

export default function TagsList({ list }: TagsListProps) {
  return (
    <div className='border-top p-2 d-flex gap-2'>
      {list.map((tagString) => (
        <span key={tagString} className='badge text-bg-dark'>
          {tagString}
        </span>
      ))}
    </div>
  );
}
