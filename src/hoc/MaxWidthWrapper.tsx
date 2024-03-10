import React from "react"

const MaxWidthWapper = ({
    className,
    children
}: {
    className?: string;
    children: React.ReactNode
}) => {
    return (
        <div className={`mx-auto w-full max-w-screen-2xl ${className}`}>
            {children}
        </div>
    )
}

export default MaxWidthWapper