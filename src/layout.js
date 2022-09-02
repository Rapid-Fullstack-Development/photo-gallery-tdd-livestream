
//
// Creates a row-based layout for the photo gallery.
//
export function createLayout(items, galleryWidth, targetRowHeight) {
    if (!items || !items.length) {
        return [];
    }

    const rows = [];

    let curRow = {
        items: [],       
        height: targetRowHeight,
    };

    rows.push(curRow);

    let curRowWidth = 0;

    for (const item of items) {

        const aspectRatio = item.width / item.height;
        const computedWidth = targetRowHeight * aspectRatio;

        if (curRow.items.length > 0) {
            if (curRowWidth + computedWidth > galleryWidth) {
                curRow = {
                    items: [],
                    height: targetRowHeight,
                };
                rows.push(curRow);

                curRowWidth = 0;
            }
        }

        //
        // Clone the item so we can modify it without modifying the original.
        //
        const clone = Object.assign({}, item, {
            width: computedWidth,
            height: targetRowHeight,
            aspectRatio: aspectRatio,
        });

        //
        // Add the item to the row.
        //
        curRow.items.push(clone);
        curRowWidth += computedWidth;
    }

    //
    // For all rows, except the last row, stretch the items towards the right hand boundary.
    //
    for (let rowIndex = 0; rowIndex < rows.length-1; rowIndex++) {
        const row = rows[rowIndex];

        let rowWidth = 0; //TODO: This could be cached earlier for better performance.
        for (const item of row.items) {
            rowWidth += item.width;
        }
        
        const gap = galleryWidth - rowWidth;
        const deltaWidth = gap / row.items.length;

        //
        // Expand each item to fill the gap.
        //
        for (const item of row.items) {
            const aspectRatio = item.aspectRatio;

            item.width += deltaWidth;
            item.height = item.width / (1.0 / aspectRatio);
        }
    }

    return rows;
}
