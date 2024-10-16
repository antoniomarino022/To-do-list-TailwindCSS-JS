const inputJs = document.getElementById('input');
const btnTask = document.getElementById('addTask');
const lista = document.getElementById('list');

let tasks = [];

btnTask.addEventListener('click', () => {
    let task = inputJs.value;

    if (task === '') {
        alert('Inserisci una task');
    } else if (tasks.includes(task)) {
        alert('Task già esistente');
    } else {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-center', 'bg-gray-100', 'rounded', 'p-3', 'mb-2', 'shadow-md'); // Flex con spaziatura tra testo e pulsanti
        
        const span = document.createElement('span');
        span.textContent = task; 
        span.classList.add('break-words', 'max-w-[70%]'); 
        
        
        const div = document.createElement('div');
        div.classList.add('flex', 'space-x-3'); 

    
        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-check" style="color: #24b611;"></i>';
        checkButton.classList.add('text-[20px]', 'hover:scale-110', 'transition', 'duration-200');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-xmark" style="color: #de1717;"></i>';
        deleteButton.classList.add('text-[20px]', 'hover:scale-110', 'transition', 'duration-200');

      
        div.appendChild(checkButton);
        div.appendChild(deleteButton);
      
      
        li.appendChild(span);
        li.appendChild(div);

        
        lista.appendChild(li);

        
        tasks = [...tasks, task];

        checkButton.addEventListener('click', () => {
            span.style.textDecoration = 'line-through';
            span.style.color = 'green';
        });

    
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task); 
            li.remove();
        });

        inputJs.value = '';
    }
});
