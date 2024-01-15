import React, { FC } from 'react';

import { CardProps } from './Card.types';
import './Card.styles.scss';

const Card: FC<CardProps> = ({ children }) => <div className="card-container">{children}</div>;

export default Card;
