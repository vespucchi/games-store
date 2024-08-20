import ContentLoader from "react-content-loader";

const SkeletonLoader = () => (
    <ContentLoader
        speed={1}
        width='100%'
        height='100%'
        backgroundColor="#f3f3f31a"
        foregroundColor="#f3f3f328"
    >
        <rect x="4" y="16" rx="0" ry="0" width={`calc(100% * 0.3)`} height="75" />
        <rect x="25" y="120" rx="0" ry="0" width={`calc(100% * 0.75)`} height="500" />
        <rect x={`calc(100% * 0.15)`} y="640" rx="0" ry="0" width={`calc(100% * 0.5)`} height="100" />
        <rect x={`calc(100% * 0.80)`} y="120" rx="0" ry="0" width={`calc(100% * 0.20)`} height="450" />
    </ContentLoader>
)

export default SkeletonLoader;
