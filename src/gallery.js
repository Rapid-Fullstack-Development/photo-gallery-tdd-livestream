import { createLayout } from "./layout";

//
// Uncomment this for the full gallery test data.
//
let gallery = require("./gallery.json");

gallery = gallery.map(item => {
    return {
        thumb: item.urls.thumb,
        width: item.width,
        height: item.height,
    };
});

//
// Uncomment this for a single item in the gallery.
//
// const gallery = [
//     {
//         thumb: "https://via.placeholder.com/140x100",
//         width: 140,
//         height: 100,
//     },
// ];

//
// Uncomment this for three items in the gallery.
//
// const gallery = [
//     {
//         thumb: "https://via.placeholder.com/240x200",
//         width: 240,
//         height: 200,
//     },
//     {
//         thumb: "https://via.placeholder.com/220x200",
//         width: 220,
//         height: 200,
//     },
//     {
//         thumb: "https://via.placeholder.com/230x200",
//         width: 230,
//         height: 200,
//     },
// ];

//
// A photo gallery component.
//
export function Gallery() {

    const galleryWidth = 600;
    const targetRowHeight = 200;
    const rows = createLayout(gallery, galleryWidth, targetRowHeight);

    return (
        <div
            style={{
                width: `${galleryWidth}px`,
                border: "solid green 1px",
            }}
            >
            {rows.map((row, rowIndex) => {
                return (
                    <div
                        key={rowIndex}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            height: `${targetRowHeight}px`,
                        }}
                        >
                        {row.items.map(item => {
                            return (
                                <img 
                                    key={item.thumb}
                                    src={item.thumb} 
                                    />
                            );
                        })}
                    </div>
                );
            })}

        </div>
    );
}

