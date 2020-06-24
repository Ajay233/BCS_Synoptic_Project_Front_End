export const timedAction = (funcToDo, time) => {
  setTimeout(function(){
    funcToDo();
  }, time);
}
