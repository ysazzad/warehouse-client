import React from 'react';
import './Client.css'

const Clients = () => {
    return (
        <div>
            <h2 className='text-center m-5' style={{ color: "orange" }}>What Our Happy Clients say </h2>
            <div className='client container' >
                <div >
                    <img className='client-pic' src="https://img.freepik.com/free-photo/confident-woman-with-glasses_1098-1223.jpg?w=2000" alt="" />
                    <p className='mt-2'>Not every girl wants “scooty” some of them wants “Royal Enfield” & I will find her one Day ! </p>
                </div>
                <div>
                    <img className='client-pic' src="https://www.pngall.com/wp-content/uploads/2016/05/Man-Download-PNG.png" alt="" />
                    <p className='mt-2'>  Your Bike may ride You But, My Ktm Rides my Soul!</p>
                </div>
                <div>
                    <img className='client-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0cQWEQVcFyru75Hzasb-AgbkEwtgETSmMSXp1BMUs0GTRi2LHZB-mtNUqivyTNa0TBM&usqp=CAU" alt="" />
                    <p className='mt-2'> If you don't ride in the rain, you don't ride</p>
                </div>
            </div>
        </div>
    );
};

export default Clients;