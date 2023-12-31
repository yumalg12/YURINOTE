import emo_normal from "./img/emo_normal.svg";
import emo_good from "./img/emo_good.svg";
import emo_verygood from "./img/emo_verygood.svg";
import emo_happy from "./img/emo_happy.svg";
import emo_bad from "./img/emo_bad.svg";
import emo_angry from "./img/emo_angry.svg";
import emo_sad from "./img/emo_sad.svg";
import emo_none from "./img/emo_none.svg";
import emo_default from "./img/emo_default.svg";
import { type } from "@testing-library/user-event/dist/type";

export const getIcon = (iconName) => {
    switch (String(iconName)) {
        case "heart":
            return new URL(
                "data:image/svg+xml,%3Csvg width='26' height='23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' overflow='hidden'%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect x='999' y='2001' width='26' height='23'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23clip0)' transform='translate(-999 -2001)'%3E%3Cpath d='M19.2504 0C17.3868 0 15.625 0.558426 14.4167 1.95562 13.6778 2.80998 13.5954 3.09467 13.0001 4.21189 12.4048 3.09467 12.3223 2.80998 11.5834 1.95562 10.3751 0.558426 8.61336 0 6.74975 0 3.02246 0-0.0610134 3.42517 0.000929702 7.64917 0.0214387 9.04804 0.0877111 9.58419 0.893 11.4738 3.02034 16.0728 9.74822 23.036 12.9999 22.9999 13 22.9999 13 22.9999 13.0001 22.9999 13.0001 22.9999 13.0001 22.9999 13.0002 22.9999 16.2519 23.036 22.9798 16.0728 25.1071 11.4738 25.9124 9.58419 25.9787 9.04804 25.9992 7.64917 26.0611 3.42517 22.9777 0 19.2504 0Z' fill='%2399D0FD' fill-rule='evenodd' transform='matrix(-1 0 0 1 1025 2001)'/%3E%3Cpath d='M14.8079 0C13.3743 0 12.0191 0.437026 11.0897 1.53048 10.5213 2.19909 10.4579 2.42189 9.99997 3.29624 9.54206 2.42189 9.47861 2.19909 8.91027 1.53048 7.9808 0.437026 6.6256 0 5.19207 0 2.32495 0-0.046933 2.68055 0.00071515 5.98625 0.0164911 7.08101 0.0674696 7.50061 0.686917 8.97939 2.32332 12.5786 7.49857 18.028 9.99987 17.9998 9.9999 17.9998 9.99994 17.9997 9.99997 17.9997 10 17.9997 10 17.9998 10.0001 17.9998 12.5014 18.028 17.6766 12.5786 19.313 8.97939 19.9325 7.50061 19.9834 7.08101 19.9992 5.98625 20.0469 2.68055 17.675 0 14.8079 0Z' fill='%234D94FD' fill-rule='evenodd' transform='matrix(-1 0 0 1 1022 2004)'/%3E%3Cpath d='M8.88451 0C8.02441 0 7.21131 0.267073 6.65364 0.935297 6.31265 1.3439 6.27458 1.48006 5.99984 2.01438 5.7251 1.48006 5.68703 1.3439 5.34603 0.935297 4.78837 0.267073 3.97527 0 3.11517 0 1.39494 0-0.0281591 1.63812 0.000429079 3.65829 0.00989444 4.32732 0.0404808 4.58374 0.41214 5.48745 1.39396 7.68696 4.49903 11.0172 5.99978 10.9999 5.9998 10.9999 5.99982 10.9999 5.99984 10.9999 5.99986 10.9999 5.99987 10.9999 5.99989 10.9999 7.50064 11.0172 10.6057 7.68696 11.5875 5.48745 11.9592 4.58374 11.9898 4.32732 11.9992 3.65829 12.0278 1.63812 10.6047 0 8.88451 0Z' fill='%234057F6' fill-rule='evenodd' transform='matrix(-1 0 0 1 1018 2008)'/%3E%3C/g%3E%3C/svg%3E"
            );
        case "calendar":
            return new URL(
                "data:image/svg+xml,%3Csvg width='665' height='648' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' overflow='hidden'%3E%3Cg transform='translate(-157 -1371)'%3E%3Cpath d='M167.5 1572.5 811.5 1572.5 811.5 1907.93C811.5 1962.92 766.962 2007.5 712.021 2007.5L266.979 2007.5C212.038 2007.5 167.5 1962.92 167.5 1907.93Z' stroke='%23B4B4B9' stroke-width='20.625' stroke-miterlimit='8' fill='%23F3F3F8' fill-rule='evenodd'/%3E%3Cpath d='M266.979 1435.5 712.021 1435.5C766.962 1435.5 811.5 1479.97 811.5 1534.82L811.5 1572.5 167.5 1572.5 167.5 1534.82C167.5 1479.97 212.038 1435.5 266.979 1435.5Z' stroke='%234057F6' stroke-width='20.625' stroke-miterlimit='8' fill='%234057F6' fill-rule='evenodd'/%3E%3Cpath d='M641.208 1373.5C658.49 1373.5 672.5 1387.61 672.5 1405L672.5 1480C672.5 1497.39 658.49 1511.5 641.208 1511.5 623.926 1511.5 609.916 1497.39 609.916 1480L609.916 1405C609.916 1387.61 623.926 1373.5 641.208 1373.5ZM334.792 1373.5C352.074 1373.5 366.084 1387.61 366.084 1405L366.084 1480C366.084 1497.39 352.074 1511.5 334.792 1511.5 317.51 1511.5 303.5 1497.39 303.5 1480L303.5 1405C303.5 1387.61 317.51 1373.5 334.792 1373.5Z' stroke='%23CDCDCF' stroke-width='4.58333' stroke-miterlimit='8' fill='%23CDCDCF' fill-rule='evenodd'/%3E%3Crect x='620.5' y='1748.5' width='64.9999' height='65' stroke='%234D9DF4' stroke-width='4.58333' stroke-miterlimit='8' fill='%234D9DF4'/%3E%3Cpath d='M620.465 1861.5 685.5 1861.5 685.5 1926.5 620.465 1926.5ZM460.483 1861.5 525.517 1861.5 525.517 1926.5 460.483 1926.5ZM300.5 1861.5 365.534 1861.5 365.534 1926.5 300.5 1926.5ZM460.483 1748.5 525.517 1748.5 525.517 1813.5 460.483 1813.5ZM300.5 1748.5 365.534 1748.5 365.534 1813.5 300.5 1813.5ZM620.465 1635.5 685.5 1635.5 685.5 1700.5 620.465 1700.5ZM460.483 1635.5 525.517 1635.5 525.517 1700.5 460.483 1700.5ZM300.5 1635.5 365.534 1635.5 365.534 1700.5 300.5 1700.5Z' stroke='%23998EA4' stroke-width='4.58333' stroke-miterlimit='8' fill='%239999A0' fill-rule='evenodd'/%3E%3Cpath d='M774.08 1869.5 811.5 1869.5 811.5 1907.18C811.5 1962.03 766.917 2006.5 711.92 2006.5L674.5 2006.5 674.5 1968.82C674.5 1913.97 719.083 1869.5 774.08 1869.5Z' stroke='%23999999' stroke-width='20.625' stroke-miterlimit='8' fill='%239999A0' fill-rule='evenodd'/%3E%3Cpath d='M766.853 1863 804 1863 668 2001 668 1963.04C668 1907.79 712.258 1863 766.853 1863Z' stroke='%23CDCDCF' stroke-width='13.75' stroke-miterlimit='8' fill='%23CDCDCF' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E"
            );
        case "pencil":
            return new URL(
                "data:image/svg+xml,%3Csvg width='594' height='595' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' overflow='hidden'%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect x='280' y='189' width='594' height='595'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23clip0)' transform='translate(-280 -189)'%3E%3Crect x='0' y='0' width='207.014' height='415.519' fill='%237476FF' transform='matrix(-0.707107 0.707107 0.707107 0.707107 554.517 317.724)'/%3E%3Crect x='0' y='0' width='207.014' height='62.6376' fill='%23CDCDCD' transform='matrix(-0.707107 0.707107 0.707107 0.707107 510.225 273.432)'/%3E%3Crect x='0' y='0' width='207.014' height='96.2511' fill='%234057F6' transform='matrix(-0.707107 0.707107 0.707107 0.707107 442.166 205.372)'/%3E%3Cpath d='M0 44.6876C-1.31778e-14 20.0073 20.0073-1.31778e-14 44.6875-1.31778e-14L162.327 0C187.007-1.31778e-14 207.014 20.0073 207.014 44.6876L207.014 44.6876C207.014 69.3679 187.007 89.3752 162.326 89.3752L44.6875 89.375C20.0073 89.375-6.58891e-15 69.3677-6.58891e-15 44.6874Z' fill='%234057F6' fill-rule='evenodd' transform='matrix(-0.707107 0.707107 0.707107 0.707107 408.136 171.343)'/%3E%3Cpath d='M848.333 611.54 873.989 783.577 701.952 757.921Z' fill='%23F5E8C7' fill-rule='evenodd'/%3E%3Cpath d='M867.126 737.56 873.988 783.576 827.972 776.714Z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E"
            );
        case "search":
            return new URL(
                "data:image/svg+xml,%3Csvg width='880' height='885' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' overflow='hidden'%3E%3Cg transform='translate(-2735 -1176)'%3E%3Cpath d='M2960.5 1517C2960.5 1343.86 3100.86 1203.5 3274 1203.5 3447.14 1203.5 3587.5 1343.86 3587.5 1517 3587.5 1690.14 3447.14 1830.5 3274 1830.5 3100.86 1830.5 2960.5 1690.14 2960.5 1517Z' stroke='%23635994' stroke-width='55' stroke-miterlimit='8' fill='%234D9DF4' fill-rule='evenodd'/%3E%3Cpath d='M2898.02 1740.34C2941.46 1696.91 3011.89 1696.91 3055.33 1740.34L3055.33 1740.34C3098.76 1783.78 3098.76 1854.21 3055.33 1897.65L2925.06 2027.92C2881.62 2071.35 2811.19 2071.35 2767.75 2027.92L2767.75 2027.92C2724.32 1984.48 2724.32 1914.05 2767.75 1870.61Z' fill='%23635994' fill-rule='evenodd'/%3E%3Cpath d='M3334 1386.36C3316.05 1352.98 3322.27 1314.75 3347.9 1300.96 3373.54 1287.17 3408.87 1303.05 3426.82 1336.42 3444.78 1369.79 3438.55 1408.02 3412.92 1421.81 3387.29 1435.6 3351.95 1419.73 3334 1386.36Z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E"
            );
        case "delete":
            return new URL(
                "data:image/svg+xml,%3Csvg width='936' height='935' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' overflow='hidden'%3E%3Cg transform='translate(-1409 -1323)'%3E%3Cpath d='M1409 1790.5C1409 1532.31 1618.53 1323 1877 1323 2135.47 1323 2345 1532.31 2345 1790.5 2345 2048.69 2135.47 2258 1877 2258 1618.53 2258 1409 2048.69 1409 1790.5Z' fill='%23D7E0FF' fill-rule='evenodd'/%3E%3Cpath d='M16.4076 445.858C23.6463 446.759 31.0548 443.346 34.9313 436.613L82.6305 353.772 114.702 409.471 109.88 417.845C104.712 426.822 107.779 438.3 116.732 443.483 118.97 444.778 121.364 445.558 123.777 445.858 127.396 446.308 131.058 445.68 134.3 444.098L135.955 442.549 141.696 445.358C144.009 445.979 146.441 446.158 148.854 445.858 151.267 445.558 153.661 444.778 155.899 443.483 164.851 438.3 167.919 426.822 162.75 417.845L157.929 409.471 190 353.772 222.071 409.471 217.25 417.845C212.081 426.822 215.149 438.3 224.101 443.483 228.577 446.074 233.677 446.601 238.304 445.358L243.685 442.725 249.065 445.358C251.379 445.979 253.811 446.158 256.223 445.858 258.636 445.558 261.03 444.778 263.268 443.483 272.221 438.3 275.288 426.822 270.12 417.845L265.298 409.471 297.37 353.772 345.069 436.613C348.946 443.346 356.354 446.759 363.593 445.858 366.006 445.558 368.4 444.778 370.638 443.483 379.59 438.3 382.658 426.822 377.489 417.845L318.983 316.236 351.054 260.537 376.856 305.349 362.036 166.392 351.054 185.464 318.983 129.765 352.012 72.4027 345.267 9.16315 345.069 9.38759 297.37 92.2285 265.298 36.5293 270.12 28.1553C275.288 19.1784 272.221 7.69992 263.269 2.51736L263.269 2.51763C258.792-0.0736553 253.692-0.600451 249.065 0.642883L243.685 3.27526 238.304 0.642883C233.677-0.600184 228.577-0.0736553 224.101 2.51763L224.101 2.51736C215.148 7.70019 212.081 19.1787 217.25 28.1553L222.071 36.5293 190 92.2285 157.929 36.5293 162.751 28.1553C167.919 19.1784 164.852 7.69992 155.899 2.51736L155.899 2.51763C151.423-0.0736553 146.323-0.600451 141.696 0.642883L136.315 3.27553 130.935 0.642883C126.308-0.600184 121.208-0.0736553 116.731 2.51763L116.732 2.51736C107.779 7.69992 104.712 19.1784 109.88 28.1553L114.702 36.529 82.6308 92.2285 34.9313 9.38732 34.7335 9.16235 27.9885 72.4029 61.0174 129.765 28.9459 185.464 17.9643 166.392 3.14375 305.349 28.9461 260.537 61.0176 316.236 2.51112 417.845C-2.65777 426.822 0.409604 438.3 9.36233 443.483 11.6004 444.778 13.9947 445.558 16.4076 445.858ZM82.6305 278.7 50.5593 223 82.6305 167.301 114.702 223 82.6305 278.7ZM136.315 185.464 104.244 129.765 136.315 74.0655 168.387 129.765 136.315 185.464ZM243.685 371.935 211.613 316.236 243.685 260.537 275.756 316.236 243.685 371.935ZM297.37 278.699 265.298 223 297.37 167.301 329.441 223 297.37 278.699ZM136.315 371.935 104.244 316.236 136.315 260.537 168.387 316.236 136.315 371.935ZM190 278.699 157.929 223 190 167.301 222.071 223 190 278.699ZM243.685 185.464 211.613 129.765 243.685 74.0655 275.756 129.765 243.685 185.464Z' fill='%23BFBFBF' fill-rule='evenodd' transform='matrix(1 0 0 -1 1687 2039)'/%3E%3Cpath d='M1650.86 1624.59C1649.26 1610.13 1659.68 1597.11 1674.14 1595.52L1674.14 1595.52C1688.6 1593.92 1701.61 1604.34 1703.21 1618.8L1746.15 2007.29C1747.75 2021.75 1737.33 2034.76 1722.87 2036.36L1722.87 2036.36C1708.41 2037.96 1695.4 2027.53 1693.8 2013.08Z' fill='%23CDCDCD' fill-rule='evenodd'/%3E%3Cpath d='M0 26.3371C0 11.7915 11.7916-1.05876e-14 26.3372-1.41167e-14L26.3372 0C40.8828-7.05837e-15 52.6744 11.7915 52.6744 26.3371L52.6744 417.19C52.6744 431.736 40.8828 443.527 26.3372 443.527L26.3372 443.527C11.7916 443.527-3.5292e-15 431.736 0 417.19Z' fill='%23CDCDCD' fill-rule='evenodd' transform='matrix(-0.993946 -0.109868 -0.109868 0.993946 2106.28 1598.41)'/%3E%3Cpath d='M1634 1604C1634 1585.22 1649.22 1570 1668 1570L2086 1570C2104.78 1570 2120 1585.22 2120 1604L2120 1604C2120 1622.78 2104.78 1638 2086 1638L1668 1638C1649.22 1638 1634 1622.78 1634 1604Z' fill='%23999999' fill-rule='evenodd'/%3E%3Cpath d='M1684 2028C1684 2009.22 1699.22 1994 1718 1994L2036 1994C2054.78 1994 2070 2009.22 2070 2028L2070 2028C2070 2046.78 2054.78 2062 2036 2062L1718 2062C1699.22 2062 1684 2046.78 1684 2028Z' fill='%23999999' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E"
            );
        case "modify":
            return new URL(
                "data:image/svg+xml,%3Csvg width='935' height='936' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' overflow='hidden'%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect x='1263' y='81' width='935' height='936'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23clip0)' transform='translate(-1263 -81)'%3E%3Cpath d='M1263 549C1263 290.531 1472.31 81.0001 1730.5 81.0001 1988.69 81.0001 2198 290.531 2198 549 2198 807.469 1988.69 1017 1730.5 1017 1472.31 1017 1263 807.469 1263 549Z' fill='%23D7E0FF' fill-rule='evenodd'/%3E%3Cpath d='M1774.24 386.895 1898.87 511.524 1648.72 761.681 1524.09 637.051Z' fill='%237476FF' fill-rule='evenodd'/%3E%3Cpath d='M1811.95 349.185 1936.58 473.814 1898.87 511.524 1774.24 386.895Z' fill='%23CDCDCD' fill-rule='evenodd'/%3E%3Cpath d='M1869.9 291.238 1994.53 415.868 1936.58 473.814 1811.95 349.185Z' fill='%234057F6' fill-rule='evenodd'/%3E%3Cpath d='M1871.97 289.169C1886.83 274.311 1910.92 274.311 1925.78 289.169L1996.6 359.992C2011.46 374.85 2011.46 398.94 1996.6 413.798L1996.6 413.798C1981.74 428.657 1957.65 428.657 1942.79 413.798L1871.97 342.976C1857.11 328.117 1857.11 304.027 1871.97 289.169Z' fill='%234057F6' fill-rule='evenodd'/%3E%3Cpath d='M0 119.018 88.1263 0 176.253 119.018Z' fill='%23F5E8C7' fill-rule='evenodd' transform='matrix(0.707107 0.707107 0.707107 -0.707107 1439.93 721.209)'/%3E%3Cpath d='M0 31.835 23.572 0 47.1441 31.835Z' fill-rule='evenodd' transform='matrix(0.707107 0.707107 0.707107 -0.707107 1485.58 766.856)'/%3E%3C/g%3E%3C/svg%3E"
            );
        case "menu":
            return new URL(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%237890E3' class='bi bi-list' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'/%3E%3C/svg%3E"
            );
        default:
            return null;
    }
};

