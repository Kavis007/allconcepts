import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import GradeCal from './Gradecal.js';
import TicketCal from './Ticketcal.js';
import VowelCons from './VowelCons.js';
import Lengconv from './Lengthconvert.js';
import SwitchExample from './training/SwitchExample.js';
import WhileLoop from './training/WhileLoop.js';
import ForLoop from './training/ForLoop.js';
import MultiplyTable from './MultiplyTable.js';
import Fibonacii from './training/Fibonacii.js';
import Factorial from './training/Factorial.js';
import Factorsnum from './training/Factorsnum.js';
import Primenum from './training/Primenum.js';
import Reverse from './training/Reverse.js';
import Switchinarithmetic from './Switchinarithmetic.js';
import Seasonfind from './Seasonfind.js';
import Repch from './Repch.js';
import Palindrome from './Palindrome.js';
import ForInLoop from './training/ForInLoop.js';
import ArrowFn from './training/ArrowFn.js';
import Factrecurs from './Factrecurs.js';
import Sumofarray from './Sumofarray.js';
import LengthofArr from './LengthofArr.js';
import Bmifind from './training/Bmifind.js';
import PropsParent from './training/PropsParent.js';
import Propeg1 from './training/Propeg1.js';
import Formsinhmtl from './training/Formsinhmtl.js';
import MouseEvents from './training/MouseEvents.js';
import KeyBoardEvents from './training/KeyBoardEvents.js';
import NewForm from './training/NewForm.js';
import NewMouse from './training/NewMouse.js';
import Newmouse1 from './training/Newmouse1.js';
import SpreadOp from './training/SpreadOp.js';
import MultiStateForm from './training/MultiStateForm.js';
import Multistateprac from './training/Multistateprac.js';
import Style from './training/style.js';
import ObjectExample from './training/ObjectExample.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactRouterConcept from './training/ReactRouterConcept.js';
import UseLocationHook from './training/UseLocationHook.js';
import Propeg2 from './training/Propeg2.js';
import Multistatepract2 from './Multistatepract2.js';
import Probeg3 from './Probeg3.js';
import OddChecker from './training/OddChecker.js';
import NumberObj from './training/NumberObj.js';
import MathObj from './training/MathObj.js';
import Objecttask from './training/Objecttask.js';
import Randomobjtask from './training/Randomobjtask.js';
import Rgbrandom from './training/Rgbrandom.js';
import Winlose from './training/Winlose.js';
import DateObj from './training/DateObj.js';
import Dateobprac from './training/Dateobprac.js';
import DispCurrentsession from './training/DispCurrentsession.js';
import Comparetwodates from './training/Comparetwodates.js';
import Differenceofdates from './training/Differenceofdates.js';
import Dateafter from './training/Dateafter.js';
import Agecalculator from './training/Agecalculator.js';
import StringObj from './training/StringObj.js';
import Lengthofstring from './training/Lengthofstring.js';
import Countofstring from './training/Countofstring.js';
import Titlecaseconversion from './training/Titlecaseconversion.js';
import Replacetask from './training/Replacetask.js';
import Countofwords from './training/Countofwords.js';
import ArrayObj from './training/ArrayObj.js';
import Disparraybymap from './training/Disparraybymap.js';
import Removeduplicate from './training/Removeduplicate.js';
import FirstCapsarray from './training/FirstCapsarray.js';
import Charcountarray from './training/Charcountarray.js';
import Filtertheword from './training/Filtertheword.js';
import Longestword from './training/Longestword.js';
import Intialextractarray from './training/Intialextractarray.js';
import RegExp from './training/RegExp.js';
import Inputfiltering from './training/Inputfiltering.js';
import Characterfilter from './training/Characterfilter.js';
import Passswordvalidation from './training/Passswordvalidation.js';
import Extractdateandurl from './training/Extractdateandurl.js';
import Emailvalid from './training/Emailvalid.js';
import Mobilenumval from './training/Mobilenumval.js';
import DialogueBoxes from './training/DialogueBoxes.js';
import Formsinsweetalert from './training/Formsinsweetalert.js';
import Prompttask from './training/Prompttask.js';
import Async from './training/Async.js';
import CookiesExample from './training/CookiesExample.js';
import Cookiestask from './training/Cookiestask.js';
import ErrorHandling from './training/ErrorHandling.js';
import Formvalidation from './training/Formvalidation.js';
import Useeffecttask from './training/Useeffecttask.js';
import Useeffectexam from './training/Useeffectexam.js';
import Rupeetodolar from './training/Rupeetodolar.js';
import Useeffectwithapi from './training/Useeffectwithapi.js';
import Useeffectapitask from './training/Useeffectapitask.js';
import Usecontexttask from './Context/Usecontexttask.js';
import Page1 from './Context/Page1.js';
import Page2 from './Context/Page2.js';
import Page3 from './Context/Page3.js';
import UseReducerExample from './UseReducerHook/UseReducer.js';
import Usereducerprac from './UseReducerHook/Usereducerprac.js';
import Datatable from './Context/Datatable.js';
import Datatable2 from './Context/Datatable2.js';
import Cruddb from './Crud/Cruddb.js';
import Crudprac from './Crud/Crudprac.js';

