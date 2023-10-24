// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import PropTypes from 'prop-types';

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const DisplayText = (props) => {
  const Element = props.elementType;
  console.log(Element);
  return <Element>{props.text}</Element>;
}


DisplayText.propTypes = {
  text: PropTypes.string.isRequired, 
  elementType: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,
  // elementType: PropTypes.elementType.isRequired
}

const numbers = [1,2,3,4,5,56,7,7,8,4,3,2,5,6,3,100 ];

const sumOfNumbers = numbers.reduce(function (accumulator, number){
  return accumulator+number;
}, 0);

const App = () => {

  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <h2>Sum of numbers array is {sumOfNumbers}</h2>
      <Search />
      <DisplayText elementType= "p" text="Hello Mortal" />
      <DisplayText elementType= "h1" text='I said, HELLO MORTAL!' />
      <hr />
      <CountButton />
      <List list={stories} />
    </div>
  );
}

const CountButton = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count+1);
  }
  return (
    <div>
      <button type='button' onClick={handleClick}>Count clicks lol</button>
      Count: {count}
    </div>
  )
}
const Search = () => {
  const [inputText, setInputText] = React.useState('');
  const [displayText, setDisplayText] = React.useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
    console.log(event);
    console.log(event.target.value);
  };
  
  const handleBlur = () => {
    console.log('Input field lost focus. Current value: ', inputText);
  };

  const handleButtonClick = () => {
    console.log('Input Text: ', inputText);
    setDisplayText(inputText);
  };

  return (
    <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' 
    onChange={handleInputChange} 
    placeholder='Enter text here.'
    onBlur={handleBlur}/>
    <button onClick={handleButtonClick}>Submit</button>
    {inputText && <DisplayText elementType='p' text={displayText} /> }
    </div>
);
} 

const List = (props) => {
  return (
    <ul>  
        {props.list.map((item) => {
          return (
            <Item key = {item.objectID} item={item} />

          );
        })}
      </ul>
  )
}

const Item = (props) => {
  return (
    <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired, 
}


List.propTypes = {
  list: PropTypes.array.isRequired, 
}

export default App;
