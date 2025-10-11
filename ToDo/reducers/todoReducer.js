export default function todoReducer(state, action) {
    if (action.type == "add_todo"){
        let task = action.payload.toDoText;
        return [...state,{id:state.length + 1, todo:task, finished:false}]
    }
    else if(action.type == "edit_todo") {
        let todo = action.payload.todo;
        let toDoText = action.payload.toDoText;
        const updatedList = state.map((t)=>{
                                        if(t.id == todo.id){
                                            return { ...t, todo: toDoText };
                                        }
                                        return t;
                                    })
                                    return updatedList;
    }
    else if(action.type == "delete_todo"){
        let todo = action.payload.todo;
         const updatedList = state.filter((t)=>t.id != todo.id)
         return updatedList
    }
    else if(action.type == 'finish_todo' ) {
       let todo = action.payload.todo;
       let isFinished = action.payload.isFinished;
                                                    
                                                    const updatedList = state.map((t)=>{
                                                        if(t.id == todo.id){
                                                            t.finished = isFinished;
                                                        }
                                                        return t;
                                                    })
                                                   return updatedList;

    }
    

} 