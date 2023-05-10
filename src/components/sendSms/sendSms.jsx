import axios from 'axios'
import React, { useState } from 'react'
import Modal from '../modal/modal'

const SendSms = () => {
    const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM4NDYsInJvbGUiOm51bGwsImRhdGEiOnsiaWQiOjM4NDYsIm5hbWUiOiJNdWhhbW1hZGpvbm92IE11aGFtbWFkaWxsb2ggQWJkdWx4b3NoaW0gbydnJ2xpIiwiZW1haWwiOiJtb2RldmNvMDVAZ21haWwuY29tIiwicm9sZSI6bnVsbCwiYXBpX3Rva2VuIjpudWxsLCJzdGF0dXMiOiJpbmFjdGl2ZSIsInNtc19hcGlfbG9naW4iOiJlc2tpejIiLCJzbXNfYXBpX3Bhc3N3b3JkIjoiZSQkayF6IiwidXpfcHJpY2UiOjUwLCJ1Y2VsbF9wcmljZSI6MTE1LCJ0ZXN0X3VjZWxsX3ByaWNlIjpudWxsLCJiYWxhbmNlIjo1MDAwLCJpc192aXAiOjAsImhvc3QiOiJzZXJ2ZXIxIiwiY3JlYXRlZF9hdCI6IjIwMjMtMDQtMTNUMTQ6NTU6MjUuMDAwMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIzLTA0LTEzVDE0OjU1OjI2LjAwMDAwMFoiLCJ3aGl0ZWxpc3QiOm51bGx9LCJpYXQiOjE2ODEzOTgwOTIsImV4cCI6MTY4Mzk5MDA5Mn0.kvapqtuAlMBmVxO6I0DAFP5NHBeh2LTF4XAoAhujo_o'
    const [msg , setMsg ] = useState('')
    const [openModal , setOpenModal] = useState(false)

    const handaleClose = () => {
        setOpenModal(true)
    }

    const handleOpen = () => {
        setOpenModal(false)
    }
    


    const time = new Date()
    const h = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    const m = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    // const setSs = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()

    const sendler = async (e) => {
        e.preventDefault()
        
    
          await axios.post('https://notify.eskiz.uz/api/message/sms/send',
            { headers: {Authorization: `Bearer ${TOKEN}`} },
            {
              mobile_phone: "998910435772",
              message: msg,
              from: 4546,
              callback_url: "http://0000.uz/test.php"
            },
          )
      }





  return (
    <div className='sm:p-[50px] px-[70px] w-full h-full gradiend '>
       { openModal && <div >
            <Modal handleOpen={handleOpen}>
                <form className='modalItem flex flex-col' onSubmit={sendler}>
                    <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className='bg-[#54595c] modalItem border-[none] outline-none rounded-[5px] pl-5 h-[200px] w-[300px] text-white' placeholder='Habar...'></textarea>
                    <button type='submit'  className=' bg-[#131516] hover:bg-[#272a2c] mt-5 modalItem text-white px-10 py-2 rounded-[10px]'>Jo'natish</button>
                </form>
            </Modal>
        </div>}

        <div className=' sm:flex flex  flex-col gap-10   justify-center items-center pt-[100px]   '>
            <div className='text-white sm:text-[30px] text-[17px] border-b-[2px] border-b-black pb-4 sm:w-[300px] w-full'>
                <h1>O’qituvchilar Ro’yhati</h1>
            </div>


            <div className='bg-[#F79900] text-center py-2 rounded-[5px] hover:bg-[#98620a] sm:w-[200px] w-[100%]' title="O'qituvchi qo'shish">
                <span className='font-bold' title="O'qituvchi qo'shish">+ Добавить договор</span>
            </div>

            



        </div>


        <div className='py-[100px] text-[white] flex flex-col'>
            {/* <div className=' flex justify-between items-center gap-10 text-[#999] border-b-[2px] pb-2'>
                <p>BUGUN</p>
                <p>ISM FAMILIYA</p>
                <p>TELEFON</p>
                <p> FAN</p>
                <p>ISH VAQTI</p>
                <p>HABAR JO’NATISH </p>
            </div>

            <div className=' flex items-center'>
                <p>{`${h} : ${m}`}</p>
                <p>Husniddin Muhtorov</p>
                <p>+998 91 282 42 62</p>
                <p>3D MAX</p>
                <p>08:00 - 20:00</p>
                <i class="fa-solid fa-message fa-shake"></i>
            </div> */}

            <table>
                <thead>

                <tr>
                    <th>BUGUN</th>
                    <th>ISM FAMILIYA</th>
                    <th>TELEFON</th>
                    <th> FAN</th>
                    <th>ISH VAQTI</th>
                    <th >HABAR JO’NATISH</th>
                </tr>
                </thead>

                <tbody>
                    
                
                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td> <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Muhammadali Anvarov</td>
                    <td>+998 91 659 55 82</td>
                    <td>Web Dasturlash</td>
                    <td>08:00 - 20:00</td>
                    <td> <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 124 25 59</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                <tr>
                    <td>{`${h} : ${m}`}</td>
                    <td>Husniddin Muhtorov</td>
                    <td>+998 91 282 42 62</td>
                    <td> 3D MAX</td>
                    <td>08:00 - 20:00</td>
                    <td > <i class="fa-solid fa-message fa-shake msg" onClick={() => handaleClose()}></i></td>
                </tr>

                
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default SendSms