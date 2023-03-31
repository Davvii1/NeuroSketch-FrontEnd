import { MouseEventHandler } from 'react';
import '../styles/components/Button.css'

const Button = (props: { width?: string, height?: string, text: string, fontSize?: string, impact?: boolean, onClick?: MouseEventHandler }) => {
    return (
        <button id='button' style={{ width: props.width || '12.5rem', height: props.height || '3.75rem', fontSize: props.fontSize || "1.5rem", fontFamily: props.impact ? 'impact' : 'amontesa' }}
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;