import { PicObjectTypes } from 'app/interfaces';
import React from 'react';

interface Props {
  value: PicObjectTypes;
  key?: number;
  func: React.Dispatch<React.SetStateAction<PicObjectTypes | undefined>>;
}

const SmallImage = (props: Props) => {
  return (
    <img
      className="imgSmall"
      src={props.value.urls.small}
      loading="lazy"
      alt="img"
      onClick={() => props.func(props.value)}
    ></img>
  );
};

export default SmallImage;
