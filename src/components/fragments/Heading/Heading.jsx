import React from 'react';

const Heading = ({ title, subtitle, size, highlight, spacing, className }) => {
  return (
    <div className={`${className} flex flex-col transition_all text-gray-500`}>
      <span className={`${size === 3 ? `text-lg sm:text-xl` : size === 2 ? `text-2xl sm:text-4xl` : `text-4xl sm:text-6xl`} font-bold`}>{title}</span>
      {subtitle && highlight ? (
        <span className={`text-base my-4`}>
          <span className={`text-gray-900`}>{subtitle.substr(0, 18)}</span>
          <span className={`text-green-600`}>{subtitle.substr(18, 31)}</span>
        </span>
      ) : (
        <span style={{ marginTop: `${spacing ? `${spacing}px` : '0'}` }} className={`text-base my-2 text-gray-900`}>
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default Heading;
