import React from "react";

const sizeClasses = {
  txtPromptMedium16: "font-medium font-prompt",
  txtPromptRegular16Gray700: "font-normal font-prompt",
  txtPromptMedium14: "font-medium font-prompt",
  txtPromptRegular15Gray800: "font-normal font-prompt",
  txtPromptMedium14Red30002: "font-medium font-prompt",
  txtPromptRegular14Gray800: "font-normal font-prompt",
  txtPromptRegular16LightblueA700: "font-normal font-prompt",
  txtPromptMedium16Blue300: "font-medium font-prompt",
  txtPromptRegular14Green600: "font-normal font-prompt",
  txtMontserratMedium6: "font-medium font-montserrat",
  txtPromptMedium18Gray800: "font-medium font-prompt",
  txtPromptMedium16Gray700: "font-medium font-prompt",
  txtPromptRegular14Lime700: "font-normal font-prompt",
  txtPromptMedium14Gray800: "font-medium font-prompt",
  txtPromptMedium18: "font-medium font-prompt",
  txtPromptSemiBold45: "font-prompt font-semibold",
  txtPromptMedium20Gray800: "font-medium font-prompt",
  txtPromptMedium16RedA700: "font-medium font-prompt",
  txtPromptMedium9: "font-medium font-prompt",
  txtPromptMedium22: "font-medium font-prompt",
  txtPromptRegular14Gray50001: "font-normal font-prompt",
  txtPromptMedium9Bluegray300: "font-medium font-prompt",
  txtPromptMedium20: "font-medium font-prompt",
  txtPromptRegular14: "font-normal font-prompt",
  txtPromptRegular16Red500: "font-normal font-prompt",
  txtPromptRegular14RedA200: "font-normal font-prompt",
  txtPromptRegular18: "font-normal font-prompt",
  txtPromptMedium14Green200: "font-medium font-prompt",
  txtPromptRegular16: "font-normal font-prompt",
  txtPromptRegular15: "font-normal font-prompt",
  txtPromptSemiBold35: "font-prompt font-semibold",
  txtPromptSemiBold18: "font-prompt font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
