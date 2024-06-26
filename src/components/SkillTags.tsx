const SkillTag: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="rounded-lg text-lg text-neutral-50 w-fit h-min p-2 bg-accent">
            {text}
        </div>
    );
};

export default SkillTag;
