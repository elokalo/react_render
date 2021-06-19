import './App.css';
import { ChildA } from './components/Context/ContextChildren';
import ContextParent from './components/Context/ContextParent';
import ParentFour from './components/Incorrect Optimization/ParentFour';
import ParentThree from './components/Incorrect Optimization/ParentThree';
import ArrayUseState from './components/Inmutable State/ArrayUseState';
import ObjectUseState from './components/Inmutable State/ObjectUseState';
import ChildOne from './components/Optimization/ChildOne';
import GranParent from './components/Optimization/GranParent';
import ParentOne from './components/Optimization/ParentOne';
import ParentTwo from './components/Optimization/ParenTwo';
import Parent from './components/Parent Child/Parent';
import UseReducer from './components/useReducer/UseReducer';
import UseState from './components/useState/UseState';

function App() {
  return (
    <div className="App">
      {/*
      <UseState/>
      <UseReducer/>
      <ObjectUseState/>
      <ArrayUseState/>
      <Parent/>
      <ParentOne>
        <ChildOne/>
      </ParentOne>
      <GranParent/>
      <ParentTwo/>
      <ParentThree/>
      <ParentFour/>
      */}
      <ContextParent>
        <ChildA/>
      </ContextParent>
    </div>
  );
}

export default App;
