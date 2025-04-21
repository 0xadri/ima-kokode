import { useState } from "react";

const Playground = () => {
  const [students, setStudents] = useState(["Max", "Lauren", "Marc"]);

  const handleClickAdd = (name) => {
    setStudents((students) => [...students, name]);
  };
  const handleClickRemove = (name) => {
    setStudents((students) => {
      const index = students.indexOf(name);
      if (index > -1) return students.splice(index, 1);
    });
  };

  //   handleClickRemove("Max");
  //   console.log(students);
  return <div>Playground</div>;
};

export default Playground;
