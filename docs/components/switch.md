---
{
    "description": "Kickstand UI's switch component is an interactive element used to toggle features or settings 'on' or 'off' or to activate or deactivate something.",
    "meta": [
        {
            "property": "og:title",
            "content": "Switch Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/switch.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's switch component is an interactive element used to toggle features or settings 'on' or 'off' or to activate or deactivate something."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/switch.png"
        }
    ]
}
---

# Switch

A switch is an interactive element used to toggle features or settings "on" or "off" or to activate or deactivate something. A switch can be a stand-alone control or can be grouped with other controls such as form field or other switches, but they are independent from the other controls.

:::tip Note
A switch is not an alternative to a [checkbox](/components/form-field.html#checkbox) or [radio button](/components/form-field.html#radiolist).
:::

<div class="my-xl">
    <ks-switch label="Show Pricing"></ks-switch>
</div>

```html
<ks-switch label="Show Pricing"></ks-switch>
```

## Checked

<div class="my-xl">
    <ks-switch label="Show Pricing" checked></ks-switch>
</div>

```html
<ks-switch label="Show Pricing" checked></ks-switch>
```

## Disable

<div class="my-xl">
    <ks-switch label="Disabled Switch" disable></ks-switch><br>
    <ks-switch label="Disabled Checked Switch" disable checked></ks-switch>
</div>

```html
<ks-switch label="Disabled Switch" disable></ks-switch><br>
<ks-switch label="Disabled Checked Switch" disable checked></ks-switch>
```

## Utilities

If you need to customize the layout or placement of the label, this component works well with the [flex layout utilities](../layout/flex-box.md).

<div class="my-xl">
    <ks-switch label="Show Pricing" class="flex-row-reverse space-between w-100"></ks-switch>
</div>

```html
<ks-switch label="Show Pricing" class="flex-row-reverse space-between w-100"></ks-switch>
```

## Getting Values

```html
<ks-switch label="Show Pricing" id="pricing"></ks-switch>
<script>
    const $switch = document.getElementById('pricing');
    $switch.addEventListener('updated', function (event) {
        const value = event.detail.value;
        // do something awesome
    });

    // using DOM utils
    $('pricing').on('updated', function (event) {
        const value = event.detail.value;
        // do something awesome
    });
</script>
```

The data coming back from the event on the `event.detail` is an object with a `name` (for identification purposes) and the `value` (`true` or `false`).

```ts
{
    name: string,
    value: boolean
}
```

The `name` will use the `name` property value. If one is not provided, it will derive a name from the label.

## Accessibility

This component is made up of a `label` and a button with the ARIA `switch` role. The ARIA switch role is functionally identical to the checkbox role, except that instead of representing "checked" and "unchecked" states, the switch role represents the states "on" and "off".

The `label` uses the `for` attribute to associate it with the button, but the button also uses `aria-labelledby` attribute so assistive technologies use the label when describing the switch.

## Properties

| Property  | Attribute | Description | Type      | Default     |
| --------- | --------- | ----------- | --------- | ----------- |
| `checked` | `checked` | A way to pass in a value to the component            | `boolean` | `false`     |
| `disable` | `disable` | Disables the component            | `boolean` | `false`     |
| `label`   | `label`   | The label used to describe the component            | `string`  | `undefined` |
| `name`    | `name`    | A custom name used to identify the component data            | `string`  | `undefined` |

## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `updated` | an event that fires every time the switch gets clicked            | `CustomEvent<{name: string, value: boolean}>` |