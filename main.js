const columns = documentt.querySelectorAll(".column");
document.addEventListener.remove("draggend",
(e) =>{
    e.target.classList.remove("dragging");
})
columns.forEach(item) => {
item.addEventListener{"dragover", (e) =>{
    const dragging = document.querySelector(".dragging");
    const applyAfter= getNewPosition(item, e.clientY);
    if(applyAfter){
        applyAfter.insertAdjacentElement("afterend", dragging);
    }
}
}
}
function getNewPosition(column, positionY){
    const card = 
    column.querySelectorAll(".item:not(dragging)");
    let result;
    for (let refer_card of cards){
        const box = refer.card.getBoundingClientRect();
        const boxCenterY = box.y+box.height/2;
        if(positionY>=boxCenterY) result= refer_card;
    }
    return result;
}