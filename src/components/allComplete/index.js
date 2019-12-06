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
        <h1
            style={{
                margin: "1rem 0",
                color: "rgb(60,60,60)",
                letterSpacing: "0.4em"
            }}
        >
            Congratulations!
        </h1>
        <img
            style={{
                filter: "grayscale(100%)",
                opacity: "0.1",
                width: "100%",
                maxWidth: "250px"
            }}
            src={img}
            alt="All Complete! Congratulations!"
        />
    </div>
);
