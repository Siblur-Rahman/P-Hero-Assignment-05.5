
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

//design seat Btn
function addClass(element, ...Class){
    element.classList.add(...Class)
} 
function removeClass(element, ...Class){
    element.classList.remove(...Class)
} 
// function addTwoClass(element, Class_1, Class_2){
//     element.classList.add(Class_1, Class_2)
// } 

function removeElementByClassId(idClass){
    document.querySelector(idClass).remove()
}

function convertToNumber(id){
    const string =document.getElementById(id).innerText;
    let number =parseInt(string);
    return number
}
function setText(id, text){
    document.getElementById(id).innerText = text;
}
function increment(id){
    let number = convertToNumber(id);
    number++
    return number
}
function decrement(id){
   let number = convertToNumber(id);
   number--
    return number
}
function totalValue(countNumberId, rateId){
    let countNumber = convertToNumber(countNumberId);
    let rate = convertToNumber(rateId);
    return countNumber * rate;
}
// function decreasePrice(setNumber, price){
//     return setNumber * price
// }
// function getConvertIncrementSetValue(id){
    
//     number++
//     document.getElementById(id).innerText = number;
// }
// function getConvertDecrementSetValue(id){
    
//     number--
//     document.getElementById(id).innerText = number;
// }

function Discount(totalId, discount){
    let total = convertToNumber(totalId);
    return total/100 * discount
}
function grandTotal(totalId, discountId){
    let total = convertToNumber(totalId);
    return  total - discount
}

// function displayNumber(LeftSeats, bookingSeats, total, grandTotal, ){
    
// }
LeftSeatsElement.innerText= 12;
// let totalPrice =0;
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

           if(seatCollection.length<=4){
            //    seat.style='color:white; background:green';
            //booking seat
            let bookingSeats = increment('booking-seats');
            setText('booking-seats', bookingSeats);
            

            //left seat
            let leftSeats = decrement('left-seats');
            setText('left-seats', leftSeats);
            // setting seat Design
            addClass(seat,'bg-green-600', 'text-white');

            // total Price
            let total = totalValue('booking-seats', 'price');
            setText('total', total);
            // grand total

            // coupon apply

            //  apply Btn
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

        //booking seat
        let bookingSeats = decrement('booking-seats');
        setText('booking-seats', bookingSeats);
        

        //left seat
        let leftSeats = increment('left-seats');
        setText('left-seats', leftSeats);
       
        // setting seat Design
        removeClass(seat,'bg-green-600', 'text-white');

        // remove element 
        removeElementByClassId(`#add .${seatNumber}`)
            
            // total Price
            let total = totalValue('booking-seats', 'price');
            setText('total', total);

            // grand total

        }
    })
}


