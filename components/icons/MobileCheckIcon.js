import Svg, { Path, Polygon, Rect } from "react-native-svg";

export default function MobileCheckIcon({ width, height, color }) {
    return (
        <Svg
            fill="#000000"
            width={width}
            height={height}
            viewBox="0 0 32 32"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Polygon points="20 27.18 17.41 24.59 16 26 20 30 28 22 26.59 20.59 20 27.18" />
            <Path d="M10,28V10H22v9h2V6a2.0023,2.0023,0,0,0-2-2H10A2.002,2.002,0,0,0,8,6V28a2.0023,2.0023,0,0,0,2,2h4V28ZM10,6H22l0,2H10Z" />
            <Rect
                id="_Transparent_Rectangle_"
                data-name="&lt;Transparent Rectangle&gt;"
                class="cls-1"
                width="32"
                height="32"
                fill="none"
            />
        </Svg>
    );
}
