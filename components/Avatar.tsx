import { scalePath } from "@/utils/svg";
import { twMerge } from "tailwind-merge";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
    defaultSize?: number;
    contentClassName?: string;
}

export default function Avatar({ defaultSize = 250, contentClassName, ...props }: AvatarProps) {

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
                                values={scalePath(defaultSize)}
                            />
                        </path>
                    </mask>
                </defs>
            </svg>

            <div
                className={twMerge("wavy-wrapper select-none", contentClassName)}
                style={{ ["--size" as any]: `${defaultSize}px` }}
            >
                <div className="wavy-circle">
                    <img
                        src="/karl.jpeg"
                        alt="Avatar"
                        className={twMerge(
                            "scale-190 translate-y-[90px] translate-x-2.5",
                            defaultSize === 500 && "translate-y-[200px]",
                            defaultSize === 300 && "translate-y-[110px]",
                        )}
                    />
                </div>

                <svg
                    width={defaultSize}
                    height={defaultSize}
                    viewBox={`0 0 ${defaultSize} ${defaultSize}`}
                    className="wavy-border white-border"
                >
                    <path fill="none" stroke="white" strokeWidth="3">
                        <animate
                            attributeName="d"
                            dur="5s"
                            repeatCount="indefinite"
                            values={scalePath(defaultSize)}
                        />
                    </path>
                </svg>
            </div>
        </div>
    );
}