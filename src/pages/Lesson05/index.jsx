import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  const result = {};

  input.forEach((item) => {
    const bin = String(Math.round(item.y));

    if (!result[bin]) {
      result[bin] = {
        bin: bin,
        男性: 0,
        女性: 0
      };
    }

    result[bin][item.gender] += 1;
  });

  return Object.values(result);
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
