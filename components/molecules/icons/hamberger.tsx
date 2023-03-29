export const HambergerIcon = ({ ...etcProps }) => {
    return (
        <svg
            {...etcProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
        >
            <defs>
                <linearGradient
                    id="prefix__avb"
                    x1="-1.006%"
                    x2="86.641%"
                    y1="-57.183%"
                    y2="228.848%"
                >
                    <stop offset="0%" stop-color="#FFF"></stop>
                    <stop offset="100%" stop-color="#F5F5F5"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#prefix__avb)"
                d="M16.5 16c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-13c-.828 0-1.5-.672-1.5-1.5S2.672 16 3.5 16h13zm0-7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-13c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h13zm0-7.5c.828 0 1.5.672 1.5 1.5S17.328 4 16.5 4h-13C2.672 4 2 3.328 2 2.5S2.672 1 3.5 1h13z"
                transform="translate(5 5)"
            ></path>
        </svg>
    )
}
