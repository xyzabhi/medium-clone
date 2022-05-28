import React from 'react'
import TypeAnimation from 'react-type-animation'

function Poster() {
  return (
    <div
      className="mx-auto flex flex-row justify-center border-b-[0.5px]  border-solid border-black p-16"
      style={{ background: '#ffc018' }}
    >
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif " style={{ fontSize: '100px' }}>
          Stay curious.
        </h1>
        <h2 className="text-2xl font-light">
          Discover stories, thinking, and expertise from writers on any topic.
        </h2>
        <h2
          className="mt-8
        w-36 rounded-full bg-black py-2 px-3 py-2 text-center text-white"
        >
          Start reading
        </h2>
      </div>
      <div className=" flex hidden max-w-xl flex-col   md:inline-flex">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dicta, amet, nam repellendus nulla odio similique vitae deserunt
          blanditiis molestias excepturi officia sint, voluptatum labore et?
          Adipisci explicabo dolor officiis.
        </p>
        <TypeAnimation
          cursor={false}
          sequence={[
            '#########    ##### ### ## !! #$ $$ % ## # @ ## # # # @@##@  ###### # # # # # #^#&*^*&^&*^&* &^ *^*^&*^**((*( (&&%!@! #$',
            1000,
            '',
          ]}
          wrapper="h2"
          className="max-w-xl"
          repeat={Infinity}
          cursor={true}
        />
      </div>
    </div>
  )
}

export default Poster
