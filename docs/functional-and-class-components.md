# Functional and Class Components

[React First Public Release](https://github.com/facebook/react/blob/main/CHANGELOG.md#030-may-29-2013).

## Components

        - a component represent the part of user interface
        - component are reusable and can be use in anywhere in user interface

## There are mainly two components in React:

1. Functional Components also known as Stateless component
1. Class Component also known as Stateful component

## React Version Less than 16.8.0 
1. Function or Stateless Component 

        - It is simple javascript functions that simply returns html UI
        - It is also called “stateless” components because they simply accept data and display them in some form that is they are mainly responsible for rendering UI.
        - It accept properties(props) in function and return html(JSX)
        - It gives solution without using state
        - There is no render method used in functional components.
        - These can be typically defined using arrow functions but can also be created with the regular function keyword.

1. Class or Stateful Component

        - It is regular ES6 classes that extends component class from react library 
        - Also known as “stateful” components because they implement logic and state.
        - It must have render() method returning html
        - It has complex UI Logic
        - You pass props to class components and access them with this.props

### Conclusion

    Class Components are preferred since function components cannot handle states and component life-cycle methods

## React Version greater than or equal to 16.8.0 

1. Function or Stateful (with Hooks) Component 

        - It is simple javascript functions that simply returns html UI
        - It is also called “stateful” components because from react version 16.8.0 functional components uses the hooks to handle the states and component life-cycle
        - It accept properties(props) in function and return html(JSX)
        - There is no render method used in functional components.
        - These can be typically defined using arrow functions but can also be created with the regular function keyword.
    - [Hooks Released in react version 16.8.0](https://github.com/facebook/react/blob/main/CHANGELOG.md#1680-february-6-2019).

1. Class or Stateful Component 

        - It is regular ES6 classes that extends component class form react library 
        - Also known as “stateful” components because they implement logic and state.
        - It must have render() method returning html
        - It has complex UI Logic
        - You pass props to class components and access them with this.props

Functional Components are preferred since states can be handled by hooks

### Conclusion

Benefits you get by using functional components in React:

    - Functional component are much easier to read and test because they are plain JavaScript functions which can handle state or lifecycle-methods by using react hooks in functional component
    - It has less code which makes it more readable