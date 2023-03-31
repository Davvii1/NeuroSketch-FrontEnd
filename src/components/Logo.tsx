import '../styles/components/Logo.css'
import Icon from '../../public/Logo.png'

const Logo = (props: { color: string, logoSize?: string, fontSize?: string }) => {
    return (
        <div className='container'>
            <img src={Icon} id='logo' alt="Logo" style={{ height: props.logoSize || "10.5rem", width: props.logoSize || "10.5rem" }} />
            <h1 id='logoText' style={{ color: props.color, fontSize: props.fontSize || "4rem" }}>NeuroSketch</h1>
        </div>
    )
}

export default Logo;