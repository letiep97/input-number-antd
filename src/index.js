import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  return (
    <>
      <h1>TiepLe</h1>
      <h4>Input type "number": Fix for iOS</h4>
      <input
        type="number"
        value={value1}
        onKeyDown={(e) => {
          console.log('onKeyDown', e);
        }}
        onKeyPress={() => {
          console.log('onKeyPress');
        }}
        onInput={(e) => {
          console.log('input:', value1, e.currentTarget.value, e.target.value);
          e.currentTarget?.preventDefault?.();
        }}
        onKeyUp={() => {
          console.log('keyUp');
          setValue1(value1 + 'a');
        }}
      />
      <Input
        type="number"
        value={value}
        placeholder="Support: 0-9 e . + -"
        onInput={(e) => {
          // console.log('input..', e, e.currentTarget.value, e.target.value);
          // e.currentTarget?.preventDefault?.();
        }}
        onKeyUp={(e) => {
          const { key } = e;
          console.log('onKeyUp-key: ', key);

          if (!key.match(/[0-9e.+-]/)) {
            console.log('onKeyUp-key-false');

            e.preventDefault();
            setValue('___IME____');
          }
        }}
        onChange={(e) => {
          console.log('onChange', e);
          const v = e.target.value;
          console.log('onChange-value: ', v);

          if ((v !== null && /^[0-9e.+-]+$/s.exec(v)) || v === '') {
            setValue(v);
          }
        }}
      />
      <h4>Input type "number": Fix for iOS</h4>
      <Input
        value={value2}
        type="number"
        placeholder="Support: 0-9 e . + -"
        onKeyDown={(e) => {
          const { key } = e;
          if (!key.match(/[0-9e.+-]/)) {
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          const v = e.target.value;
          if ((v !== null && /^[0-9e.+-]+$/s.exec(v)) || v === '') {
            setValue2(v);
          }
        }}
      />
    </>
  );
};

ReactDOM.render(
  <>
    <Demo />
  </>,
  document.getElementById('container')
);
