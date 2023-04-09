import { ModalProps } from 'app/interfaces';
import React from 'react';
import { useEffect } from 'react';

const Card = ({
  visible = false,
  content = {
    alt_description: '',
    created_at: '',
    description: '',
    height: 0,
    width: 0,
    tags: [],
    updated_at: '',
    user: { name: '' },
    urls: { full: '', raw: '', regular: '', small: '', small_s3: '', thumb: '' },
  },
  onClose,
}: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  function tags() {
    let str = '';
    content.tags.map((i) => {
      return (str += ` #${i.title}`);
    });
    return str;
  }

  return (
    <div className="wrapper" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <h2 className="desCard">
          {content.description ? content.description : content.alt_description}
        </h2>
        <img className="imgCard" src={content.urls.regular} alt="img"></img>
        <div className="info">
          <p className="size">
            Size: {content.width} X {content.height}
          </p>
          <p className="userName" data-testid="time">
            Autor: {content.user.name}
          </p>
          <p className="created">Created: {content.created_at.slice(0, -10)}</p>
          <p className="updated">Updated: {content.updated_at.slice(0, -10)}</p>
          <p className="tags">Tags: {tags()}</p>
        </div>
        <div className="close" onClick={onClose}>
          ×
        </div>
      </div>
    </div>
  );
};

export default Card;
