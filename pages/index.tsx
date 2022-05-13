import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

function HomePage() {
  return (
    <>
      <section className=" flex justify-center h-screen">
        <div className="align-middle text-center w-5/6">
          <h1 className="text-6xl shadow-text">Welcome</h1>
          <Image width="200" height="200" src="/assets/george_constanza.jpg" layout="responsive" />
          <p className="text-lg font-bold">Hello! My name is Vinicius Pereira and I'm a recently Software Developer graduate from Niagara College, Canada.
            Web Development is what I am passionate about, being able to deliver efficient software at a timely and efficient manner.</p>
        </div>
      </section>
    </>
  )
}

export default HomePage
