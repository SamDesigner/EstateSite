import React from 'react'
import Showcase from '../../assets/images/showcaseBg.jpg'
const AboutUs = () => {
  return (
    <div className='bg-gray-100'>
        <div className='max-w-[1440px] mx-auto px-[80px] py-[100px]'>
          
            <div className='flex gap-[30px]'>
                <div className='flex-1 flex flex-col gap-[5px]'>
                    <div className='h-[30vh]'>
                        <img className='h-full w-full object-cover' src={Showcase} />
                    </div>
                    <div className='h-[20vh] flex gap-[5px]'>
                        <div>
                        <img src={Showcase} />
                        </div>
                        <div>
                        <img src={Showcase} />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex flex-col gap-[20px]'>
                        <h1 className='text-[40px]'>About Company</h1>
                        <div className='text-gray-600 flex flex-col gap-[15px] text-[15px] text-justify'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil minima pariatur ipsam dolorum sunt excepturi voluptas suscipit deserunt mollitia, doloremque maiores totam, cum porro!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quidem mollitia maiores nulla placeat repellendus. Exercitationem excepturi neque, nobis aperiam eaque dolores veritatis maiores dicta!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quidem mollitia maiores nulla placeat repellendus. Exercitationem excepturi neque, nobis aperiam eaque dolores veritatis maiores dicta!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutUs