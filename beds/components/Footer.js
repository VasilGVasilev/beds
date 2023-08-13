import Image from 'next/image'

const Footer = ({toTopHandle}) => {
    return (
        <div className="h-fit w-full flex-col p-10 bg-gradient-to-t from-ixora-dark from-10% via-ixorafrom-ixora-dark via-70% to-[#2e281f] to-90% lg:px-40">
        <div className='flex justify-center relative bottom-12'>
          <img src="/up-to-top.png" className="w-16 h-16 cursor-pointer animate-bounce" onClick={toTopHandle} alt="up-to-top-btn" />
        </div>
        <div className='flex justify-center items-center'>
          <div className='md:flex md:justify-center'>

            <div className='md:text-center'>
              <div className='text-blue-600 font-mono text-xl'>DM - падащи легла</div>
              <div className='p-3 text-white font-mono text-sm'>Ние предлагаме огромно разнообразие, като всеки дизайн е съобразен със специфичните преференции на клиента. Потърсете ни сега, за да реализираме Вашите идеи. </div>
            </div>
            <div className='md:text-center'>
              <div className='text-blue-600 font-mono text-xl'>Контакти</div>
              <div className='p-3 flex flex-col justify-center items-center'>
                <div className="py-2 flex space-x-3 items-center justify-center">
                  <Image
                    src="/green-phone.svg"
                    alt="Phone Ring"
                    className="bg-transparent animate-pulse"
                    width={20}
                    height={8}
                  />
                  <div className="text-sm text-green-600"><a href={`tel:00359888368256`}>0888368256</a></div>
                </div>
                <div className="py-2 flex space-x-2 items-center justify-center">
                  <img
                    src="/assets/fb.svg"
                    alt="facebook"
                    className="bg-transparent animate-pulse"
                    width={50}
                    height={50}
                  />
                  <div className="text-sm whitespace-nowrap text-blue-600"><a href={'https://www.facebook.com/profile.php?id=100042058017286&locale=bg_BG'}>Фейсбук страница</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
}

export default Footer;