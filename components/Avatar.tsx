'use client';

import { scalePath } from "@/utils/svg";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
    defaultSize?: number;
    contentClassName?: string;
}

export default function Avatar({ defaultSize = 250, contentClassName, ...props }: AvatarProps) {

    const [size, setSize] = useState<number>(defaultSize);

    // useEffect(() => {
    //     function handleResize() {
    //         const width = window.innerWidth;

    //         let newSize = defaultSize;
    //         if (width < 1024) newSize = 500;
    //         if (width <= 480) newSize = 200;

    //         setSize(newSize);
    //     }

    //     handleResize();
    //     window.addEventListener("resize", handleResize);

    //     return () => window.removeEventListener("resize", handleResize);
    // }, [defaultSize]);

    return (
        <div {...props}>
            <svg width="0" height="0">
                <defs>
                    <mask id="wavy-circle-mask">
                        <path id="wavy-path" fill="white">
                            <animate
                                attributeName="d"
                                dur="5s"
                                repeatCount="indefinite"
                                values={scalePath(size)}
                            />
                        </path>
                    </mask>
                </defs>
            </svg>

            <div
                className={twMerge("wavy-wrapper select-none", contentClassName)}
                style={{ ["--size" as any]: `${size}px` }}
            >
                <div className="wavy-circle">
                    <img
                        src="/karl.jpeg"
                        alt="Avatar"
                        className={twMerge(
                            "scale-190 translate-y-[90px] translate-x-2.5",
                            size === 500 && "translate-y-[200px]",
                            size === 300 && "translate-y-[110px]",
                        )}
                    />
                </div>

                <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="wavy-border white-border"
                >
                    <path fill="none" stroke="white" strokeWidth="3">
                        <animate
                            attributeName="d"
                            dur="5s"
                            repeatCount="indefinite"
                            values={scalePath(size)}
                        />
                    </path>
                </svg>
            </div>
        </div>
    );
}