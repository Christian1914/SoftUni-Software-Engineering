import ExpandableText from './components/ExpandableText';

const App = () => {
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div>
      <h1>Expandable Text Example</h1>
      <ExpandableText text={longText} maxLength={50} />
    </div>
  );
};

export default App;

