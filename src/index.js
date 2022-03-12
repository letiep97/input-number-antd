import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';

const Demo = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <h1>TiepLe</h1>
      <h4>Input type "number": Fix for iOS</h4>
      <input
        onInput={(e) => {
          console.log('input..', e, e.currentTarget.value, e.target.value);
          e.currentTarget?.preventDefault?.();
          setValue('');
        }}
        onKeyDown={(e) => {
          console.log('dasdfsadf', e);
        }}
      />
      <Input
        value={value}
        placeholder="Support: 0-9 e . + -"
        onInput={(e) => {
          // console.log('input..', e, e.currentTarget.value, e.target.value);
          // e.currentTarget?.preventDefault?.();
        }}
        onKeyDown={(e) => {
          // console.log('dasdfsadf', e);
          // const { key } = e;
          // if (!key.match(/[0-9e.+-]/)) {
          //   e.preventDefault();
          // }
        }}
        onChange={(e) => {
          console.log('onChange', e);
          const v = e.target.value;
          if ((v !== null && /^[0-9e.+-]+$/s.exec(v)) || v === '') {
            setValue(v);
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
