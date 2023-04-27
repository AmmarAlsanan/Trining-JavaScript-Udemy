import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  prices: string;

  rates?: number;
}

const CardComponent: React.FC<CardProps> = ({ title, description, image, prices, rates = 3 }) => {
  const rent = React.useMemo(() => {
    return [...Array(5)].map((star, index) => {
      const color = index + 1 <= rates ? 'rgb(234 88 12)' : 'rgb(156 163 175 )';
      return (
        <>
          <svg
            key={index}
            color={color}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 329.942 329.942"
            className="h-4 w-4 fill-current text-center"
          >
            <path
              id="XMLID_16_"
              d="M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10.209l-95.822-13.922l-42.854-86.837
	c-2.527-5.12-7.742-8.362-13.451-8.362c-5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922
	c-5.65,0.821-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,67.582L57.496,305.07
	c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059
	l85.71,45.059c2.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-0.13-2.275-0.376-3.352
	l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132.096,329.208,126.666z"
            />
          </svg>
        </>
      );
    });
  }, [rates]);

  return (
    <React.Fragment>
      <div className=" h-fit flex md:flex-col  bg-gray-300 shadow-lg rounded-lg justify-start md:max-w-md md:w-auto xl:max-w-md xl:w-auto  hover:shadow-md delay-100 duration-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={
            ' bg-cover  md:rounded-t-md md:rounded-r-none w-40 max-w-sm object-cover object-center shadow-md md:max-w-md md:w-auto '
          }
        />
        <div>
          <div className="mt-4 m-2 font-serif font-semibold text-gray-800 text-2xl text-left text-clip text-">
            {title}
          </div>
          <div
            className="text-left  m-2 text-purple-500 font-bold 
        "
          >
            {description}
          </div>
          <div className="text-left  m-2 underline hover:font-bold  hover:delay-100 duration-150 ease-in-out">
            {prices}
          </div>
          <div className="m-2 mt-5 max-w-sm w-full flex items-center">
            {rent}
            <div className="ml-2 items-center text-gray-500 text-sm">(50 reviews )</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Card = React.memo(CardComponent);
