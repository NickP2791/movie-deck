import React from "react";
import InputList from "./SliderComponents/InputList";
import ResultsCard from "./SliderComponents/ResultsCard";
import "./ResultsSlider.css";

const ResultsSlider = (props) => {
  let { isShowcaseGood, check, handleCheck, showcase } = props;

  return (
    <div className='container__slider'>
      <div className='body__slider'>
        <section id='slider'>
          {isShowcaseGood &&
            showcase.map((movie) => (
              <InputList
                key={movie.id}
                item={movie}
                check={check}
                handleCheck={handleCheck}
              />
            ))}
          {isShowcaseGood &&
            showcase.map((movie, index) => (
              <ResultsCard key={movie.id} movie={movie} index={index + 1} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default ResultsSlider;
