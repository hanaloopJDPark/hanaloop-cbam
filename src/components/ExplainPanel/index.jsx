export const ExplainPanel = ({data, index}) => {
    const {title, image, description} = data
    return (
        <div className="w-full flex justify-center mb-[100px]">
            <div className="md:w-[700px] min-h-[300px] w-[90%] bg-gray-100 rounded-lg flex gap-10 justify-center items-center p-12 flex-col md:flex">
                <img src={image} width="60%" alt="CBAM IMAGE" className="rounded-md"/>
                <div className="flex flex-col">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}