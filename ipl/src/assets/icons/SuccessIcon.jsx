import React from "react";

const SuccessIcon = props => {
    const { fill = "#EEE", width = "16", height = "16", backgroundFill = '#A64492' } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g fill='none' fillRule='evenodd'>
                <path
                    d='M8 15.958a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
                    fill={backgroundFill}
                    fillRule='nonzero'
                />
                <path
                    d='M11.695 5.263a1 1 0 0 0-1.402-.012L7 8.544 5.707 7.25a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-.012-1.402z'
                    fill={fill}
                />
            </g>
        </svg>
    );
};

export default SuccessIcon;
