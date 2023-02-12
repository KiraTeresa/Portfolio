import './about.scss'

function Introduction({ isVisible }) {
    return (
        <section className={`introduction ${isVisible ? 'visible' : 'hidden'}`}>
            <div>
                <h2 className='slideOut'>Hi. I'm Kira<br />Fullstack <br />Web Developer</h2>
            </div>
        </section >
    )
}

export default Introduction;