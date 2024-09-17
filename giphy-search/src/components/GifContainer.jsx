function GifContainer({ gifs }) { //prop drilling bc use container doesnt have acess unless we pass it down (look at app)
    return (
        <ul>
            {
                gifs?.map((gif) => {
                    return <li key={gif.id}>
                        <img src={gif.images.original.url} />

                    </li>
                })
            }
        </ul>
    )
}

export default GifContainer
