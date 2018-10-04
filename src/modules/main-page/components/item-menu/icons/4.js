import React from 'react';

export const Icon_4 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ isolation: 'isolate' }}
      viewBox="0 0 100 150"
      width="100"
      height="150"
      className={props.className}
    >
      <defs>
        <clipPath id="_clipPath_wYvLpxBlR92tpjWRX8oj37kYL2Y4QIYt">
          <rect width="100" height="150" />
        </clipPath>
      </defs>
      <g clip-path="url(#_clipPath_wYvLpxBlR92tpjWRX8oj37kYL2Y4QIYt)">
        <image
          href="data:image/png;base64,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"
          x="0"
          y="13.798"
          width="100"
          height="122.404"
        />
      </g>
    </svg>
  );
};