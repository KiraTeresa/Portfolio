import './about.scss'

function Quotation({ isVisible }) {
    return (
        <section className={`${isVisible ? 'visible' : ''}`}>
            <div className='quote'>
                “Becoming a programmer means to choose a path of continuous learning opportunities. As I am a person who likes taking on challenges and to expand my knowledge, getting into tech was the right way for me.”
            </div>
        </section>
    )
}

export default Quotation;