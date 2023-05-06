import { useContext, useEffect } from "react";
import '../styles/components/MessageBox.css';
import { MessageContext } from "../context/MessageContext";

export default function MessageBox() {
  const { message, setMessage } = useContext(MessageContext);

  const timeout = () => {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  useEffect(() => {
    if (message != '') {
      timeout();
    }
  }, [message])

  if (message != '') {
    return (
      <div className="messageBox">
        {message}
      </div>
    );
  }
  return null;
}