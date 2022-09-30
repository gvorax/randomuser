import React from 'react';
import { Table } from 'antd';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { useEffect } from 'react';

function createRandomUser() {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    midName: faker.name.middleName(),
    sex: faker.name.sexType(),
    phone: faker.phone.imei(),
    // address:faker.address()
  };
}
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Middle Name',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];

const RandomUser = () => {
  const [data, setData] = useState([]);
  faker.setLocale('en_US');
  useEffect(() => {
    setData(() => {
      const user = createRandomUser();
      return {
        ...data,
        user,
      };
    });
  }, []);
  return ;
};

export default RandomUser;
