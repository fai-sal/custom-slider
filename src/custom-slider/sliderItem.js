const SliderItem = ({ slide: { type, url, alt, id } }) => {
    return (
        <div className="slider-item" >
            {
                type === 'image' ?
                    <img src={url} alt={alt | id} />
                    :
                    <div>video</div>
            }
        </div>
    )
}

export default SliderItem;