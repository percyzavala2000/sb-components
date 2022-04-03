
import './mylabel.css';

 export interface MyLabelProps {
   /**
   * Este capitaliza el texto
   */
   allcaps?:boolean
    /**
     * El color del texto
     */
   color? :'primary'|'secondary' | 'tertiary'

   /**
   * Este es el mensaje a mostrar en la etiqueta?
   */
    label: string;
    /**
   * Este es el tamaño de ña etiqueta?
   */
    size :'normal'| 'h1'| 'h2'| 'h3'

     /**
   * Custom colors
   */
  fontcolor?:string

}
export const MyLabel = ({label='no Label',size='normal',color='primary',allcaps,fontcolor='',...props}:MyLabelProps) => {

const mode = allcaps && 'allcaps';

  return (
      
    <span className={ `label ${size} text-${color} ${mode}`} style={{ color:fontcolor}} {...props}  > {label} </span>
  )
}
        