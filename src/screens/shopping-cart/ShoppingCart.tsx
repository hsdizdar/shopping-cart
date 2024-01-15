import React, { FC, useState } from 'react';

import Card from 'components/card/Card';
import Text from 'components/text/Text';
import Input from 'components/input/Input';
import Select from 'components/select/Select';
import Button from 'components/button/Button';
import { TextTagName } from 'components/text/Text.types';
import { ButtonTypes } from 'components/button/Button.types';

import { shops } from 'services/index';

import { FormData } from './ShoppingCart.types';
import './ShoppingCart.styles.scss';

const ShoppingCart: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    productName: '',
    productOwner: '',
  });

  const options = shops.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('formData', formData);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <Card>
        <Text className="title">Add to cart:</Text>
        <div className="form-content">
          <Input
            name="productName"
            value={formData.productName}
            className="product-name-input"
            placeholder="Name"
            onChange={handleChangeInput}
          />
          <Select
            name="productOwner"
            value={formData.productOwner}
            className="product-owner-select"
            placeholder="Select shop"
            options={options}
            onChange={handleChangeSelect}
          />
          <Button label="Add" type="submit" />
        </div>
        <ul className="list-container">
          {shops.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className={`list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <Text className="product-name" tagName={TextTagName.Span}>
                {item.name}
              </Text>
              <Text className="product-owner-name" tagName={TextTagName.Span}>
                {item.name}
              </Text>
              <Button label="Delete" variant={ButtonTypes.Text} onClick={() => {}} />
            </li>
          ))}
        </ul>
      </Card>
    </form>
  );
};

export default ShoppingCart;
