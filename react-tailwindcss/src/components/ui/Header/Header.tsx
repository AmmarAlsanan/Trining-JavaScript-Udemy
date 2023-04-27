import React from 'react';

const HeaderComponent: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const StyleMenuItem =
    'hover:border-l-2 hover:border-purple-400 duration-100 delay-100 ease-in h-5  pl-3 mb-3 text-start items-center hover:text-gray-100';
  return (
    <React.Fragment>
      <header className="bg-slate-700 justify-between p-3 rounded-b-md shadow-gray-900 drop-shadow-md text-gray-400">
        <div className="flex justify-between">
          <div className=" font-mono text-purple-400 font-semibold hover:text-purple-200 delay-100 duration-100 ease-in-out">
            logo
          </div>
          <div
            className="delay-100 duration-100 ease-in-out hover:text-gray-200 "
            onClick={() => setIsOpen(!isOpen)}
          >
            menu
          </div>
        </div>
        {isOpen ? (
          <div className="flex-col text-gray-400 pt-3 ">
            <div className={StyleMenuItem}>list your property</div>
            <div className={StyleMenuItem}>Tripes</div>
            <div className={StyleMenuItem}>Messages</div>
          </div>
        ) : null}
      </header>
    </React.Fragment>
  );
};

export const Header = React.memo(HeaderComponent);
