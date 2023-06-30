mport { ComponentFooter, ComponentHeader } from "./components";
import { PageHome, PageList } from "./pages";
import { GlobalStyle, Main } from "./styles/GlobalStyle";
import { Dispatch, SetStateAction, useState } from "react";

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export function App() {
  const [page, setPage] = useState(1)
  let component
  switch (page) {
    case 1:
      component = <PageHome />
      break;
    case 2:
      component = <PageList />
      break;
    default:
      component = <PageHome />
      break;
  }
  return (
    <>
      <GlobalStyle />
      <ComponentHeader setPage={setPage} />
      <Main>
        {component}
      </Main>
      <ComponentFooter />
    </>
  )
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*<-fragmento, é importante saber que ele retornará somente um elemento, entretanto se colocarmos isso dentro do fragmento, ele irá retornar as informações desejadas*/




/*Exporta a função app como padrão, se esta não for padrão, será necessário colocar parênteses no import lá no main.tsx, e exportar a função diretamente na função, como: "export function app" */


/*Source Mapping, permite que os erros sejam detectados e mostrados no terminal*/