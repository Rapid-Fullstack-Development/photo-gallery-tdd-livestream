
//
// Creates a row based layout for the photo gallery.
//
export function createLayout(gallery) {

    const rows = [];

    let curRow = {
        items: [],
    };
    rows.push(curRow);

    for (const item of gallery) {
        curRow.items.push(item);
    }

    return rows;
}
