import { createLayout } from "../layout";

describe("layout", () => {

    test("an empty gallery returns an empty layout", () => {

        const galleryWidth = 600;
        const targetRowHeight = 200;
        const rows = createLayout([], galleryWidth, targetRowHeight);
        expect(rows).toEqual([]);
    });

    test("can layout a gallery with a single item", () => {

        const item = {
            thumb: "https://via.placeholder.com/140x100",
            width: 140,
            height: 100,
        };

        const gallery = [ item ];

        const galleryWidth = 600;
        const targetRowHeight = 200;
        const rows = createLayout(gallery, galleryWidth, targetRowHeight);
        expect(rows).toEqual([
            {
                items: [ item ],
                height: targetRowHeight,
            },
        ]);
    });

    test("can layout a gallery with multiple items", () => {

        const items = [
            {
                thumb: "https://via.placeholder.com/100x200",
                width: 100,
                height: 200,
            },
            {
                thumb: "https://via.placeholder.com/100x200",
                width: 100,
                height: 200,
            },
            {
                thumb: "https://via.placeholder.com/100x200",
                width: 100,
                height: 200,
            },
        ];

        const galleryWidth = 600;
        const targetRowHeight = 200;
        const rows = createLayout(items, galleryWidth, targetRowHeight);
        expect(rows).toEqual([
            {
                items: items,
                height: targetRowHeight,
            },
        ]);
    });

    test("items wrap to the next row on overflow", () => {

        const items = [
            {
                thumb: "https://via.placeholder.com/140x100",
                width: 140,
                height: 200,
            },
            {
                thumb: "https://via.placeholder.com/100x140",
                width: 100,
                height: 200,
            },
            {
                thumb: "https://via.placeholder.com/400x50",
                width: 400,
                height: 200,
            },
        ];

        const galleryWidth = 600;
        const targetRowHeight = 200;
        const rows = createLayout(items, galleryWidth, targetRowHeight);
        expect(rows).toEqual([
            {
                items: [
                    items[0],
                    items[1],
                ],
                height: targetRowHeight,
            },
            {
                items: [
                    items[2],
                ],
                height: targetRowHeight,
            },
        ]);
    });    

});