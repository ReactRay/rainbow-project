
import Values from "values.js"
import ColorItem from "./ColorItem"
import { useState } from "react";
import './colors-lost.css'

function ColorList() {
    const [colors, setColors] = useState(new Values('#495328').all(10));
    console.log(colors)
    return (
        <div className="colors-list">
            {
                colors.map((color, index) => {
                    return <ColorItem key={index} color={color.hex} index={index} />
                })
            }

        </div >
    )
}

export default ColorList
