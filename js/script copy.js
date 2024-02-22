let LeftSeats = 12;
let price =0;
const seats = document.querySelectorAll('.seat');
let bookingSeats =0;
let seatCollection =[];
for(let i = 0; i < seats.length; i++){
    let seat =seats[i];
    seat.addEventListener('click', function(){
        const seatNumber = seat.innerText;
        if(seatCollection.includes(seatNumber)=== false && seatCollection.length <=4){
            seatCollection.push(seatNumber)
           if(seatCollection.length<=4){
            bookingSeats++
            LeftSeats--
            price = seatCollection.length * 550;
            
            seat.style='color:white; background:green';
            document.getElementById('left-seats').innerText = LeftSeats;
            document.getElementById('booking-seats').innerText = bookingSeats;
            document.getElementById('total').innerText = price;
            // grand total
            let grandTotal = price;
            const grandTotalElement  = document.getElementById('grand-total');
            grandTotalElement.innerText = grandTotal;
            // coupon apply
            const applyBtn = document.getElementById('coupon-apply');
            const apply_Div =document.getElementById('coupon-apply-div'); 
            if(seatCollection.length==4){
                applyBtn.removeAttribute('disabled')
            }
            applyBtn.addEventListener('click', function(){
                const couponValue =document.getElementById('coupon-input').value;
                if(couponValue==='NEW15'){
                    const newOffer = grandTotal - grandTotal*.15;
                    grandTotalElement.innerText = newOffer;
                    apply_Div.classList.add('hidden');
                }else if(couponValue==='Couple 20'){
                    apply_Div.classList.add('hidden');
                    const newOffer = grandTotal - grandTotal*.20;
                    grandTotalElement.innerText = newOffer;
                }
            })
            // Create Element
            let span = document.createElement('span');
            span.innerHTML =`<div class="flex justify-between pl-4 pr-4">
                <p>${seatNumber}</p>
                <p>Economy</p>
                <p>550</p>
            </div>`
            document.getElementById('add').appendChild(span)
        }
    }
    })
}