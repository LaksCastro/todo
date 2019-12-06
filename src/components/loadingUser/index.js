import React from "react";

export default ({ img }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            padding: "3rem",
            backgroundColor: "#0B0A0D"
        }}
    >
        <img
            style={{
                filter: "grayscale(100%)",
                opacity: "0.1",
                width: "100%",
                maxWidth: "200px"
            }}
            src={img}
            alt="Loading Svg"
        />
    </div>
);
