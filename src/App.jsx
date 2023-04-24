import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./constants";

function App() {
  return <Quiz questions={jsQuizz.questions} />;
}

export default App;
