

export default function Page() {
    return (
        <section className="grid justify-center text-center">
            <header className="text-heading1-semibold head-text p-7" >
                Welcome to RojaLus & MoraLus!
            </header>
            <div className="head-text shadow-md shadow-white text-body-medium p-7 mx-4 border-b-white border-b-4 rounded-b-lg">
                <h1>
                    Originally, this website was to serve as a means for two goofballs
                    to make journal entries along with other possible occupations. If you are
                    visiting this website, feel free to make an account and use it as your own
                    journaling site. As my main flagship for a fullstack project, many features
                    will be changing on the daily, reflecting my growth and knowledge and there
                    may be moments where things just don't work how they are suppose to
                    <br />
                    <br />
                    I sincerely hope this leaves some manner of lasting impression and if you are
                    interested, feel free to check out my porfolio website.
                </h1>
            </div>

            <div className="mt-14 flex justify-center">
                <div className="hover:scale-110 transition-all ease-in-out w-fit">
                    <a className="bg-white p-4 rounded-lg text-heading3-bold" href="/sign-in">Sign-in</a>
                </div>
            </div>
        </section>
    )
}