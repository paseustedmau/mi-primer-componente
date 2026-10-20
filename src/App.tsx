import { Button } from "./components/Button";
import Counter from "./components/Counter";
import PasswordField from "./components/PasswordField";

function App() {
  return (
    <div>
      <Button>Botón primario</Button>
      <Button variant="outline">Botón outline</Button>
      <Button variant="destructive">Botón destructivo</Button>
      <Button rounded>Este es un botón redondeado</Button>
      <Counter />
      <PasswordField />
    </div>
  );
}

export default App;
