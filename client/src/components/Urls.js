const Urls = () => {

    // Function to limit the length of the link
    const limitLinkLength = (link, maxLength) => {
        if (link.length > maxLength) {
            // Trim the link and append ellipsis (...) to indicate truncation
            return link.substring(0, maxLength - 3) + '...';
        }
        return link;
    };

    return (
        <div className="mx-[5%]">


            <div className="border-t-2 p-1 flex flex-col sm:flex-row sm:justify-between sm:p-3 text-lg sm:leading-8 items-left my-0">
                <div className="overflow-hidden">
                    <div className="text-2xl"><a href="/">https://www.slinkly.in</a></div>
                    <div><a href="/">{limitLinkLength("https://www.youtube.com/watch?v=H9M02of22z4&t=111s", 34)}</a></div>
                    <div><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span>23-01-2024</span></div>
                </div>
                <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                    <button className="" >Share Access</button>
                    <button>View Analytics</button>
                    <div className="flex gap-3 ">
                        <button><span className="m-1"><i class="fa-solid fa-pencil"></i></span>Edit<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-copy"></i></span>Copy<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-trash"></i></span>Delete<span></span></button>
                    </div>

                </div>
            </div>
            <div className="border-t-2 p-1 flex flex-col sm:flex-row sm:justify-between sm:p-3 text-lg sm:leading-8 items-left my-0">
                <div className="overflow-hidden">
                    <div className="text-2xl"><a href="/">https://www.slinkly.in</a></div>
                    <div><a href="/">{limitLinkLength("https://www.youtube.com/watch?v=H9M02of22z4&t=111s", 34)}</a></div>
                    <div><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span>23-01-2024</span></div>
                </div>
                <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                    <button className="" >Share Access</button>
                    <button>View Analytics</button>
                    <div className="flex gap-3 ">
                        <button><span className="m-1"><i class="fa-solid fa-pencil"></i></span>Edit<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-copy"></i></span>Copy<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-trash"></i></span>Delete<span></span></button>
                    </div>

                </div>
            </div>
            



        </div>
    )
}

export default Urls;