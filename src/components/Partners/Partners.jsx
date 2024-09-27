import React from 'react'
import testLogo from '../../assets/images/testLogo.jpg'
const Partners = () => {
  return (
    <div>
        <div className='max-w-[1440px] mx-auto '>
            <div className="border border-t border-b border-gray-200 pt-[60px] pb-[20px] px-[20px]">
                <h1 className="text-[50px] font-[200]">Collaborators & clients</h1>
            </div>
            <div className='flex'>
                <div className='flex-1 border-r border-gray-200'>
                    <div className='flex flex-col justify-end items-end p-[20px] border-b border-gray-200 '>
                        <div className='flex flex-col gap-[70px]'>
                            <h6 className='text-primary uppercase font-[100] text-[10px]'>We work with the best</h6>
                            <h1 className='text-[35px] font-[200] w-[500px]'>Our esteemed partners and clientele set the standard in luxury real estate</h1>
                        </div>
                     
                    </div>
                    <div className='flex flex-col  items-end p-[20px] h-[30vh] border-b border-gray-200'>
                            <p className='text-gray-400 text-[14px] w-[500px] font-[200] '>Our collaborations with top industry leaders and high-profile clients define the gold standard in luxury real estate. Working with renowned developers, financial institutions, and elite brands, we ensure exceptional service.</p>
                    </div>
                    <div></div>
                </div>
                <div className='flex-1 grid grid-cols-2'>
                    <div className=' p-[30px] border-r border-b border-gray-200 flex tems-center justify-center'>
                        <div className='h-[70px] w-[70px]'>
                            <img src={testLogo} />
                        </div> 
                    </div>    
                    <div className=' p-[30px] border-r border-b border-gray-200 flex tems-center justify-center'>
                        <div className='h-[70px] w-[70px]'>
                            <img src={testLogo} />
                        </div> 
                    </div>    
                    <div className=' p-[30px] border-r border-b border-gray-200 flex tems-center justify-center'>
                        <div className='h-[70px] w-[70px]'>
                            <img src={testLogo} />
                        </div> 
                    </div>    
                    <div className=' p-[30px] border-r border-b border-gray-200 flex tems-center justify-center'>
                        <div className='h-[70px] w-[70px]'>
                            <img src={testLogo} />
                        </div> 
                    </div>    
                    <div className=' p-[30px] border-r border-b border-gray-200 flex tems-center justify-center'>
                        <div className='h-[70px] w-[70px]'>
                            <img src={testLogo} />
                        </div> 
                    </div>    
                    <div className=' p-[30px] border-r border-b border-gray-200 flex tems-center justify-center'>
                        <div className='h-[70px] w-[70px]'>
                            <img src={testLogo} />
                        </div> 
                    </div>    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners