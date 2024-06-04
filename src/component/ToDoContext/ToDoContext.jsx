import {createContext,useContext,useEffect,useState} from "react";
import { v4 as uuidv4 } from 'uuid';
const ToDoContext = createContext()

const useToDoContext = () => useContext(ToDoContext)

//////
const getLocalItem = () => {
    const storeItem = localStorage.getItem("list")
    return storeItem? JSON.parse(localStorage.getItem("list")):[]
}

const ToDoProvider = ({children}) => {
     
    const [activity,setActivity] = useState("");  // 1st step -1
    
    const[task,setTask] = useState(getLocalItem());

    const[update,setUpdate]= useState(true);
     
    const[edit,setEdit] = useState(null)

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(task))
    },[task])


    const handleUpdate = () =>{
        if(activity===""){
            alert("please fill the input box")
        }
           else if(!update) {
               setTask(task.map((newElem)=>{
                if(newElem.id === edit){
                    return{...newElem, title:activity}
                }
                return newElem;
               }))
               setUpdate(true);
               setActivity("");
               setEdit(null)
            } else{
                const allActivity ={id:uuidv4(), title:activity,complete:(false)}
    
                setTask([...task,allActivity]);
                setActivity("");
            };
            }
            const handleRemove = (id) => {
                const isConfirm = window.confirm("are you sure u want to delete")
                  if(isConfirm){
                      const filterItem = task.filter((item)=>(
                          id != item.id
                   ))
                    setTask(filterItem)
                  }
              };
          
              const handleEdit = (id) => {
          
                  const findItem = task.find((elem)=>{
                   return id === elem.id
              });
          
                  setActivity(findItem.title);
                  setUpdate(false);
                  setEdit(id);
          
              };
          
               const handleAllRemove = ()=>{
                  setTask([]);
               };
               const handleComplete =(id) =>{
                  setTask(task.map((compItem)=>{
                      if(compItem.id === id){
                          return{...compItem,complete: !compItem.complete}
                      }
                      return compItem;
                  }))
               };

    const allValue ={activity,setActivity,task,setTask,update,setUpdate,
        edit ,setEdit,handleUpdate,handleRemove,handleEdit,handleComplete,handleAllRemove
    } 


    return(
        <ToDoContext.Provider value={allValue}>
            {children}
        </ToDoContext.Provider>
    )
}


export {ToDoProvider,useToDoContext}