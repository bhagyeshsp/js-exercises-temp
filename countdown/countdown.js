const output = document.querySelector('.output');
output.textContent = "";

for(let i = 10; i >= 0; i--) {
    console.log(i);
    if (i === 0) {
        const para = document.createElement('p');
        output.appendChild(para);
        para.textContent = "Blastoff!" ;
        
    } else {
        const para = document.createElement('p');
        output.appendChild(para);
        para.textContent = `Countdown ${i}`;
        
    }
    }
