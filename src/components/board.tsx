import React, { useEffect, useState } from 'react';
import { PicObjectTypes, ResultTypes } from 'app/interfaces';
import Card from './card';
import Image from './image';

interface A {
  props: string;
}

const Board = (props: A) => {
  const [isModal, setModal] = React.useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [loading, setIsLoaded] = useState(false);
  const [items, setItems] = useState<ResultTypes>();
  const [picValue, setPicValue] = useState<PicObjectTypes>();
  const query = localStorage.getItem('search');
  const onClose = () => setModal(false);

  function setVal(v: PicObjectTypes) {
    setPicValue(v);
    setModal(true);
  }

  useEffect(() => {
    setIsLoaded(true);
    fetch(
      `https://api.unsplash.com/search/photos/?page=1&orientation=landscape&query=${query}&client_id=fQqz6U7P1FNyV9b74t3Yyf19ib3mAawCyd7aNYALAak`
    )
      .then((res) => {
        const resp = res.json();
        setStatusCode(res.status);
        return resp as unknown as ResultTypes;
      })
      .then((result) => {
        setItems(result);
        console.log(result);
        setIsLoaded(true);
      });
  }, [props]);

  if (items?.errors) {
    return <div className="error">{...items.errors} {statusCode}</div>;
  } else if (!loading || !items) {
    return <div className="error"> Loading...</div>;
  } else {
    return (
      <div className="cardsBlock" data-testid="1">
        {items.results.map((item, ind) => (
          <Image value={item} key={ind} func={() => setVal(item)} />
        ))}
        <Card visible={isModal} onClose={onClose} content={picValue as PicObjectTypes} />
      </div>
    );
  }
};

export default Board;
