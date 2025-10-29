
import Values from "values.js"
import ColorItem from "./ColorItem"
import { useState } from "react";
import './colors-lost.css'

function ColorList({ color }: { color: string }) {


    const colors = color ? new Values(color).all(10) : [];

    if (colors.length === 0) {
        return <div className="colors-list">
            <h3 className="no-color">Please enter a valid color code</h3>
        </div>
    }
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
