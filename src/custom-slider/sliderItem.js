const SliderItem = ({ slide: { type, url, alt, id } }) => {
    return (
        <div className="slider-item" >
            {
                type === 'image' ?
                    <img src={url} alt={alt | id} />
                    :
                    <video >
                        <source src={url} type="video/mp4" />
                    </video>
            }
        </div>
    )
}

export default SliderItem;