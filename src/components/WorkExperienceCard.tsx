interface WorkExperience {
  title: string;
  date: string;
  isPresent?: boolean;
  points: string[];
}

interface Props {
  experience: WorkExperience;
}

export default function WorkExperienceCard({ experience }: Props) {
  return (
    <div className="ms-4 relative">
      <div className={`${experience.isPresent ? 'bg-green-300' : 'bg-neutral-500'} rounded-full -left-[22px] top-2 h-3 w-3 absolute`}></div>
      <div className="flex justify-between">
        <h2 className="text-lg font-medium text-muted">{experience.title}</h2>
        <h2 className="my-1 text-zinc-400 text-sm">{experience.date}</h2>
      </div>
      <div>
        {/* <ul className={`mt-2 text-sm ${experience.isPresent ? 'text-muted/60' : 'list-disc list-inside'}`}> */}
        <ul className={`mt-2 text-sm text-muted/70 list-disc list-inside`}>
          {experience.points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </div>
  );
} 