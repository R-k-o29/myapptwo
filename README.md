- React Intro
    -Virtual DOM

- How to create a react app
  - npx create-react-app myapp
  - cd myapp
  - npm start

- Components : Class & Functional 
    - render() keyword { is executed multiple times based on DOM update and returns JSX markup of a component} 

- JSX - Javascript XML (Combination of Html, CSS & Javascript) - Rules while writing jsx
  {
  
    1. We must always return a single parent element .We cannot return mulytple elements .
    we can use React.Fragment

    2. Use {} when embeding JS inside HTML

    3. Tags must be closed/opened properly unlike HTML.

    4. Like HTML here also we will have attributes to elemets but there will be change in few Naming
    conventions.

    5. Values of the attributes must be closed inside "", ''

    6. If the value you want to pass to attribute is Object then you must wrap it inside {}.

       
   }
   - className = ""
   - {} to write js

- Props

  - default keyword

  - props are passed as parameters from parent component to child component
  - Accessed using {this.props.propname}

- Stylings

  - inline
  - external
  - Module.css

- API Handling & displaying data (using fetch & .then )

- Hooks & their syntaxes (Refer : `https://www.youtube.com/watch?v=4Ak2jFEIr9o`)

- Events
    - mouse events (onCLick,onDoubleClick,onMouseEnter,onMouseLeave)
    - keyboard events (onKeyDown,onKeyPress,onKeyUp)
    - form events (onChange ,onSubmit,onInput ,onFOcus,onBlur)
    - other (onScroll, onLoad, onError)
 
- routing
  - installation command: npm install react-router-dom
  - importing commmand : import {BrowserRouter,Routes,Route} from "react-router-dom";


  -------------------------------------------------------------------------

- Component Life cycle
  - Every component in react has life cycle events which are executed based on requirement
  - These events are categorized into 3 categories
    - Mounting/ Initialization
    - Updating
    - Unmounting
    
- Component Categories
    - Stateless components - {has only props} also called as presentational components
    - Stateful components - {has state and props} also called as container components
