import Image from 'next/image'

function HomePage() {
  return (
    <>
      <section className="mt-5 flex justify-center min-h-screen md:items-center">
        <div className="align-middle text-center w-5/6 md:max-w-lg">
          <h1 className="text-6xl shadow-text md:text-8xl">Welcome</h1>
          <div className="my-8 shadow-lg shadow-white">
            <Image width="100" height="100" priority={true} src="/george_constanza.jpg" className="transition ease-in-out delay-150 sepia rounded-xl hover:transition-all hover:sepia-0" layout="responsive" />
          </div>
          <p className="text-lg font-bold">Hello! My name is Vinicius Pereira and I'm a recently Software Developer graduate from Niagara College, Canada.
            Web Development is what I am passionate about, being able to deliver efficient software at a timely and efficient manner.</p>
        </div>
      </section>
      <section>

      </section>
    </>
  )
}

export default HomePage
