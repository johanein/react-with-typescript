import React, { useState } from "react";
import { IState as props } from "./index";

interface IState {
  input: {
    name: string;
    age: number;
    url: string;
    note?: string;
  };
}

interface IProps {
  people: props["people"];
  setPeople: React.Dispatch<React.SetStateAction<props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const initialState: IState["input"] = {
    name: "",
    age: 0,
    url: "",
    note: "",
  };
  const [input, setInput] = useState<IState["input"]>(initialState);

  // get the type of function by hovering after writing a inline function
  // get the element type by hovering over onchange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput((c) => ({
      ...c,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (): void => {
    if (!Object.values(input).some((value) => !value)) {
      setPeople([...people, input]);
      setInput(initialState);
    }
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          placeholder="Age"
          className="AddToList-input"
          value={input.age}
          onChange={handleChange}
          name="age"
          id="age"
        />
      </div>
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
