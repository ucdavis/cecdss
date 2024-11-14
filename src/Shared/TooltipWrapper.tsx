import React, { useState } from 'react'
import { Tooltip } from 'reactstrap'

const args = {
  autohide: true,
  flip: true,
};


interface TooltipWrapperProps {
    target: string;
    text: string;
}

const TooltipWrapper = ({ target, text }: TooltipWrapperProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip {...args} placement='left' target={target} isOpen={tooltipOpen} toggle={toggle} style={{ backgroundColor: "#f2f1ed", color: "#222", fontSize: '10px', marginRight: '5px' }}>
        {text}
    </Tooltip>
  )
}

export default TooltipWrapper