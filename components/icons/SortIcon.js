import Svg, { Path } from "react-native-svg";

export default function SortIcon({ width, height }) {
    return (
        <Svg
            fill="#000000"
            width={width}
            height={height}
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1539.045 215.441v1249.74l299.206-299.206L1920 1247.84l-438.966 438.966-438.85-438.966 81.864-81.865 299.206 299.206V215.44h115.791ZM438.966 160l438.967 439.082-81.865 81.749-299.206-299.206v1249.74H381.186V381.625L81.981 680.831 0 599.082 438.966 160Z"
                fillRule="evenodd"
            />
        </Svg>
    );
}
