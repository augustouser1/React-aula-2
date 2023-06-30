import{Reactnode} from "react"




interface Ilist{
children:ReactNode
}
export function List({children}:Ilist){
   return (<li>(children)</li>)


}