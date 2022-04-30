import React from "react";

const DownArrow = props => {
    const {
        height = "12",
        width = "12",
        color = "#EEE"
    } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 17 16'
            style={{
                transform: "rotate(90deg)",
                marginRight: "7px",
                cursor: "pointer"
            }}
        >
            <g fill='none' fillRule='evenodd'>
                <path d='M.95 0h16v16h-16z' />
                <path
                    d='M1.406 3.684a1.598 1.598 0 0 1 2.26 0l5.262 5.262 5.263-5.262a1.598 1.598 0 1 1 2.26 2.26l-6.393 6.392a1.598 1.598 0 0 1-2.26 0L1.406 5.944a1.598 1.598 0 0 1 0-2.26z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default DownArrow;
