
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
            if (computedWidth > galleryWidth) {
                curRow = {
                    items: [],
                    height: targetRowHeight,
                };
                rows.push(curRow);

                curRowWidth = 0;
            }
        }

        curRow.items.push(item);
        curRowWidth += computedWidth;
    }

    return rows;
}
