import React from "react";
import { useLocalStore, useObserver } from "mobx-react";



function Mobx() {
  const store = useLocalStore(() => ({
    value: 1,
    changeValue(value) {this.value = value}
  }))
  const { changeValue } = store
  return useObserver(() => <div>value:{store.value}<button onClick={() => changeValue(2)}>change</button></div>);
}

export default Mobx;