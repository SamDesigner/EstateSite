import React from 'react'

const AboutLeaders = () => {
  return (
    <div className='max-w-[1440px] mx-auto pt-[30px]'>
        <div className=" pb-[20px] px-[20px]">
            <h1 className="text-[50px] font-[200]">Our Leaders</h1>
        </div>
        <div className='flex flex-col items-center md:flex-row justify-center gap-[20px] p-[20px] '>
            <div className='w-full md:w-[400px] rounded-2xl shadow-lg flex flex-col'>
                <div className='w-full h-[300px] p-[20px]'>
                    <img className='w-full h-full object-cover rounded-2xl' src='https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?size=626&ext=jpg&ga=GA1.1.713942972.1716403847&semt=ais_hybrid' />
                </div>
                <div className='flex flex-col gap-[10px] p-[20px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <h6 className='text-[14px] text-primary'>CEO</h6>
                        <h3 className='text-[22px] font-[200]'>
                            Udo Okonkwo
                        </h3>
                    </div>

                    <p className='text-[12px] font-[200]'>
                    A distinguished lawyer and member of the Forbes Business Council, Udo Okonjo is an award-winning real estate expert and the author of "Real Women Invest In Real Estate." Since founding Fine and Country West Africa, she has driven its growth and established its strong presence in the West African market.
                    </p>
                </div>
            </div>
            <div className='w-full md:w-[400px] rounded-2xl shadow-lg flex flex-col'>
                <div className='w-full h-[300px] p-[20px]'>
                    <img className='w-full h-full object-cover rounded-2xl' src='https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?size=626&ext=jpg&ga=GA1.1.713942972.1716403847&semt=ais_hybrid' />
                </div>
                <div className='flex flex-col gap-[10px] p-[20px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <h6 className='text-[14px] text-primary'>CEO</h6>
                        <h3 className='text-[22px] font-[200]'>
                            Udo Okonkwo
                        </h3>
                    </div>

                    <p className='text-[12px] font-[200]'>
                    A distinguished lawyer and member of the Forbes Business Council, Udo Okonjo is an award-winning real estate expert and the author of "Real Women Invest In Real Estate." Since founding Fine and Country West Africa, she has driven its growth and established its strong presence in the West African market.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutLeaders