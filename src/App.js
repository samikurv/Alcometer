import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculate(e) { 
    e.preventDefault();
    let blood = 0;
    let litres = bottles * 0.33;
    let burning = weight / 10;
    let grams1 = litres * 8 * 4.5;
    let grams2 = grams1 - (burning * time)
    if (gender === "male") {
      blood = grams2 / (weight * 0.7)
    } else {
      blood = grams2 / (weight * 0.6)
    }
    setResult(blood);
   }

  return (
    <form>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
      </div>
      <div>
        <label>Time</label>
        <input type="number"value={time} onChange={e => setTime(e.target.value)}/> 
      </div>
      <div>
        <label>Gender</label>
        <label><input type="radio" name="Gender" value="male" onChange={e => setGender(e.target.value)} />Male</label>
        <label><input type="radio" name="Gender" value="female" onChange={e => setGender(e.target.value)} />Female</label>
      </div>
      <button type="button" onClick={calculate}>Calculate</button>
      <div>
        <label>Your alcohol blood level is:</label>
        <output>{result.toFixed(3)}</output>
      </div>
    </form>
  );
}

export default App;
