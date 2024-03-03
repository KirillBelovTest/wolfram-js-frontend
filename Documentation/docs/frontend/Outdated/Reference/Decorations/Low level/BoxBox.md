---
internal: true
origin: https://github.com/JerryI/wljs-editor/tree/main
---


Used __to decorate__ Wolfram Expression with custom HTML elements

```mathematica
(*BB[*)(expr)(*,*)(*view*)(*]BB*)
```

Most decorations generated by `Frame` and etc...

- the expression is __editable__
- a common WL editor is spawned inside
- only the container of the editor can be decorated or wrapping expression (see [`Head`](#`Head`))

:::tip
See the full guide on them [Decorations](../../../Development/Decorations.md)
:::

There is a helper function to prevent an editor from rendering, if you want to write using this low-level representation

```mathematica
BoxBox[expr_Boxes | _String, decorator_, opts___]
```

it will substitute `expr` into a subeditor and decorate it using `decorator` expression executed on WLJS Interpreter.

## Options

### `Head`
Provides a head symbol of the wrapper expression, that will be hidden from the inner editor. It comes handy when you need to preserve the original from of the expression during the editing

:::tip
Use `Head` option to keep the wrapping expression
:::

## Examples
### Change the display value and call arbitrary WLJS function
This is a dummy example 
```mathematica
special /: MakeBoxes[special, StandardForm] := BoxBox["1+1", Alert["Hi"]]


special
```

### Styling expression using JS
One can define its own style of cells boxes

```js
.js
core.Styler = async (args, env) => {
  env.element.style.boxShadow = "1px 1px 5px black";
}
```

```mathematica
wrapper /: MakeBoxes[wrapper[expr_], StandardForm] := BoxBox[MakeBoxes[expr, StandardForm], Styler, Head->wrapper]
```


and then try

```mathematica
wrapper[1/2]
```

__Result__

![](../../../../../imgs/Screenshot%202023-12-10%20at%2016.59.28.png)

The neat thing is __you can edit the inner expression__

:::note
This is how `Ket`, `Bra` are implemented for instance
:::