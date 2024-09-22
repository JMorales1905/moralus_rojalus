import { FaGithubAlt } from "react-icons/fa"
import { IconContext } from "react-icons"
import Image from "next/image"

export default function Page() {
    return (
        <section className="h-screen">
            {/* Title Card */}
            <div className="flex p-12 h-[40%] px-12">
                <div className="flex-1 gap-y-4 grid justify-center items-center content-center justify-items-center text-[60px]">
                    <h1 className="mr-6"><span className="text-red-800">Mora</span>Lus</h1>
                    <h1>&</h1>
                    <h1 className="ml-6">Roja<span className="text-red-800">Lus</span></h1>
                </div>

                {/* Description */}
                <div className="flex-1 text-center grid items-center text-heading4-medium leading-8 content-center">
                    <p>
                        Based off the last names of me and my friend, this project is a steadily growing - albeit full of bugs -
                        site that was created out of the idea of having a tool we could use and a fullstack project.
                        <br />
                        You might see a few things not working but don't worry, it will get fixed somewhere down
                        the line. If you are curious as to how much or what kind of work is done here, check out
                        the git repository.

                    </p>
                    <a className="grid justify-center items-center" href="https://github.com/JMorales1905/moralus_rojalus" target="_blank"> <FaGithubAlt className="w-[40px] h-[40px] mt-4 hover:scale-110" /></a>
                </div>
            </div>

            <div className="h-[1px] mt-12 mb-8 w-[20%] flex justify-center mx-auto bg-black"></div>

            {/* Body */}
            <div className="w-screen grid">
                <div className="w-full text-center capitalize text-heading2-semibold">because your story matters</div>
                <p className="text-heading4-medium justify-center leading-8 w-screen p-8 px-[20%] text-center mt-2">Think about the future. Somewhere down the line, you might imagine youself in a better place.
                    Maybe at this moment, you are going through a tough spot. The future you will look back and be grateful that
                    past you never gave up.
                    <br />
                    The journey really does matter more than the destination and it is with that thought that
                    project <span className="text-red-800 text-[25px]">MoraLus & RojaLus</span> came to be. A simple project where a friend and I could
                    access and store our entries, serve as my flagship project and a place to reminesce sometime in the future.
                </p>
                <div className="flex w-full justify-center p-8">
                    <Image src={'/assets/image0.jpg'} width={500} height={500} alt="MoralusRojalus" className="border-[12px] border-black" />
                </div>
            </div>

            <div className="h-[1px] mt-12 mb-8 w-[20%] flex justify-center mx-auto bg-black"></div>

            <div className="w-full flex justify-center text-heading2-semibold">Keep Track of the Moments & Collaborate </div>
            <p className="text-heading4-medium justify-center leading-8 w-screen px-[20%] text-center mt-2">Journaling is something of a therapy, allowing for much introspection that many lack in a
                society brimming with social media standards and expectations. Sometimes all we need is a place
                where we can put our honest thoughts on a white canvas and share them with those closest to us.
                In <span className="text-red-800 text-[25px]">MoraLus & RojaLus</span>, our idea began with a journal where groups of people can
                write and view entries of others in a group.
            </p>
            <div className="flex w-full justify-center p-8">
                <Image src={'/assets/Collaborate.jpg'} width={700} height={700} alt="MoralusRojalus" className="border-[12px] border-black" />
            </div>

            <div className="h-[1px] mt-12 mb-8 w-[20%] flex justify-center mx-auto bg-black"></div>

            <div className="flex">
                <div className="grid flex-1 text-center">
                    <div className="w-full grid justify-center text-heading2-semibold p-8">Begin Writing Thoughts and Memories with your First Entry</div>
                    <p className="text-heading4-medium leading-8 px-[20%] text-center mt-2">
                        An idea born between two friends, we'd like you to join us and populate our website.
                        Request to join a group or create your own in a virtual journal playground that is always
                        changing with new ways and features that enhance the your journey among those you wish to
                        share your thoughts with.
                    </p>
                </div>
                <div className="flex flex-1 justify-center">

                </div>
            </div>
        </section>
    )
}