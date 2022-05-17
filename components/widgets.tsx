import { AiFillGithub, AiFillMediumSquare, AiFillTwitterSquare } from 'react-icons/ai'
const Widgets = () => {
  return (
    <>
      <div className="z-20 fixed widget-wrapper w-9 ml-2 hidden h-5/6 flex-col justify-end md:flex">
        <ul className="flex flex-col align-center justify-end widget">
          <li className="my-2 mx-auto"><a href="https://github.com/abaporu-C"><AiFillGithub className="text-2xl" /></a></li>
          <li className="my-2 mx-auto"><a href="https://medium.com/@viniciuslp42/about"><AiFillMediumSquare className="text-2xl" /></a></li>
          <li className="my-2 mx-auto"><a href="https://twitter.com/_vinny_dev"><AiFillTwitterSquare className="text-2xl" /></a></li>
        </ul>
      </div>
      <div className="fixed bottom-0 left-auto right-10 z-20 block">
        <div className="widget hidden flex-col md:flex">
          <a href="mailto:viniciuslp42@gmail.com" className="ml-2 mb-5 vertical-text inline-block">viniciuslp42@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default Widgets
