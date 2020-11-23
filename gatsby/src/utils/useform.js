import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if value is a number and convert it
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }

    setValues({
      // copy existing values
      ...values,
      // update new values that changed
      [e.target.name]: e.target.value,
    });
  }

  return { values, updateValue };
}
