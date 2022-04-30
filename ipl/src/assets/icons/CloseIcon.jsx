import React from "react";

const CloseIcon = props => {
    const { fill = "#EEE", width = "14", height = "14" } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                cursor: "pointer"
            }}
        >
            <g fill='none' fillRule='evenodd'>
                <path d='M0 0h20v20H0z' />
                <path
                    d='M.487.518c.65-.65 1.705-.65 2.355 0L9.99 7.666 17.137.518a1.665 1.665 0 1 1 2.355 2.355l-7.148 7.147 7.148 7.148a1.665 1.665 0 0 1-2.355 2.355L9.99 12.375l-7.148 7.148a1.665 1.665 0 0 1-2.355-2.355l7.148-7.148L.487 2.873a1.665 1.665 0 0 1 0-2.355z'
                    fill={fill}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default CloseIcon;
