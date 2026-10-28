// url=<FIGMA_UI_KIT>?node-id=34874-41248
// source=src/designsystemet/components/pagination/Pagination.tsx
// component=Pagination
import figma from "figma";
import { importFrom } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const buttonText = instance.getBoolean("button text");
const previous = instance.getBoolean("Previous");
const next = instance.getBoolean("Next");

const previousItem = previous
    ? `
        <Pagination.Item>
            <Pagination.Button {...prevButtonProps} aria-label="Previous page">${buttonText ? "Previous" : ""}</Pagination.Button>
        </Pagination.Item>`
    : "";
const nextItem = next
    ? `
        <Pagination.Item>
            <Pagination.Button {...nextButtonProps} aria-label="Next page">${buttonText ? "Next" : ""}</Pagination.Button>
        </Pagination.Item>`
    : "";

export default {
    example: figma.tsx`const { pages, prevButtonProps, nextButtonProps } = usePagination({
    currentPage,
    setCurrentPage,
    totalPages,
    showPages: 7
});

<Pagination>
    <Pagination.List>${previousItem}
        {pages.map(({ page, itemKey, buttonProps }) => (
            <Pagination.Item key={itemKey}>
                {typeof page === "number" && (
                    <Pagination.Button {...buttonProps} aria-label={"Page " + page}>
                        {page}
                    </Pagination.Button>
                )}
            </Pagination.Item>
        ))}${nextItem}
    </Pagination.List>
</Pagination>`,
    imports: importFrom("Pagination", "usePagination"),
    id: "pagination",
    metadata: { nestable: false }
};
