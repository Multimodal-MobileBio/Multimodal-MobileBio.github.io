import { Mail } from "lucide-react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import blankProfile from "../assets/blank-profile.png";
import PropTypes from "prop-types";

const Member = ({ member }) => {
  return (
    <>
      <div className="my-6 flex flex-row justify-between rounded-3xl bg-primary-900 px-10 pb-4 pt-10 shadow-lg">
        <div className="flex h-auto w-1/5 items-center justify-start">
          <img src={blankProfile} alt={member.name} className="rounded-lg" />
        </div>
        <div className="flex w-4/5 flex-col pl-8">
          <div className="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-end">
            <h2 className="pr-4 text-base font-semibold uppercase text-text-100 md:text-xl lg:text-2xl">
              {member.name}
            </h2>
            <p className="text-sm italic text-slate-400 sm:text-base">
              {member.role}
            </p>
          </div>
          <p className="text-xs text-text-100 sm:text-base">
            {member.description}
          </p>
          <div className="flex flex-1">
            <div className="flex w-full items-end justify-end space-x-1">
              <a
                href={"mailto:" + member.email}
                className="rounded-full p-3 hover:bg-secondary-700 "
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                className="rounded-full p-3 hover:bg-secondary-700 "
              >
                <img
                  src={linkedin}
                  className="h-6 w-6"
                  alt={member.name + "'s LinkedIn"}
                />
              </a>
              <a
                href={member.github}
                target="_blank"
                className="rounded-full p-3 hover:bg-secondary-700 "
              >
                <img
                  src={github}
                  className="h-6 w-6"
                  alt={member.name + "'s GitHub"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Member.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default Member;
