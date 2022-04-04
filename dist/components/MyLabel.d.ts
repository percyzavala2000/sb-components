/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este capitaliza el texto
    */
    allcaps?: boolean;
    /**
     * El color del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Este es el mensaje a mostrar en la etiqueta?
    */
    label: string;
    /**
   * Este es el tamaño de ña etiqueta?
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
  * Custom colors
  */
    fontcolor?: string;
}
export declare const MyLabel: ({ label, size, color, allcaps, fontcolor, ...props }: MyLabelProps) => JSX.Element;
