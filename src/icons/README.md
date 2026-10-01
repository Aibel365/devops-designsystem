# Icons

## Purpose

This directory houses all custom and/or adapted icons that the library uses.

## Creating and using icons

We are currently using icons from https://fonts.google.com/icons.

To add an icon follow these steps:

1. Create a file with the naming scheme **{customIcon}.jsx.svg** and paste your SVG markup
    - Tip: Prepare your SVG by using a tool such as https://svgomg.net/. Using the "prefer viewbox" option removes inline width and height but keeps the _ratio_ intact. This allows the consumer of the icon component to specify their own dimensions through
      attributes such as width, height or our own custom "size" attribute.

    - Tip: Remove the **fill** attribute on the inner SVG elements such as _path_ and set the outer _svg_ element's fill to "currentColor". This allows the consumer of the icon component to specify their own color through the **color** attribute on the
      React component itself.

2. Create a React component for the icon **{CustomIcon}.tsx**

    ```jsx
    import Custom from "./{customIcon}.jsx.svg";
    import styled from "styled-components";
    import { SvgProps } from "../common/svgProps";
    import { svgMixin } from "../common/svgMixin";

    export const CustomIcon =
        styled(Custom) <
        SvgProps >
        `
      ${svgMixin};
    `;
    ```

3. Add an export of the icon in **./icons/index.ts**

    ```jsx
    export { ViewWeekIcon } from "./view-week/ViewWeekIcon";
    ```

4. Consume your new icon in a component of your choosing

    ```jsx
    import { CustomIcon } from "../../../../icons";

    export const SomeComponent = () => (
        <>
            <p>Shiny new icon below</p>
            <CheckIcon
                size={20}
                color={"green"}
            />
        </>
    );
    ```

## Using inline icons

In some cases one might need to consume an icon (svg) as an inline entity.  
A prime example of this is inside an url-tag in some styling.

```css
.style {
    background: url(customIcon);
}
```

Since this library supports both SVGs as React components and as inline strings we have to handle the latter explicitly.

1. Create a file with the naming scheme {customIcon}.svg and paste your SVG markup
2. Import the icon in your component / style file directly and use it as a string

    ```jsx
    import check from "../../../../icons/custom/customIcon.svg";
    import styled from "styled-components";

    export const SomeStyledComponent = styled.div`
        background: url(${check});
    `;
    ```

## Implementation details

This library uses storybook which in turn uses webpack.  
To deploy the library as a npm package we build it with parcel.  
To support SVGs we need to configure them both, and configure them in such a way that they handle and parse SVGs in the same way.

### Webpack (storybook)

In **./storybook/main.js** you will find a method that configures webpack's support for SVGs.  
In short it removes the original rules for SVGs that webpack has and replaces them with:

- A rule for matching files with a naming scheme of **{customIcon}.svg**
- A rule for matching files with a naming scheme of **{customIcon}.jsx.svg**

### Parcel

In **.parcelrc** you will find a configuration that adds support for the same logic as webpack uses above, through a rule that looks like this:

```json
{
    "transformers": {
        "*.jsx.svg": ["...", "@parcel/transformer-svg-react"]
    }
}
```

### Good to know

- Both the webpack and parcel support for SVGs uses SVGR under the hood
- Duplicating SVGs for inline and component use is the result of not being able to configure webpack and parcel in such a way that they can easily toggle between importing a React component and an inline resource.
    - Parcel supports using pipes such as "import from 'jsx:./yourpath.svg'"
    - Webpack supports using queries scu as "import from './yourpath.svg?jsx'"
    - But they do not support each-others syntax therefore requiring us to choose the middle ground and duplicate files and use different names instead.
