import {
  SectionHero,
  SectionAbout,
  SectionDirections,
  SectionWhyWe,
  SectionSkills,
  SectionSlogan,
  SectionOtherProjects,
  SectionLinks,
} from "../components";

const index = () => {
  return (
    <div>
      <SectionHero />
      <SectionAbout />
      <SectionDirections />
      <SectionWhyWe />
      <SectionSkills />
      <SectionSlogan />
      <SectionOtherProjects />
      <SectionLinks />
    </div>
  );
};

export default index