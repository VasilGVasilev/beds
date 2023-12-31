import Image from 'next/image'
import { BsTelephoneFill, BsFacebook } from 'react-icons/bs'
import { GoMoveToTop } from 'react-icons/go'




const Footer = ({ toTopHandle }) => {
  return (
    <div className="h-fit w-full flex-col p-10 bg-gradient-to-b from-black from-10% via-black via-40% to-gray-900 to-70% lg:px-40">
      <div className='flex justify-center relative bottom-12'>

        <GoMoveToTop size={60} onClick={toTopHandle} className='cursor-pointer text-blue-600 animate-bounce' />
      </div>
      <div className='flex justify-center items-center'>
        <div className='md:flex md:justify-center'>

          <div className='md:text-center'>
            <div className='text-blue-600 font-mono text-xl'>DM - падащи легла</div>
            <div className='p-3 text-white font-mono text-sm text-justify'>Ние предлагаме огромно разнообразие, като всеки дизайн е съобразен със специфичните преференции на клиента. Потърсете ни сега, за да реализираме Вашите идеи. </div>
          </div>
          <div className='md:text-center'>
            <div className='text-blue-600 font-mono text-xl'>Контакти</div>
            <div className='p-3 flex flex-col '>
              <div className="py-2 flex space-x-2 ">
                <BsTelephoneFill size={24} className='text-white' />
                <div className="text-sm text-green-600"><a href={`tel:00359888368256`}>0888368256</a></div>
              </div>
              <div className="py-2 flex space-x-2">
                <BsFacebook size={24} className='text-white' />
                <div className="text-sm text-blue-600"><a href={'https://www.facebook.com/profile.php?id=100042058017286&locale=bg_BG'}>Фейсбук страница</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer;