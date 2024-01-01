import React from "react";

export default function GradientStar({
  size,
  ...rest
}: {
  size?: number;
  [x: string]: any;
}) {
  return (
    <svg
      width={size ?? 14}
      height={size ?? 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.4068 4.87249H8.94335L7.56313 0.42812C7.38578 -0.142707 6.6136 -0.142707 6.43625 0.42812L5.05713 4.87249H0.593711C0.0198112 4.87249 -0.219218 5.64167 0.24563 5.99455L3.85646 8.74143L2.47734 13.1858C2.29999 13.7566 2.92456 14.2318 3.38941 13.8789L7.00024 11.132L10.6111 13.8789C11.0759 14.2318 11.7005 13.7566 11.5231 13.1858L10.144 8.74143L13.7549 5.99455C14.2186 5.64167 13.9807 4.87249 13.4068 4.87249Z"
        fill="url(#paint0_linear_3686_2194)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3686_2194"
          x1="1.04308e-07"
          y1="7"
          x2="14"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D600B8" />
          <stop offset="0.5" stopColor="#C300CC" />
          <stop offset="1" stopColor="#B100DE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
