import React from "react";

const Dashboard = () => {
  const content = {
    title: "JATIN PATEL",
    descripcion: "Hello, My Name Is Jatin Patel. And I Am From Gujarat,Gandhinagar.I am Full Stack Devloper.",
    tag: "#Genral"
  };
  return (
    <div className="min-h-screen  overflow-x-hidden p-20 bg-gray-950">
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-blue-300">
         <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-green-300">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-yellow-300">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-purple-300">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-pink-300">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-gray-300">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-orange-300">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
        <div className="h-96 w-full rounded-lg overflow-hidden  p-3 bg-neutral-100">
          <h3 className="font-bold">{content.title}</h3>  <h5>{content.descripcion}</h5> <h6>{content.tag}</h6>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
