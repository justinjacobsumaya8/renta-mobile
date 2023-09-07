import ContentLoader, { Rect, Circle } from "react-content-loader/native";

export default function LoginLoader({ loading }) {
    if (!loading) {
        return "";
    }

    return (
        <ContentLoader
            backgroundColor={"#cccccc"}
            foregroundColor={"#999"}
            viewBox="0 0 380 70"
        >
            <Circle cx="30" cy="30" r="30" />
            <Rect x="80" y="15" rx="4" ry="4" width="250" height="15" />
            <Rect x="80" y="40" rx="4" ry="4" width="250" height="15" />
        </ContentLoader>
    );
}
