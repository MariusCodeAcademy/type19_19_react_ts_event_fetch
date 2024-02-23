import { DummyPostType } from '../../types/types';

type TagsListProps = {
  list: DummyPostType['tags'];
  onClick: (tagValue: string) => void;
};

export default function TagsList({ list, onClick }: TagsListProps) {
  // TODO: make tags different color
  return (
    <>
      <div className='border rounded p-2 my-2 d-inline-flex gap-2'>
        {list.map((tagString) => (
          <span
            onClick={() => onClick(tagString)}
            key={tagString}
            className='badge text-bg-dark pointer'>
            {tagString}
          </span>
        ))}
      </div>
      <br />
    </>
  );
}
