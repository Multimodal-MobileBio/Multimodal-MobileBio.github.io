import { teamMembers } from "../constants";
import Member from "./Member";

const Team = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] px-36 pb-8 pt-16" id="team">
      <p className="text-center text-3xl font-medium">Meet the Team</p>
      {teamMembers.map((item) => (
        <Member key={item.id} member={item} />
      ))}
    </div>
  );
};

export default Team;
