import React from 'react';
import { Tooltip, Button } from 'element-react'

function ElementReact() {
  return (
    <div>
       <Tooltip
       visible
      placement="top"
      content={
        <div>多行信息<br/>第二行信息</div>
      }
    >
      <Button>Top center</Button>
    </Tooltip>
    </div>
  );
}

export default ElementReact;
