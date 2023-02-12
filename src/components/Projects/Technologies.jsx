function Technologies({ props }) {
    const { tech } = props

    return (
        <section className='stack-wrapper'>
            <h2>Technologies</h2>
            <ul>
                {tech.map((t => <li key={t}>{t}</li>))}
            </ul>
        </section>
    )
}

export default Technologies;