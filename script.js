
async function getData() {

       try{
            const res =  await fetch("data.json");

           if(!res.ok){
              throw new Error('Failed to fetch data');
           }
            const data =  await res.json();


            showData(data);
       }catch(err){
           console.error("generating data failed", err);
       }

}

getData();


const summaryBoard = document.querySelector(".summary-board");


  function showData(data){
     summaryBoard.innerHTML = " ";

     data.forEach((item) => {

         const {score, category, icon} = item;
 
        const card = document.createElement("div");
        card.classList.add("item");

         card.innerHTML = `
         
         <h3><img src="${icon}" alt="${category}">${category}</h3>
         <div class="sm-score">${score} <span>/ 100</span></div>
         
         `;

         summaryBoard.appendChild(card);

    })
        
}




/*
<div class="item">
    <h3><img src="images/icon-reaction.svg" alt="Reaction">Reaction</h3>
    <div class="sm-score">80 <span>/ 100</span></div>
</div>
<div class="item">
    <h3><img src="images/icon-reaction.svg" alt="Reaction">Reaction</h3>
    <div class="sm-score">80 <span>/ 100</span></div>
</div>
<div class="item">
    <h3><img src="images/icon-reaction.svg" alt="Reaction">Reaction</h3>
    <div class="sm-score">80 <span>/ 100</span></div>
</div>
<div class="item">
    <h3><img src="images/icon-reaction.svg" alt="Reaction">Reaction</h3>
    <div class="sm-score">80 <span>/ 100</span></div>
</div>
*/