import Wrapper from "./Components/Wrapper";
import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import Button from "./Components/Button";
import { useState, useEffect } from 'react';


const Buttonvalues = [
  ["AC", "±", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {

    const [calc, setCalc] = useState(''); 
    const [result, setResult] = useState('');
    const [base, setBase] = useState(null); 
    const [operator, setOperator] = useState(null);

    const updateCalc = (value) => {
        if(value == "="){
            if(base!= null && operator){
                const newResult = eval(`${base} ${operator} ${calc}`); 
                setCalc(newResult.toString());
                setResult(calc); 
                setBase(null)
                setOperator(null)
            }
            else {
                setResult(eval(calc)); 
            }
        }
        else if(value == "AC") {
            setCalc("0");
            setResult("0"); 
            setBase(null); 
            setOperator(null)
        }
        else if(value == "±"){
            setCalc((parseFloat(calc) * -1).toString());
            setResult((parseFloat(calc) * -1).toString());
        }
        else if(value == "%"){
            if(!base !== null && operator){
                const newResult = eval(`${base} ${operator} ${calc / 100}`)
                setCalc(newResult); 
                setResult(newResult); 
                setBase(null); 
                setOperator(null)
            }
            else {
                setCalc((parseFloat(calc) / 100).toString());
                setResult((parseFloat(calc) / 100).toString());
            }
        }
        else if(value == "."){
            if (!calc.includes(".")) {  
                setCalc(calc + ".");
            }
        }
        else if(value === "+"){
            setBase(parseFloat(calc)); 
            setOperator("+"); 
            setCalc(""); 
        }
        else if(value === "-"){
            setBase(parseFloat(calc)); 
            setOperator("-");
            setCalc("");
        }
        else if(value === "/"){
            setBase(parseFloat(calc)); 
            setOperator("/");
            setCalc("");
        }
        else if(value === "x"){
            setBase(parseFloat(calc)); 
            setOperator("*");
            setCalc("");
        }
        else{
            setCalc(calc + value); 
        }
         
    }

    useEffect(() => {
        setResult(calc); 
    }, [calc])
    


    return (
        <div>
            <Wrapper>
                <Screen result={result} setResult={setResult}/>
                <ButtonBox>
                {Buttonvalues.flat().map((btn, i) => {
                    return <Button key={i} value={btn} updateCalc = {updateCalc}/>;
                })}
                </ButtonBox>
                <div className="footer"></div>
            </Wrapper>
        </div>
    );
}


export default App;
