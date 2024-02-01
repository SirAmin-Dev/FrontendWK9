import Image from "next/image"

const greetMe = 'Hello Everybody '

export default function Main() {
  return (
    <div className="grid grid-cols-2 mt-10">
    <div>
        <Image src='/snowroad.jpg' alt="dry road with snow by the side" width={600} height={500}/>
    </div>
    
    <div className='text-2xl bg-slate-950 text-white flex flex-col justify-center items-center'>
    <h2>Good morning, {greetMe}</h2>
    <h1>fundamentals of React Js</h1>
    </div>
    </div>
  )
}
