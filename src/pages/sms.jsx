import Navbar from '../components/navbar/navbar'
import SendSms from '../components/sendSms/sendSms'
import SmsPlatforms from '../components/smsPlatforms/smsPlatforms'
import style from './module.config.css'



const Sms = () => {
  return (
    <div style={style.body} className=" flex flex-col">
        <div>
          <Navbar />
        </div>

        <div className=' flex'>
          <div className=''>
            <SmsPlatforms />
          </div>
          

          <div className=' sm:block hidden w-full'>
            <SendSms />
          </div>


        </div>
          <div className=' sm:hidden block h-[100vh] pt-[350px] text-center text-white text-[20px]' >
            <div className='flex justify-center items-center'>
                <h1>AFSUSKI BU MOBIL QURULMALAR UCHUN EMAS 😢</h1>
            </div>
          </div>
    </div>
  )
}

export default Sms