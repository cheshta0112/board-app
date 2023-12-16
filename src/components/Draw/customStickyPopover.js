import React, { useState } from "react";
import { Popover } from "react-bootstrap";
import { BsSquare } from "react-icons/bs";
import { DrawingColors } from "../../utils/DrawingColor";

const CustomStickyPopover = ({ setSelectedColor }) => {
  const [selectedShape, setSelectedShape] = useState(null);

  return (
    <Popover id="popover-basic">
      <Popover.Body>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {DrawingColors.map((color) => (
            <div
              key={color.color}
              onClick={() => setSelectedColor(color.color)}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
              }}
              style={{
                backgroundColor: color.color,
                width: "30px",
                height: "30px",
                margin: "6px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                transition: "box-shadow 0.3s ease",
              }}
              title={color.title}
            ></div>
          ))}
        </div>
      </Popover.Body>
    </Popover>
  );
};

export default CustomStickyPopover;
