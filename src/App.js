import React from 'react';
import './App.css';
import { Select, Button } from 'antd';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
const { Option } = Select;

function App() {
  const [state, setState] = useState('en_US');
  const [data, setData] = useState([]);
  const [work, setWork] = useState(false);
  const [arr, setArr] = useState([]);
  const columns = [
    {
      title: 'T/r',
      dataIndex: 't/r',
      key: 'number',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Middle Name',
      dataIndex: 'midname',
      key: 'midname',
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

  $(window).scroll(function () {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 15
    ) {
      setWork(!work);
    }
  });

  useEffect(() => {
    pushArr();
    setData(arr);
  }, [work]);

  const pushArr = () => {
    for (let i = 0; i < 20; i++) {
      arr.push(createRandomUser());
    }
  };
  function createRandomUser() {
    faker.locale = state;
    let city = faker.address.city();
    let streetAddress = faker.address.streetAddress();
    let building = faker.address.buildingNumber();

    let address = `${city} ${streetAddress} ${building} `;

    return {
      _id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      midname: faker.name.middleName(),
      address: address,
      phone: faker.phone.imei(),
      key: faker.datatype.uuid(),
    };
  }

  const handleChange = (value) => {
    setState(value);
    setData([]);
    setArr([]);
    setWork(!work);
  };
  return (
    <div className="App">
      <div className="box">
        <Select
          defaultValue="USA"
          style={{
            width: 120,
          }}
          onChange={handleChange}
        >
          <Option value="en_US">USA</Option>
          <Option value="de">German</Option>
          <Option value="pl">Polish</Option>
        </Select>
        <Button
          type="primary"
          onClick={() => {
            setWork(!work);
          }}
        >
          Render
        </Button>
      </div>
      <div>
        <table className="table" id="table">
          <thead className="table-dark">
            <tr>
              {columns?.map((item, index) => (
                <th key={index}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.midname}</td>
                <td>{item.lastName}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
