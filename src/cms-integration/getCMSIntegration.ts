import { getEducationalExperiences } from './markdown/educational';
import { getHobbies } from './markdown/hobbies';
import { getLinks } from './markdown/links';
import { getPersonalInformation } from './markdown/personal';
import { getProfessionalExperiences } from './markdown/professional';
import { getSkillCategories } from './markdown/skills';
import { getCerts } from './markdown/certs';

type CMS = 'markdown';

const getCMSIntegration = async (cms: CMS) => {
  if (cms === 'markdown') {
    return {
      certs: await getCerts(),
      education: await getEducationalExperiences(),
      hobbies: await getHobbies(),
      links: await getLinks(),
      personalInformation: await getPersonalInformation(),
      professional: await getProfessionalExperiences(),
      skills: await getSkillCategories(),
    };
  }
  return null;
};

export default getCMSIntegration;
