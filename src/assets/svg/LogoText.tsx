import React from "react";
import MangoLogo from '../mangoLogo.svg';

interface LogoProps {
  isDark: boolean;
  width: number;
}

const LogoText: React.FC<LogoProps> = ({ width, isDark,}) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img
          src={MangoLogo}
          width={width}
          alt="mango logo"
        />
  );
};

export default React.memo(LogoText, (prev, next) => prev.isDark === next.isDark);
