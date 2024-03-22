import React, { useEffect, useState } from "react";
import Person from "./Person";
const PersonController = () => {
  const [person, setPerson] = useState(null);
  const getPerson = async () => {
    try {
      const response = await fetch(`https://www.randomuser.me/api?results=1`);
      const data = await response.json();
      setPerson(data.results[0]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getPerson();
  }, []);
  return <Person person={person} />;
};
export default PersonController;
