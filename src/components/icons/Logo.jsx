import { useContext } from "react";
import ColorThemeContext from "../../lib/context/colorThemeContext";

export const Logo = () => {
  const {setColorTheme} = useContext(ColorThemeContext)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96.336"
      height="20.506"
      viewBox="0 0 94.336 22.506"
    >
      <g fillRule="evenodd">
        <path
          fill="#e34ba9"
          d="M13.477 4.537V0H4.492v4.492H0v13.522h4.492v4.492h8.985v-4.492h4.492V9.029H8.984v4.492h4.493v4.493H4.492V4.537h8.985z"
          vectorEffect="non-scaling-stroke"
          onMouseEnter={() => setColorTheme("pink")}
        />
        <path
          fill="#ff802b"
          d="M26.953 22.506h-4.492V4.537h4.492V.045h8.985v4.492h4.492v17.969h-4.492v-8.985h-8.985v8.985zm0-17.969v4.492h8.985V4.537h-8.985z"
          vectorEffect="non-scaling-stroke"
          onMouseEnter={() => setColorTheme("orange")}
        />
        <path
          fill="#3cb179"
          d="M49.414.045h-4.492v17.969h4.492v4.492h8.984v-4.492h4.493V.045h-4.493v17.969h-8.984V.045z"
          vectorEffect="non-scaling-stroke"
          onMouseEnter={() => setColorTheme("green")}
        />
        <path
          fill="#369eff"
          d="M71.875 22.506h-4.492V.045h13.476v4.492h4.493v4.492h-4.493v4.492h-8.984v8.985zm8.984-17.969v4.492h-8.984V4.537h8.984zm0 8.984h4.493v8.985h-4.493v-8.985z"
          vectorEffect="non-scaling-stroke"
          onMouseEnter={() => setColorTheme("blue")}
        />
        <path
          fill="#8e4ec6"
          d="M89.844 22.506V.045h4.492v22.461h-4.492z"
          vectorEffect="non-scaling-stroke"
          onMouseEnter={() => setColorTheme("purple")}
        />
      </g>
    </svg>
  );
};
