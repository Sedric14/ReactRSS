import React, { useState } from 'react';
import { PicObjectTypes } from '../app/interfaces';
import Card from './card';
import SmallImage from './image';
import { useSelector } from 'react-redux';
import { SelectSave } from '../feauters/saveSearchSlice';
import { useGetPostsQuery } from '../feauters/apiSlice';
import Spinner from './spinner';

const Board = () => {
  const [isModal, setModal] = React.useState(false);
  const [picValue, setPicValue] = useState<PicObjectTypes>();
  const query = useSelector(SelectSave).value;
  const onClose = () => setModal(false);

  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery(query);

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (posts?.results.length === 0) {
    content = (
      <div className="wrapNoth" data-testid={'empty'}>
        <div className="nothing">Nothing was found according to your request.</div>
      </div>
    );
  } else if (isSuccess) {
    content = posts.results.map((post, ind) => (
      <SmallImage
        value={post}
        data-testid={ind}
        key={ind}
        func={() => {
          setPicValue(post);
          setModal(true);
        }}
      />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="cardsBlock" data-testid="1">
      {content}
      <Card visible={isModal} onClose={onClose} content={picValue as PicObjectTypes} />
    </div>
  );
};

export default Board;
