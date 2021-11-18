import React, { Component, useState, useEffect, useMemo } from "react";
import ReactDOM, { createPortal } from "react-dom";

class CModal extends Component {
  constructor(props) {
    super(props);
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
    this.state = {
      visible: props.visible,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.visible !== prevState.visible) {
      return {
        visible: nextProps.visible,
      };
    }
    return null;
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  render() {
    const { visible } = this.state;
    return createPortal(visible && <div>123</div>,this.node);
  }
}

CModal.open = () => {
    ReactDOM.render(<CModal visible></CModal>,document.createElement('div'))
}

const modal = () =>  {
    const node = document.createElement('div')

}

function Modal() {
    const [value, setValue] = useState(0)
     const _value = useMemo(() => value, [value])

    const changeValue = () => {
        const _value = value + 1
        setValue(_value)
    }

    useEffect(() => {
        changeValue()
        
    }, [_value])
   


  return (
    <div id="modal">
        <button onClick={() => changeValue()}>change</button>
        <div>{value}</div>
      <button onClick={() => CModal.open()}>打开modal1</button>
    </div>
  );
}

export default Modal;
