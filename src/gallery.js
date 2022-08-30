const gallery = require("./gallery.json");

export function Gallery() {

    const rows = [];

    let curRow = {
        items: [], 
    };
    rows.push(curRow);

    for (const item of gallery) {
        curRow.items.push(item);
    }

    const galleryWidth = 600;

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
                            height: `200px`,
                        }}
                        >
                        {row.items.map(item => {
                            return (
                                <img 
                                    key={item.urls.thumb}
                                    src={item.urls.thumb} 
                                    />
                            );
                        })}
                    </div>
                );
            })}

        </div>
    );
}