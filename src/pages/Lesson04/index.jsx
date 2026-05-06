import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  return [
    {
      id: "setosa",
      data: input
        .filter((item) => item.species === "setosa")
        .map((item) => {
          return {
            x: item.sepalLength,
            y: item.petalWidth
          };
        })
    },
    {
      id: "versicolor",
      data: input
        .filter((item) => item.species === "versicolor")
        .map((item) => {
          return {
            x: item.sepalLength,
            y: item.petalWidth
          };
        })
    },
    {
      id: "virginica",
      data: input
        .filter((item) => item.species === "virginica")
        .map((item) => {
          return {
            x: item.sepalLength,
            y: item.petalWidth
          };
        })
    }
  ];
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