function App() {


  return (
    <>
    {/* <center>
    <h1>Mouseevents</h1>
    <br/> */}

    {/* <Bmifind/>
    <Propeg1/> */}
    {/* <Formsinhmtl/>
    
    <KeyBoardEvents /> */}
    {/* <MouseEvents /> */}
    {/* <NewForm  /> */}
    {/* <NewMouse />
    </center> */}
    {/* <Newmouse1 />
    <SpreadOp /> */}
    {/* <MultiStateForm />
    <Multistateprac/> */}

    {/* <Style/>
    <ObjectExample /> */}
    {/* <Style/> */}
    <BrowserRouter>
    {/* <Page1/>
    <Page2/>
    <Page3/> */}
      <Routes>
          
          <Route path='/' element={<Bmifind/>}></Route>
          <Route path='/reactrouterconcept' element={<ReactRouterConcept />}></Route>
          <Route path='/oddchecker' element={<OddChecker />}></Route>
          <Route path='/NumberObj' element={<NumberObj />}></Route>
          <Route path='/MathObj' element={<MathObj />}></Route>
          <Route path='/Randomobjtask' element={<Randomobjtask />}></Route>
          <Route path='/Rgbrandom' element={<Rgbrandom/>}></Route>
          <Route path='/Win' element={<Winlose/>}></Route>
          <Route path='/DateObj' element={<DateObj/>}></Route>
          <Route path='/Dateobprac' element={<Dateobprac/>}></Route>
          <Route path='/DispCurrentsession' element={<DispCurrentsession/>}></Route>
          <Route path='/Comparedates' element={<Comparetwodates/>}></Route>
          <Route path='/Differenceofdates' element={<Differenceofdates/>}></Route>
          <Route path='/Dateafter' element={<Dateafter/>}></Route>
          <Route path='/Agecalculator' element={<Agecalculator/>}></Route>
          <Route path='/StringObj' element={<StringObj/>}></Route>
          <Route path='/Lengthofstring' element={<Lengthofstring/>}></Route>
          <Route path='/Countofstring' element={<Countofstring/>}></Route>
          <Route path='/Titlecaseconversion' element={<Titlecaseconversion/>}></Route>
          <Route path='/Replacetask' element={<Replacetask/>}></Route>
          <Route path='/Countofwords' element={<Countofwords/>}></Route>
          <Route path='/ArrayObj' element={<ArrayObj/>}></Route>
          <Route path='Disparraybymap'element={<Disparraybymap/>}></Route>
          <Route path='Removeduplicate' element={<Removeduplicate/>}></Route>
          <Route path='Objecttask' element={<Objecttask/>}></Route>
          <Route path='FirstCapsarray'element={<FirstCapsarray/>}></Route>
          <Route path='Charactercountarray'element={<Charcountarray/>}></Route>
          <Route path='Filtertheword'element={<Filtertheword/>}></Route>
          <Route path='Longestword'element={<Longestword/>}></Route>
          <Route path='Intialextractarray'element={<Intialextractarray/>}></Route>
          <Route path='RegExp'element={<RegExp/>}></Route>
          <Route path='Inputfiltering'element={<Inputfiltering/>}></Route>
          <Route path='Characterfilter' element={<Characterfilter/>}></Route>
          <Route path='Passswordvalidation' element={<Passswordvalidation/>}></Route>
          <Route path='Extractdateandurl'element={<Extractdateandurl/>}></Route>
          <Route path='Emailvalid' element={<Emailvalid/>}></Route>
          <Route path='Mobilenumval' element={<Mobilenumval/>}></Route>
          <Route path='DialogueBoxes' element={<DialogueBoxes/>}></Route>
          <Route path='Formsinsweetalert'element={<Formsinsweetalert/>}></Route>
          <Route path='Prompttask' element={<Prompttask/>}></Route>
          <Route path='Async' element={<Async/>}></Route>
          <Route path='CookiesExample' element={<CookiesExample/>}></Route>
          <Route path='Cookiestask' element={<Cookiestask/>}></Route>
          <Route path='ErrorHandling' element={<ErrorHandling/>}></Route>
          <Route path='Formval' element={<Formvalidation/>}></Route>
          <Route path='Useeffecttask' element={<Useeffecttask/>}></Route>
          <Route path='Useeffectexam/' element={<Useeffectexam/>}></Route>
          <Route path='Rupeetodolar/' element={<Rupeetodolar/>}></Route>
          <Route path='Useeffectwithapi' element={<Useeffectwithapi/>}></Route>
          <Route path='Useeffectapitask' element={<Useeffectapitask/>}></Route>
          <Route path='UseReducer' element={<UseReducerExample/>}></Route>
          <Route path='UseReducerprac' element={<Usereducerprac/>}></Route>
          <Route path='Datatable' element={<Datatable/>}></Route>
          <Route path='Datatable2' element={<Datatable2/>}></Route>
          <Route path='crud' element={<Cruddb/>}></Route>
          <Route path='/crudpract' element={<Crudprac/>}></Route>
          

      </Routes>
    </BrowserRouter>
    
   
    {/* <Multistatepract2/> */}
    
    </>
    
  );
}

export default App;
