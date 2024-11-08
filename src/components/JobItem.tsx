import SkillTag from "./SkillTags";

const JobItem: React.FC<{ jobData: job }> = ({ jobData }) => {
    return (
        <>
            <div className="w-full md:w-4/5 lg:w-3/5 min-h-fit flex flex-col rounded-lg p-2 overflow-clip drop-shadow-md gap-y-2 bg-neutral-50">
                <div className="w-full h-18 flex items-center">
                    <div className="min-w-fit justify-center flex h-full aspect-square bg-neutral-200 p-2 overflow-clip rounded-lg
                    shadow-[20px_0_20px_-15px_rgba(0,0,0,0.3)]">
                        <img src={import.meta.env.BASE_URL + jobData.imageUrl} className="h-full" />
                    </div>
                    <div className="bg-neutral-200 space-x-3 pl-6 pr-2 text-sm sm:text-base items-center justify-center flex flex-col sm:flex-row sm:flex-wrap h-3/4 rounded-r-lg -translate-x-3 -z-10 w-full">
                        <p className="text-nowrap">{jobData.position}</p>
                        <p className="text-base lg:text-3xl hidden sm:block">•</p>
                        <p className="text-nowrap">{jobData.company}</p>
                        <p className="text-base lg:text-3xl hidden sm:block">•</p>
                        <p className="text-pretty">{jobData.duration}</p>
                    </div>
                </div>
                <div className="bg-neutral-200 space-x-3 pl-6 pr-2 text-sm sm:text-base items-center justify-center flex flex-col sm:flex-row sm:flex-wrap h-3/4 rounded-r-lg -translate-x-3 -y-20 -z-10 w-full">
                    <p className="text-nowrap">{jobData.summery}</p>
                    <p className="text-base lg:text-1xl hidden sm:block">•</p>
                </div>
                <div className="place-self-end p-2 min-h-4/6 h-full rounded-lg w-full flex bg-neutral-200" -z-10>
                    <div className="w-full h-min flex flex-wrap gap-2">
                        {jobData.Skill.map((skill) => (
                            <SkillTag text={skill.name} key={skill.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export interface job {
    id: number;
    position: string;
    duration: string;
    company: string;
    imageUrl: string;
    summery: string;
    Skill: {
        id: number;
        name: string;
    }[];
}

export default JobItem;
