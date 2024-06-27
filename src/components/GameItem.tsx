const GameItem: React.FC<{ gameData: game }> = ({ gameData }) => {
    return (
        <a
            href={gameData.link}
            target="_blank"
            rel="noopener noreferrer"
            key={gameData.id}
            className="group relative border flex bg-slate-600 hover:-translate-y-3 duration-500 rounded-lg w-10/12 aspect-video shadow-md hover:shadow-lg  hover:shadow-neutral-500 items-end overflow-clip"
        >
            <img
                className="size-full group-hover:scale-110 duration-500 transition-transform ease-in-out"
                src={"url('"+gameData.imageUrl+"')"}
            />
            <div className="absolute inset-x-0 h-0 group-hover:h-16 duration-500 delay-75 items-center flex bg-opacity-50 right-0 bg-neutral-50 ">
                <div className="opacity-0 flex w-full items-center group-hover:opacity-100 duration-500 transition-opacity">
                    <label className="text-2xl w-fit text-nowrap font-bold text-start px-4 ">
                        {gameData.name}
                    </label>
                    <label className="text-xl w-full text-nowrap text-start">
                        • {gameData.role}
                    </label>
                </div>
            </div>
        </a>
    );
};

export interface game {
    id: number;
    name: string;
    imageUrl: string;
    link: string;
    role: string;
}

export default GameItem;
