# TypeWriting

TypeWriting is a tiny lightweight JavaScript plugin for adding nice, customizable Typewriting effect using custom HTML5 attributes. This plugin is written in native JavaScript ES6 and does not requires any dependencies!

## Usage

1. 
```html
<script src="js/typewriting.min.js"></script>
```
2. Create an empty `span` tag with class name `typewrite`. You're able to pass the options using the custom HTML5 attributes:

- **data-loop:** Stop the typing loop. Value shoud be `yes` or `no`
- **data-speed:** Typing speed in millisecond. Default value is `100`
- **data-delay:** Time delay after word is complete in millisecond. Default value is `1000`
- **data-words:** Words to add separated by comma i.e. `["...","...","..."]`

```html
<h3>Hey, I'm
    <span class="typewrite" data-loop="yes" data-speed="100" data-delay="1000" data-words='["word 1", "word 2", "word 3"]'></span>
</h3>
```
