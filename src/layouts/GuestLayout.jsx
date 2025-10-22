import { Outlet } from 'react-router-dom'
import bg from './../assets/images/matrix-bg.jpg'

const GuestLayout = () => {
    return (
        <main className="absolute inset-0 flex flex-col overflow-hidden z-0">
            <div className="relative flex-1">
                <div className="position-relative absolute inset-0 flex items-center justify-center bg-[#0D1824] text-[#f0f0f0]">
                    <div className="pointer-events-none absolute  inset-0 bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
                    <div className='absolute inset-0 max-h-[100vh] overflow-y-auto pt-inset-top pb-inset-bottom md:mt-28'>

                        <div className='relative z-10 mx-auto mt-8 flex max-w-[500px] flex-col overflow-auto rounded-xl bg-[#192534] p-6 shadow-lg'>
                          <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GuestLayout