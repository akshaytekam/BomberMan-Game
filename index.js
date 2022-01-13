const bombs = [];
function addGrid(){
    const appElement = document.getElementById('app');
    for(let i = 0; i < 9; i++){
        const row = document.createElement('div');
        for(let j=0; j< 9; j++){
            const index = i*9+j;
            const column = document.createElement('div')
            column.style.display='inline-block';
            column.style.width = '60px';
            column.style.height = '60px';
            column.style.textAlign = 'center';
            column.style.verticalAlign = 'middle';
            column.style.border='1px solid black';
            column.style.borderBlockColor='black';
            column.setAttribute("index",index);

            column.addEventListener('click', function(){
                if(bombs.includes(index)){
                    column.style.background='blue';
                    alert("Bomb Clicked!")
                }else{
                    column.style.background='green';
                }
            })

            row.appendChild(column);

        }
        appElement.appendChild(row);
    }
}
function generateBomb(){
    while(bombs.length !== 10){
        const randomNumber = Math.floor(Math.random() * 100);
        if(randomNumber < 81 && !bombs.includes(randomNumber)){
            bombs.push(randomNumber);
        }
    }
}

addGrid();
generateBomb();
console.log(bombs);