export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId) {
        case "1":
            return emo_normal;
        case "2":
            return emo_good;
        case "3":
            return emo_verygood;
        case "4":
            return emo_happy;
        case "5":
            return emo_bad;
        case "6":
            return emo_angry;
        case "7":
            return emo_sad;
        case "8":
            return emo_default;
        case "0":
            return emo_none;
        default:
            return null;
    }
};

export const emotionList = [
    {
        id: 1,
        name: "평이함",
        img: getEmotionImgById(1),
    },
    {
        id: 2,
        name: "좋음",
        img: getEmotionImgById(2),
    },
    {
        id: 3,
        name: "매우 좋음",
        img: getEmotionImgById(3),
    },
    {
        id: 4,
        name: "행복함",
        img: getEmotionImgById(4),
    },
    {
        id: 5,
        name: "나쁨",
        img: getEmotionImgById(5),
    },
    {
        id: 6,
        name: "매우 나쁨",
        img: getEmotionImgById(6),
    },
    {
        id: 7,
        name: "우울함",
        img: getEmotionImgById(7),
    },
    {
        id: 8,
        name: "기본",
        img: getEmotionImgById(8),
    },
];

export const getFormattedDate = (targetDate, format) => {
    const dateObj = new Date(targetDate);
    const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

    switch (format) {
        case "yyyy-MM-DD":
            let year = dateObj.getFullYear();
            let month = dateObj.getMonth() + 1;
            let date = dateObj.getDate();
            if (month < 10) {
                month = `0${month}`;
            }
            if (date < 10) {
                date = `0${date}`;
            }
            return `${year}-${month}-${date}`;
        case "모월모일모요일":
            return `${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일 ${dayArr[dateObj.getDay()]}요일`;
        case "요일":
          return `${dayArr[dateObj.getDay()]}`;
        }
};

export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const endTimeStamp = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).getTime();
    return { beginTimeStamp, endTimeStamp };
};

export const setPageTitle = (title) => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = title.concat(" ✧ 유리노트");
};
