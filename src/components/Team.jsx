import { teamMembers } from "../constants";
import Member from "./Member";
import PropTypes from "prop-types";

const Team = ({ sectionRef }) => {
  return (
    <div
      className="min-h-[calc(100vh-64px)] bg-background-950 px-8 pb-8 pt-16 sm:px-16 lg:px-36"
      id="team"
      ref={sectionRef}
    >
      <p className="text-center text-3xl font-medium">Team</p>
      {teamMembers.map((item) => (
        <Member key={item.id} member={item} />
      ))}
    </div>
  );
};

Team.propTypes = {
  sectionRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Team;
