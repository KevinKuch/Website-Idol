import Image from 'next/image';

export default function Footer({}) {


    return (
        <footer className='Footer'>
            <div className="p-14 bg-white text-[#1E1E1E]">
                <div className="md:flex items-start justify-between">
                    <div className="left flex flex-col justify-between max-md:mb-10">
                        <div className="">
                            <img className="w-[200px] mb-3" src='./images/logo1.png' alt="Logo Image" />
                            <h1 className="text-xl font-bold">Le plus grand, extraordinaire et étendu festival de musique <br/> K-pop à travers le monde.</h1>
                        </div>
                        <p className="mt-20 max-md:hidden text-xl">2023 &copy; Elegent</p>
                    </div>
                    <div>
                        <div className="flex items-start space-x-12">
                            <ul>
                                <li className="text-xl font-semibold pb-5">Menu</li>
                                <li>Home</li>
                                <li>Performance</li>
                                <li>Booking</li>
                                <li>Store</li>
                                <li>About Us</li>
                            </ul>
                            <ul>
                                <li className="text-xl font-semibold pb-5">Help</li>
                                <li>Privacy & Policy</li>
                                <li>Term of Use</li>
                            </ul>
                            <ul>
                                <li className="text-xl font-semibold pb-5">Social</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}