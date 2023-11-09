import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    teal_50: "bg-teal-50",
    cyan_50: "bg-cyan-50",
    deep_orange_50: "bg-deep_orange-50",
    indigo_50_01: "bg-indigo-50_01",
    gray_100_05: "bg-gray-100_05 shadow-bs",
    blue_300_87: "bg-blue-300_87 text-white-A700",
    blue_50: "bg-blue-50",
    blue_300: "bg-blue-300 text-white-A700",
    blue_50_a2: "bg-blue-50_a2",
    gray_200_79: "bg-gray-200_79",
    gray_100_a2_01: "bg-gray-100_a2_01",
    orange_50: "bg-orange-50 text-amber-600",
    gray_100_a2: "bg-gray-100_a2",
    gray_50_a2: "bg-gray-50_a2",
    light_green_50: "bg-light_green-50 text-green-600",
    gray_50: "bg-gray-50 text-gray-800",
  },
};
const sizes = { xs: "p-[3px]", sm: "p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "teal_50",
    "cyan_50",
    "deep_orange_50",
    "indigo_50_01",
    "gray_100_05",
    "blue_300_87",
    "blue_50",
    "blue_300",
    "blue_50_a2",
    "gray_200_79",
    "gray_100_a2_01",
    "orange_50",
    "gray_100_a2",
    "gray_50_a2",
    "light_green_50",
    "gray_50",
  ]),
};

export { Button };
