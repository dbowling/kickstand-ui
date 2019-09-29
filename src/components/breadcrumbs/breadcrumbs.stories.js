import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: "Breadcrumbs" };

const breadcrumbs = [
    {url: '#', text: 'Home'},
    {url: '#', text: 'Products'},
    {url: '#', text: 'Bacon Flavored Toothpaste'},
    {url: '#', text: 'Details'},
];

export const breadcrumb = () => {
    const cssClass = text("css-class", "");
    const element = document.createElement('c-breadcrumbs');
    element.cssClass = cssClass
    element.breadcrumbs = breadcrumbs;
    return element;
};
