const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
	   const prices = document.querySelectorAll('.price');
	let totalPrice= 0;
	   // Loop through each price and add it to the total
    for( let price of totalPrice) {
        totalPrice += Number(price.textContent);
    };
	
	  const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
	
	    // Set the text content to show the total price
    totalCell.textContent = `Total Price: Rs.${totalPrice.toFixed()}`;
    totalRow.appendChild(totalCell);

 
};

getSumBtn.addEventListener("click", getSum);

