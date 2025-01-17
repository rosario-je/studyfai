/* eslint-disable react/prop-types */

const FeaturesBox = (props) => {
  const { subtitle, title, description } = props;
  return (
    <div className="features-box w-full md:max-w-[370px] text-center">
      <div className="flex flex-col h-[230px] tracking-tight text-xs ">
        <h3 className="text-accentTxt tracking-tight pb-7 font-medium">
          {subtitle}
        </h3>
        <h2 className="tracking-tight text-2xl pb-6 font-bold">{title}</h2>
        <p className="self-center tracking-tight text-secondaryTxt text-[12px] w-[80%] md:w-[300px]">
          {description}
        </p>
      </div>
      <div className="img-box flex justify-center">
        <div className="justify-center w-[370px] h-[370px] bg-zinc-400"></div>
      </div>
    </div>
  );
};

export default FeaturesBox;
