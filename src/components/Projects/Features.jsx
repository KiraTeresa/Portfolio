function Features({ props }) {
    const { description } = props

    return (
        <section className='features'>
            <h2 className='zenDots'>Features</h2>
            <div className='feat-wrapper'>
                {description.map((feat, index) => {
                    return (
                        <div key={index}>
                            <h3>{feat.feature}</h3>
                            <p>{feat.descr}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Features;