import { useState } from "react"
import Buttons from "./Buttons"
import Toolbar from "./Toolbar"

const Canvas = () => {
    const [tool, selectTool] = useState<string>("pencil");
    return (
        <div className="w-screen h-screen">
            <Toolbar tool={tool} selectTool={selectTool} />
            <Buttons />
        </div>
    )
}

export default Canvas;  