"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
const DarkModeButton = () => {
  const [mounted, SetMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    SetMounted(true);
  }, []);
  const themeMode = theme === "system" ? systemTheme : theme;
  return (
    <div className="cursor-pointer">
      {mounted &&
        (themeMode === "dark" ? <CiLight onClick={()=>setTheme('light')} size={25} />  : <CiDark onClick={()=>setTheme('dark')} size={25} />)}
    </div>
  );
};

export default DarkModeButton;
