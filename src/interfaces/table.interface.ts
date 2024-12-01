export interface Column{
    key:string | Array<object> | number;
    label:string | Array<object> | number;
    isDropdown:boolean;
    isEditable:boolean;
    action:()=>void;
}