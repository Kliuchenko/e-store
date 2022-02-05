import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={1}
        width={340}
        height={84}
        viewBox="0 0 340 84"
        backgroundColor="#ffffff"
        foregroundColor="#000000"
        {...props}
    >
        <rect x="11" y="41" rx="3" ry="3" width="474" height="25" />
        <rect x="202" y="-12" rx="3" ry="3" width="37" height="11" />
    </ContentLoader>
)

export default MyLoader

