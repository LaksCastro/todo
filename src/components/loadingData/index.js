import React from "react";

export default ({ img }) => (
    <div
        style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "2rem 1rem"
        }}
    >
        <img
            style={{
                filter: "grayscale(100%)",
                opacity: "0.1",
                width: "220px",
                minWidth: "50px"
            }}
            src={img}
            alt="Loading Data"
        />
    </div>
);
