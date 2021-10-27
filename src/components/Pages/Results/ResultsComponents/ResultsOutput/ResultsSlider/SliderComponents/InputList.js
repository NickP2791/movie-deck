import React from "react";

//component used to make up the necessary html for the css to work
const InputList = ({ item, check, handleCheck }) => {
  return (
    <>
      <input
        type='radio'
        name='slider'
        id={item.labelindex}
        checked={item.labelindex === check}
        onChange={(e) => handleCheck(e)}
      />
    </>
  );
};

export default InputList;
