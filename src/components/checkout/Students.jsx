import students from './../../assets/images/students-3.png'
const Students = () => {
    return (
        <div className="w-full flex justify-center py-8 lg:py-12">
            <div className="items-center flex font-bold text-[14px] lg:text-[20px] gap-4">
                <img alt="Students"
                    loading="lazy"
                    width="89"
                    height="35"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={students}
                    srcSet={students}
                />
                <p className="">
                    Join <span className="text-[#ECC870]">155,000+</span> members
                    already transforming their lives
                </p>
            </div>
        </div>
    )
}

export default Students