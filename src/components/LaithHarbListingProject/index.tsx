import React, { useState } from "react";
import AddToList from "./addToList";
import List from "./list";
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
const LaithHarbListing: React.FC<{}> = () => {
  // const [number, setnumber] = useState<string | number>(0);
  // const [people, setPeople] = useState([
  //   {
  //     name: "James",
  //     url: "",
  //     age: 36,
  //     note: "Allergic to staying in the same team",
  //   },
  //   {
  //     name: "Kobe Bryan",
  //     url: "",
  //     age: 36,
  //   },
  // ]);
  // const [people, setPeople] = useState<{ name: string }[]>([]);
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "James",
      url: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      age: 36,
      note: "Allergic to staying in the same team",
    },
  ]);

  return (
    <>
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </>
  );
};

export default LaithHarbListing;
