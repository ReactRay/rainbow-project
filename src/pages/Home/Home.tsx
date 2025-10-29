
import './home.css'
import pic from '../../../public/pic3.jpg';
function Home() {
    return (
        <div className="home">
            <section className='container'>
                <div className='half-one'>
                    <h1 className='main-header'>Welcome to Rainbow</h1>
                    <ul>
                        <li className='list-item'>Explore a world of vibrant colors</li>
                        <li className='list-item'>Connect with a community that celebrates diversity</li>
                        <li className='list-item'>Let your true colors shine!</li>
                    </ul>
                    <button className='btn btn-primary-light'>more info</button>
                </div>
            </section>


            <div className='half-two'>
                <h2 >try a free demo</h2>
                <button className='btn'>Try Now!</button>
                <img src={pic} alt="image" className='pic' />
                <p>Your ultimate destination for vibrant and colorful experiences. Dive into a world where every shade tells a story, and every hue sparks creativity. Explore our features, connect with a community that celebrates diversity, and let your true colors shine!</p>

            </div>
        </div>
    )
}

export default Home
