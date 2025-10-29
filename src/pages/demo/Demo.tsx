

import ColorForm from '../../components/ColorForm'
import ColorList from '../../components/ColorList'
import React from 'react'
import './demo.css'
function Demo() {

    const [color, setColor] = React.useState<string>('');
    return (
        <main className="color-generator">
            <section className="color-panel">
                <h1 >Color Generator</h1>
                <p>Pick a color and explore its shades and tints.</p>

                <ColorForm color={color} setColor={setColor} />

                <button
                    className="btn "
                    onClick={() => setColor("#" + Math.floor(Math.random() * 16777215).toString(16))}
                >
                    Random Color
                </button>
            </section>

            <ColorList color={color} />
        </main>
    )
}

export default Demo
