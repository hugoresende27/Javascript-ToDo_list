//selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filtro = document.querySelector('.filter-todo');


//Event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', delCheck );
filtro.addEventListener('click', filterTodo);

//functions
function addTodo(event)
{
    //evitar submissão do form
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //criar LI
    const novoTodo = document.createElement('li');
    novoTodo.innerHTML = todoInput.value;
    novoTodo.classList.add('todo-item');
    todoDiv.appendChild(novoTodo);

    //BOTÃO CHECK
    const btnCheck = document.createElement('button');
    btnCheck.innerHTML = '<i class="fas fa-check"></i>';
    btnCheck.classList.add("complete-btn");
    todoDiv.appendChild(btnCheck);

    //BOTÃO LIXO
    const btnLixo = document.createElement('button');
    btnLixo.innerHTML = '<i class="fas fa-trash"></i>';
    btnLixo.classList.add("trash-btn");
    todoDiv.appendChild(btnLixo);

    //ADICIONAR À LISTA
    todoList.appendChild(todoDiv);

    //LIMPAR INPUT 
    todoInput.value='';

    


    //console.log('ola');
}

function delCheck(e)
{
    //console.log(e.target);
    const item= e.target;

    //DELETE TODO
    if (item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        //animação
        todo.classList.add('cair');
        todo.addEventListener('transitionend',function(){
            //todo.remove();
            todo.remove();
        });
     
    }

    //CHECK MARK
    if (item.classList[0] === 'complete-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('concluidas');
    }
}

function filterTodo(e)
{
    const porfazer = todoList.childNodes;
    //console.log(porfazer);
    porfazer.forEach(function(todo)
    {
        switch(e.target.value)
        {
            case 'all':
                todo.style.display='flex';
                break;
            case 'concluidas':
                if(todo.classList.contains('concluidas'))
                {
                    todo.style.display ='flex';
                }
                else
                {
                    todo.style.display ='none';
                }
                break;
            case 'porfazer':
                if(!todo.classList.contains('concluidas'))
                {
                    todo.style.display ='flex';
                }
                else
                {
                    todo.style.display ='none';
                }
                break;

        }
    });
}

function gravar(lista)
{
    
}