import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/card/Card';
import Text from 'components/text/Text';
import Input from 'components/input/Input';
import Select from 'components/select/Select';
import Button from 'components/button/Button';
import { TextTagName } from 'components/text/Text.types';
import { ButtonTypes } from 'components/button/Button.types';

import { RootState } from 'src/store/reducers';
import { addToCart, removeFromCart } from 'src/store/reducers/shopCartReducer';

import { ShopCartType } from './ShoppingCart.types';
import './ShoppingCart.styles.scss';
import { Shop, getShops } from 'services/index';

const ShoppingCart: FC = () => {
  const dispatch = useDispatch();
  const shopCartItems = useSelector((state: RootState) => state.shopCart.items);

  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [options, setOptions] = useState<Shop[]>([]);
  const [formData, setFormData] = useState<ShopCartType>({
    id: 0,
    productName: '',
    shop: undefined,
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setIsLoading(true);
    const shops = await getShops();
    setIsLoading(false);
    setOptions(shops);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedShop = options.find((shop) => shop.id === e.target.value);
    setFormData({
      ...formData,
      shop: selectedShop,
    });
  };

  const handleDelete = (item: ShopCartType) => {
    dispatch(removeFromCart(item.id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.productName && formData.shop) {
      setShowError(false);
      dispatch(addToCart(formData));
      setFormData({
        id: formData.id + 1,
        productName: '',
        shop: undefined,
      });
    } else {
      setShowError(true);
    }
  };

  if (isLoading) {
    return <Text className="loading">Loading...</Text>;
  }

  return (
    <div className="container">
      <Card>
        <Text className="title">Add to cart:</Text>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <Input
              name="productName"
              value={formData.productName}
              className="product-name-input"
              placeholder="Name"
              onChange={handleChangeInput}
            />
            <Select
              name="shop"
              value={formData.shop ? formData.shop.id : ''}
              className="product-owner-select"
              placeholder="Select shop"
              options={options}
              onChange={handleChangeSelect}
            />
            <Button label="Add" type="submit" />
          </form>
        </div>
        {showError ? (
          <Text className="error-message">The above fields are required, please fill them in.</Text>
        ) : null}
        <ul className="list-container">
          {[...shopCartItems]
            .sort((a, b) => a.shop.sortOrder - b.shop.sortOrder)
            .map((item, index) => (
              <li
                key={`${item.shop.id}-${index}`}
                className={`list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
              >
                <div className="column">
                  <Text className="product-name" tagName={TextTagName.Span}>
                    {item.productName}
                  </Text>
                </div>
                <div className="column">
                  <Text className="product-owner-name" tagName={TextTagName.Span}>
                    {item.shop.name}
                  </Text>
                </div>
                <div className="column">
                  <Button
                    label="Delete"
                    variant={ButtonTypes.Text}
                    onClick={() => handleDelete(item)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </Card>
    </div>
  );
};

export default ShoppingCart;
