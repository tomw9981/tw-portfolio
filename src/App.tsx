import "./App.css";
import SkillTag from "./components/SkillTags";
import xIcon from "./assets/x-logo-black.png";
import xIconW from "./assets/x-logo-white.png";
import ytIcon from "./assets/youtube_social_icon_red.png";
import inIcon from "./assets/In-Blue-72.png";
import downArrow from "./assets/scroll-down-50.png";
import GameItem, { game } from "./components/GameItem";
import JobItem, { job } from "./components/JobItem";
import { useRef } from "react";
import data from "./info/data";

//do an animation bounce to show to scroll down on the website

function App() {
    const about = useRef<HTMLDivElement>(null);
    const games = useRef<HTMLDivElement>(null);
    const experience = useRef<HTMLDivElement>(null);

    function aboutClick() {
        about.current?.scrollIntoView({ behavior: "smooth" });
    }
    function gamesClick() {
        games.current?.scrollIntoView({ behavior: "smooth" });
    }
    function experienceClick() {
        experience.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="bg-neutral-50 max-w-full w-screen min-h-screen h-fit">
            <div className="w-full h-dvh flex flex-col">
                {/* Header Bar */}
                <header className="h-24 w-full relative text-nowrap max-w-screen-xl px-8 py-8 flex flex-row items-center mx-auto overflow-hidden">
                    <a
                        href={window.location.href}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h1 className="text-2xl sm:text-3xl h-full pr-2 min-w-fit">
                            <b>
                                Thomas
                                <span className="text-accent">Worrell</span>
                            </b>
                        </h1>
                    </a>
                    {/* Scroll Buttons */}
                    <div className="text-xl h-full w-full min-w-fit hidden [@media(min-width:812px)]:flex flex-row space-x-16 items-end justify-end right pr-8">
                        <button
                            onClick={gamesClick}
                            className="w-fit active:text-accent/100 hover:text-accent/75 duration-300 transition-colors"
                        >
                            Games
                        </button>
                        <button
                            onClick={aboutClick}
                            className="w-fit active:text-accent/100 hover:text-accent/75 duration-300 transition-colors"
                        >
                            About Me
                        </button>
                        <button
                            onClick={experienceClick}
                            className="w-fit active:text-accent/100 hover:text-accent/75 duration-300 transition-colors"
                        >
                            Experience
                        </button>
                    </div>
                    {/* Social Icons */}
                    <div className="min-w-fit h-7 sm:h-8 md:full px-4 py-1 gap-6 sm:gap-4 flex flex-row items-center my-auto absolute inset-y-0 right-0 [@media(min-width:812px)]:relative justify-end">
                        <div className="h-full min-w-fit">
                            <a
                                href="https://twitter.com/ThomasWorrell15"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-full" src={xIcon} />
                            </a>
                        </div>
                        <div className="h-full min-w-fit">
                            <a
                                href="https://www.youtube.com/channel/UC0H98p0WUC6VoYj7j3YSB8g/featured"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-full" src={ytIcon} />
                            </a>
                        </div>
                        <div className="h-full min-w-fit">
                            <a
                                href="https://www.linkedin.com/in/thomas-worrell-bb9427240/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="h-full" src={inIcon} />
                            </a>
                        </div>
                    </div>
                </header>
                {/* Summary */}
                <div
                    className="w-full h-full relative flex flex-col items-center justify-center px-8
                bg-[url('/Somepattttt.png')] bg-blend-overlay bg-neutral-300"
                >
                    <div
                        className="max-w-screen-xl w-full
                    flex flex-col text-center items-center justify-center"
                    >
                        <h2>Thomas Worrell</h2>        
                        <p className="pt-4 w-full sm:w-2/3">{data.Profile.summary}</p>
                    </div>
                    <img
                        className="absolute size-20 bottom-0 p-4 animate-bounce"
                        src={downArrow}
                    />
                </div>
            </div>

            <div className="w-full h-fit mx-auto flex flex-col items-center justify-center">

                {/* Games */}
                <div className="w-full h-fit bg-neutral-100 flex justify-center">
                    <div
                        ref={games}
                        className="max-w-screen-xl w-full h-fit py-20"
                    >
                        <h2 className="text-center pb-24">My Games</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 place-items-center">
                            {data.Game.map((x) => (
                                <GameItem gameData={x as game} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* About Me */}
                <div className="w-full h-fit flex justify-center">
                    <div
                        ref={about}
                        className="px-16 flex flex-col max-w-screen-xl w-full h-fit py-20 p-2"
                    >
                        <h2 className="font-display pb-24 text-center">
                            About Me
                        </h2>
                        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-y-16 w-full gap-x-32 h-fit ">
                            <div className="w-full sm:w-4/5 md:max-lg:w-2/3">
                                <h3 className="pb-8"> Get to know me</h3>
                                <p className="text-lg text-pretty">
                                    {data.Profile.aboutMe}
                                </p>
                            </div>
                            <div className="w-full sm:w-4/5 md:max-lg:w-2/3 flex flex-col">
                                <h3 className="pb-8">My Skills</h3>
                                <div className="flex flex-wrap h-min gap-2">
                                    {/* Skills */}
                                    {data.Skill.map((x) => (
                                        <SkillTag text={x.name} key={x.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Experience */}
                <div className="w-full h-fit flex justify-center bg-neutral-100">
                    <div
                        ref={experience}
                        className="py-20 max-w-screen-xl w-full"
                    >
                        <h2 className="pb-24 text-center">Experience</h2>
                        <div className="flex flec-col flex-wrap justify-center w-full p-4 gap-y-8">
                            {data.Job.map((x) => (
                                <JobItem jobData={x as job} />
                            ))}
                        </div>
                    </div>
                </div>
                <footer className="w-full h-96 text-center bg-neutral-950 text-neutral-200">
                    <div className="max-w-screen-xl w-full h-full flex flex-col items-center mx-auto divide-y-2 px-4">
                        <div className="w-full h-full flex flex-row items-center justify-center">
                            <div className=" h-full w-5/6 flex flex-col items-center justify-center space-y-2">
                                <h3>Thomas Worral</h3>
                                <p className="text-center w-full sm:max-lg:w-full">
                                    This is a bunch of blibber blabber about my
                                    and what I do...
                                </p>
                                {/* Socials */}
                                <div className="flex flex-row sm:flex-row flex-wrap w-2/3 h-fit items-center gap-2 justify-evenly py-4">
                                    <div className="w-6">
                                        <a
                                            href="https://twitter.com/ThomasWorrell15"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="h-full"
                                                src={xIconW}
                                            />
                                        </a>
                                    </div>
                                    <div className="w-6">
                                        <a
                                            href="https://www.youtube.com/channel/UC0H98p0WUC6VoYj7j3YSB8g/featured"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="h-full"
                                                src={ytIcon}
                                            />
                                        </a>
                                    </div>
                                    <div className="w-6">
                                        <a
                                            href="https://www.linkedin.com/in/thomas-worrell-bb9427240/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="h-full"
                                                src={inIcon}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-8 text-sm w-full">
                            <span>
                                © 2024 All rights reserved. - Designed & Coded
                                by -{" "}
                            </span>
                            <a
                                target="_blank"
                                href="https://github.com/JustExisting1"
                                rel="noopener noreferrer"
                            >
                                <span className="underline">JustExisting1</span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
