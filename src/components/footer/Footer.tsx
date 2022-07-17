const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:items-center justify-center bg-[#ffffff19] py-7">
                <h1
                    className="lg:text-4xl items-center text-3xl md:mb-0 mb-6 font-semibold md:w-2/5">
                    <span className="text-teal-400">Welcome</span> to our website
                </h1>

            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8"
            >
                <span>© 2022 Project. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
            </div>
        </footer>
    );
};

export default Footer; 