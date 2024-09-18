import { FaGithubAlt } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Page() {
    return (
        <section className="h-screen">
            {/* Title Card */}
            <div className="flex p-12 h-[40%] px-12">
                <div className="flex-1 gap-y-4 grid justify-center items-center content-center justify-items-center text-heading1-bold">
                    <h1 className="mr-6">MoraLus</h1>
                    <h1>&</h1>
                    <h1 className="ml-6">RojaLus</h1>
                </div>

                {/* Description */}
                <div className="flex-1 text-center grid items-center text-heading4-medium leading-8 content-center">
                    <p>
                        Based off out last names, this project is a steadily growing - albeit full of bugs -
                        site that was created out of the idea of having a tool we could use and a fullstack project.
                        <br />
                        You might see a few things not working but don't worry, it will get fixed somewhere down
                        the line. If you are curious as to how much or what kind of work is done here, check out
                        the git repository.

                    </p>
                    <a className="grid justify-center items-center" href="https://github.com/JMorales1905/moralus_rojalus" target="_blank"> <FaGithubAlt className="w-[40px] h-[40px] mt-4 hover:scale-110" /></a>
                </div>
            </div>

            <div className="h-[1px] my-12 w-[20%] flex justify-center mx-auto bg-black"></div>

            {/* Body */}
            <div className="w-screen grid">
                <div className="w-full text-center capitalize text-heading2-semibold">because your story matters</div>
                <p className="text-heading4-medium justify-center leading-8 w-screen px-[20%] text-center mt-2">Think about the future. Somewhere down the line, you might imagine youself in a better place.
                    Maybe at this moment, you are going through a tough spot. The future you will look back and be grateful that
                    past you never gave up.
                    <br />
                    The journey really does matter more than the destination and it is with that thought that
                    project <span className="underline text-red-800 text-[25px]">MoraLus & RojaLus</span> came to be. A simple project where a friend and I could
                    access and store our entries, serve as my flagship project and a place we could return to somewhere in the future.
                </p>
            </div>
        </section>
    )
}