import React from "react";
import {
    BoldIcon,
    AlignCenterIcon,
    ColumnsIcon,
    EraserIcon,
    FileTextOIcon,
    HeaderIcon,
    ListIcon,
    OutdentIcon,
    RepeatIcon,
    ScissorsIcon,
    TableIcon,
    ThLargeIcon,
    ChainBrokenLcon,
    AlignJustifyIcon

                } from './';



const Icon = props => {
    switch (props.name.toLowerCase()) {

        case "align-justify":
            return <AlignJustifyIcon {...props} />;
        case "chain-broken":
            return <ChainBrokenLcon {...props} />;
        case "table":
            return <TableIcon {...props} />;
        case "th-large":
            return <ThLargeIcon {...props} />;
        case "bold":
            return <BoldIcon {...props} />;
        case "align-center":
            return <AlignCenterIcon {...props} />;
        case "columns":
            return <ColumnsIcon {...props} />;
        case "eraser":
            return <EraserIcon {...props} />;
        case "file-text-o":
            return <FileTextOIcon {...props} />;
        case "header":
            return <HeaderIcon {...props} />;
        case "list":
            return <ListIcon {...props} />;
        case "outdent":
            return <OutdentIcon {...props} />;
        case "repeat":
            return <RepeatIcon {...props} />;
        case "scissors":
            return <ScissorsIcon {...props} />;



        default:
            return;
    }
};

export default Icon;