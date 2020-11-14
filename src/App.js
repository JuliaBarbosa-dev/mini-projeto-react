
import Title from './components/Title';
import List from './components/List';

function App() {
  return (
    <>
    <Title> Dois dos principais animes mais conhecidos e assistidos do momento: </Title>
    <List/>
    </>

  )};

export default App;

/*
    <>
    <First/>

  <Title texto='texto que veio do componente com o props construido com arrow function'/>

  <Text>Componente filho(Children)</Text>
  </>
//com mais de 1 componente sendo chamado, voce coloca dentro de um fragment -> <>  </>
//texto = atributo html que está sendo chamado.
//Title = passa como um atributo o texto usando o props.
//Text = passa LITERALMENTE como atrubito FILHO.

*/