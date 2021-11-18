import React from "react";

function List({ children }) {
  const content = React.Children.map(children, (child, idx) => {
    console.log("[child]", child);
    console.log("[idx]", idx);
    return React.cloneElement(child, {
      a: 1,
    });
  });
  return <div>{content}</div>;
}

function Item(props) {
    console.log('[item - props]', props)
  return <div>item</div>;
}

function Children() {
  return (
    <div>
      <List>
        <Item />
      </List>
      {/* <Test></Test> */}
    </div>
  );
}

export default Children;
