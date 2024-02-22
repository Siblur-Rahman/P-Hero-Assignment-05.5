function stingToNumber(stringId){
    const string =document.getElementById(stringId).innerText;
    let number =parseInt(string);
    return number
}
const LeftSeatsElement = document.getElementById('left-seats');

const bookingSeatsElement = document.getElementById('booking-seats');;

const totalPriceElement =document.getElementById('total')
const grandTotalPriceElement =document.getElementById('grand-total');
const discountPriceElement =document.getElementById('');

// Coupon Input
const couponInputElement =document.getElementById('coupon-input');

// Apply Btn
const applyBtn = document.getElementById('coupon-apply');
const apply_Div =document.getElementById('coupon-apply-div');

function removeElementByClassId(idClass){
    document.querySelector(idClass).remove()
}
function incrementValue(id){
    let number = stingToNumber(id)
    number++
    return number
}
function decrementValue(id){
    let number = stingToNumber(id)
    number--
    return number
}
function increasePrice(setNumber, price){
    return setNumber * price
}
function decreasePrice(setNumber, price){
    return setNumber * price
}
function Discount(total, discount){
    return total/100 * discount
}
function grandTotal(total, discount){
    return total - discount
}

function displayNumber(LeftSeats, bookingSeats, total, grandTotal, ){
    
}
LeftSeatsElement.innerText= 12;
let totalPrice =0;
const price =550;
document.getElementById('price').innerText = price;
const seats = document.querySelectorAll('.seat');
let seatCollection =[];
for(let i = 0; i < seats.length; i++){
    let seat =seats[i];
    seat.addEventListener('click', function(){
        const seatNumber = seat.innerText;
        if(seatCollection.includes(seatNumber)=== false && seatCollection.length <=3){
            seatCollection.push(seatNumber)
            console.log(seatCollection.length)
           if(seatCollection.length<=4){
            let bookingSeats= incrementValue('booking-seats');
            // bookingSeats++

            let LeftSeats = decrementValue('left-seats');
            // LeftSeats--
            
            seat.style='color:white; background:green';
            document.getElementById('left-seats').innerText = LeftSeats;
            document.getElementById('booking-seats').innerText = bookingSeats;

            // total Price
            totalPrice =increasePrice(bookingSeats, price);
            totalPriceElement.innerText = totalPrice;

            // grand total
            grandTotalPriceElement.innerText = totalPrice;

            // coupon apply
             
            if(seatCollection.length==4){
                applyBtn.removeAttribute('disabled')
            }
            applyBtn.addEventListener('click', function(e){
            //    e.stopPropagation();
                const couponValue =couponInputElement.value;
                if(couponValue==='NEW15'){
                    const discount = Discount(totalPrice, 15);
                    grandTotalPriceElement.innerText = grandTotal(totalPrice, discount);
                    apply_Div.classList.add('hidden');
                    couponInputElement.value ='';
                }else if(couponValue==='Couple 20'){
                    const discount = Discount(totalPrice, 20);
                    grandTotalPriceElement.innerText = grandTotal(totalPrice, discount);
                    apply_Div.classList.add('hidden');
                    couponInputElement.value ='';
                }
                // else{
                //     alert('Input Coupon is invalid')
                //     e.stopImmediatePropagation();
                // }
            })
            // Create Element
            let span = document.createElement('span');
            span.innerHTML =`<div class="flex justify-between pl-4 pr-4 ${seatNumber}">
                <p>${seatNumber}</p>
                <p>Economy</p>
                <p>550</p>
            </div>`
            document.getElementById('add').appendChild(span)
        }
    }else if(seatCollection.includes(seatNumber)=== true && seatCollection.length <=4){
        // Apply Btn
        applyBtn.setAttribute('disabled', false);
        apply_Div.classList.remove('hidden');

        // remove array specific element
        let index = seatCollection.indexOf(seatNumber);
        seatCollection.splice(index, 1);

        // remove element 
        removeElementByClassId(`#add .${seatNumber}`)
        seat.style='color:; background';

        // booking Seats
        let bookingSeats= stingToNumber('booking-seats');
            bookingSeats--

            let LeftSeats = stingToNumber('left-seats');
            LeftSeats++

            
            // total Price
            let totalPrice =decreasePrice(bookingSeats, price);
            totalPriceElement.innerText = totalPrice;

            // grand total
            grandTotalPriceElement.innerText = totalPrice;

            LeftSeatsElement.innerText = LeftSeats;
            
            bookingSeatsElement.innerText = bookingSeats;
        }
    })
}


