import React from "react";

export default function AlphaLogo({
  width = 39,
  height = 37,
  ...rest
}: {
  width?: number;
  height?: number;
  color?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.35213 31.6785C2.35213 31.6785 5.23816 33.9068 8.39522 33.8189C12.7638 33.6959 16.8545 29.9042 20.3198 24.763C23.4102 20.1787 26.6613 15.0018 29.0184 11.1596L28.2879 7.3268L37.7816 0L37.7206 12.0116L34.4269 13.6295C31.9924 17.7486 29.5956 21.7419 27.4905 25.0541C23.1093 31.9409 18.4063 36.5175 13.3533 36.8332C12.9604 36.8577 12.5818 36.8693 12.2145 36.8693C4.47266 36.8694 2.35213 31.6785 2.35213 31.6785ZM30.5048 8.05327L31.2217 11.8193L34.7007 4.81449L30.5048 8.05327ZM25.1558 31.6205C26.6515 30.0263 28.1125 28.1181 29.5404 25.9572C29.9346 28.0099 31.7948 32.4963 38.8619 33.6104C38.8619 33.6104 37.8199 35.7329 32.7422 35.8763C32.6629 35.8785 32.5845 35.8797 32.5063 35.8797C28.4001 35.8794 25.8851 32.8249 25.1558 31.6205ZM0 24.0388C0 13.8475 8.66186 4.79051 18.1702 4.79051C25.5406 4.79051 25.6568 10.2 25.6568 10.2C25.6568 10.2 24.7035 8.41468 19.1816 8.41468C11.7608 8.41468 6.26114 17.6576 6.26114 26.764C6.26114 31.459 7.65332 32.3296 7.65332 32.3296C7.65332 32.3296 0 31.291 0 24.0388Z"
        fill="url(#paint0_linear_4105_2738)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4105_2738"
          x1="-7.57806"
          y1="18.4346"
          x2="38.8619"
          y2="18.4346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ED00C9" />
          <stop offset="1" stopColor="#BD00ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}