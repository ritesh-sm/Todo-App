export class Init {
  load() {
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
      console.log("No todos Found.. Loading ...")
      var todos = [
        {
          text: 'Pick up grocery'
        },
        {
          text: 'Pay online bills'
        },
        {
          text: 'Work on Angular project'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos))
      return
    }

    else{
      console.log("Found todos ...")
    }
  }
}
