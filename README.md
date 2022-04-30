# react-responsive-props

Is a simple library on top of react-responsive that allows to change component props based on breakpoints

## Installation

```
yarn add @rodjosh/react-responsive-props
```

## Usage

```
import { useResponsive } from "@rodjosh/react-responsive-props"

const Text = ({children}) => {
    return <h1>{children}</h1>
}

const App = () => {
    const responsiveComponent = useResponsive();
    
    const ResponsiveText = responsiveComponent<typeof Text>(Text, {
        sm: {
            children: 'Larger phone'
        },
        md: {
            children: 'Tablet'
        },
        lg: {
            children: 'Desktop'        
        },
        xl: {
            children: 'Large Desktop
        }
    });

  return (
    <div>
        <ResponsiveText>
            Phone (Default)
        </ResponsiveText>
    </div>
  );
};
```

To use this library you need to import the `useResponsive` hook, it'll return another function that will create a HOC for the component, in the arguments of the returned function you can pass the desired property per breakpoint. `The passed property when called on the JSX is the default one (whenever is an attribute or a children)`

### useResponsive

The useResponsive hook takes one optional argument, an object with the breakpoints sizes, if no object is passed then it uses the default breakpoints. The breakpoints sizes are in pixels (px). Example:

``` 
useResponsive({
  sm: 320,
  md: 481,
  lg: 769,
  xl: 1025
});
```

### responsiveComponent

This is the returned function of the hook, the name is optional and you can change it at your will. It takes 2 arguments (and a generic type for typescript, simply put `typeof Component` and replace "Component" with the name of your component).

The **first argument** is the component to be affected, and the **second argument** is the properties to be changed per breakpoint on that component.

**NOTE:** all the breakpoints are optionals, and them override the default props, so no matter if it's on the `lg` breakpoint but you only defined the `md` breakpoint, it will still use `md`. This works like a "cascade" where the last props definition it's used on non-defined breakpoints where the "last" defintion are the default props

```
const ResponsiveText = responsiveComponent<typeof Text>(Text, {
  md: {
    children: 'I only show on Tablets'
  }
  xl: {
    children: 'I only show on Desktops'
  }
}); 
```

### Result

Now that we have our `ResponsiveText` defined, we can use it and **ALL** the attributes and children we define will be the "defaults"

```
<ResponsiveText>
    I only show on Phones
</ResponsiveText>
```

## Typescript

This library is typed, so when you define the properties on the breakpoints, you'll get the IDE suggestions and warnings.
