import React from "react";
import Card, { CardProps } from "../_components/Card";


type Props = {
  projects?: CardProps[];
};

// type Project = {
//   nama: string;
//   img: string;
//   description?: String;
//   type?: String;
// };

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-4">
      {projects?.map((_, index) => (
        <Card key={index} {..._}></Card>
      ))}
    </div>
  );
};

export default ProjectList;