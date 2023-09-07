import Svg, { Path } from "react-native-svg";

export default function BarChartIcon({ width, height, color }) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3.81372 11.1254V20.1923C3.81372 20.7211 4.2424 21.1497 4.7712 21.1497H9.5586V11.1254C9.5586 10.5966 9.12992 10.1679 8.60112 10.1679H4.7712C4.2424 10.1679 3.81372 10.5966 3.81372 11.1254Z"
                stroke={color}
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <Path
                d="M20.0909 12.8321H16.2609C15.7321 12.8321 15.3035 13.2607 15.3035 13.7895V21.153H20.0909C20.6197 21.153 21.0483 20.7243 21.0483 20.1955V13.7895C21.0483 13.2607 20.6197 12.8321 20.0909 12.8321Z"
                stroke={color}
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <Path
                d="M9.55859 3.8045V10.1682V21.15H15.3035V3.8045C15.3035 3.27569 14.8748 2.84702 14.346 2.84702H10.5161C9.98727 2.84702 9.55859 3.27569 9.55859 3.8045Z"
                stroke={color}
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </Svg>
    );
}
