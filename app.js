// grocery

// Here we create a `GroceryList` component
// var GroceryList = (props) => (
//   <ul>
//     <li>{props.groceries[0]}</li>
//     <li>{props.groceries[1]}</li>
//     <li>{props.groceries[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My grocery List</h2>
//     <GroceryList groceries={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
// // Here we are creating an instance of the `GroceryList` component
//   </div>
// );


// var GroceryList = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceries[0]}</li>
//       <li>{props.groceries[1]}</li>
//       <li>{props.groceries[2]}</li>
//     </ul>
//   );
// }

// // Here we are creating an instance of the `GroceryList` component
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['Cucumbers', 'Kale']}/> 
  </div>
);

// var App = () => (
//   <div>
//     <h2>My grocery List</h2>
//     <GroceryList />
//   </div>
// );


// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
  // var onListItemClick = (event) => {
  //   console.log('I got clicked');
  // };

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}


class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false,
      check: false
    };

  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  onMouseOverItem() {
    this.setState({
      check: !this.state.check
    });
  }
  
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.check ? 'bold' : 'normal'
    };
  

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onMouseOverItem.bind(this)}>{this.props.grocery}</li>
      //<li>{this.props.grocery}</li>
    );

  }

}

// Update our `GroceryList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);
ReactDOM.render(<App />, document.getElementById("app"));