// url=<FIGMA_UI_KIT>?node-id=36610-7157
// source=src/designsystemet/components/breadcrumbs/Breadcrumbs.tsx
// component=Breadcrumbs
import figma from "figma";
import { child, importFrom, nestedString } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const count = Number(instance.getEnum("count", { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5" }) ?? 3);
const compact = instance.getBoolean("compact");
const levels = Array.from({ length: count }, (_, index) => nestedString(child(instance, `Nivå ${index + 1}`), "Paragraph", "Text", `Level ${index + 1}`));
const parent = levels[levels.length - 2] ?? levels[0];

// In code the back link is shown on small screens and the list on larger screens.
const backLink = `    <Breadcrumbs.Link href="#" aria-label="Back to ${parent}">${parent}</Breadcrumbs.Link>`;
const list = `    <Breadcrumbs.List>
${levels
    .map(
        (level) => `        <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">${level}</Breadcrumbs.Link>
        </Breadcrumbs.Item>`
    )
    .join("\n")}
    </Breadcrumbs.List>`;

export default {
    example: figma.tsx`<Breadcrumbs>
${compact ? backLink : `${backLink}\n${list}`}
</Breadcrumbs>`,
    imports: importFrom("Breadcrumbs"),
    id: "breadcrumbs",
    metadata: { nestable: false }
};
